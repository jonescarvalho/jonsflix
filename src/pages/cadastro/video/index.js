import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button, { ButtonLeft } from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import { Table, Tr, TdExcluir, Td, TdAlterar } from '../../../components/Table';
//import ButtonLink from "../Button";


function CadastroVideo() {
  const history = useHistory();
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);


  const { handleChange, setValue, values } = useForm({
    id: 0,
    titulo: '',
    url: '',
    categoria: '',
  });



  useEffect(() => {
    videosRepository
      .getAllWithVideos()
      .then((videosFromServer) => {
        setVideos(videosFromServer);
      });

    categoriasRepository
      .getAllCategoriesWithVideos()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  const handleClick = (e, data) => {
    values.titulo = data.titulo;
    values.url = data.url;
    values.categoriaId = data.categoriaId;
    values.id = data.id;
    values.categoria = data.categoria.titulo;

    setValue();
    window.scrollTo(0, 0);
  }

  const onDelete = (vid) => {
    console.log(vid);

    videosRepository.deleteVideo({
      id: vid.id
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Vídeo
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        if (values.id <= 0) {
          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          }).then(() => {
            history.push('/');
          });
        } else {
          videosRepository.update({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
            id: values.id,
          }).then(() => {
            history.push('/');
          });
        }

      }}
      >

        <FormField
          label="Titulo do vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">Salvar</Button>

        <ButtonLeft as={Link} to="/cadastro/categoria">Cadastro Categoria</ButtonLeft>
      </form>


      <Table>
        {videos.map((video) =>
          <tbody key={`${video.titulo}`}>
            <Tr>
              <Td>
                {video.titulo}
              </Td>
              <Td style={{ backgroundColor: video.categoria.cor || "red" }}>
                {video.categoria.titulo}
              </Td>
              <TdExcluir id={video.id} onClick={() => { if (window.confirm('Tem certeza que deseja apagar o vídeo?')) onDelete(video) }}>
                Excluir
              </TdExcluir>
              <TdAlterar id={video.id} onClick={((e) => handleClick(e, video))}>
                Editar
              </TdAlterar>
            </Tr>
          </tbody>)}
      </Table>

    </PageDefault>
  );
}

export default CadastroVideo;
