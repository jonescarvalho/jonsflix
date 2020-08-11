import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { Table, Tr, TdExcluir, Td, TdAlterar } from '../../../components/Table';
import categoriasRepository from '../../../repositories/categorias'
function CadastroCategoria() {
  const history = useHistory();
  const { handleChange, setValue, values, clearForm } = useForm({
    id: 0,
    nome: '',
    descricao: '',
    cor: '#000000',
  });

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  const handleClick = (e, data) => {
    values.titulo = data.titulo;
    values.descricao = data.descricao;
    values.cor = data.cor;
    values.id = data.id;
    setValue();
    window.scrollTo(0, 0);
  }

  const limpaCampos = () => {
    clearForm();
    window.scrollTo(0, 0);
  }

  const onDelete = (cat) => {
    console.log(cat);

    categoriasRepository.deletecategory({
      id: cat.id
    }).then(() => {

    });
  }

  const tabelaCategorias = ((categorias) => {
    return (<Table>
      {categorias.map((categoria) =>
        <tbody key={`${categoria.titulo}`}>
          <Tr>
            <Td style={{ backgroundColor: categoria.cor || "red" }}>
              {categoria.titulo}
            </Td>
            <Td style={{ backgroundColor: categoria.cor || "red" }}>
              {categoria.descricao}
            </Td>
            <TdExcluir onClick={() => { if (window.confirm('Tem certeza que deseja apagar a categoria?, esta ação apagará também os vídeos relacionados.')) onDelete(categoria) }}>
              Excluir
            </TdExcluir>
            <TdAlterar id={categoria.id} onClick={((e) => handleClick(e, categoria))}>
              Editar
            </TdAlterar>
          </Tr>
        </tbody>)}
    </Table>);
  });

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (values.id <= 0) {
            categoriasRepository.create({
              titulo: values.titulo,
              descricao: values.descricao,
              cor: values.cor,
            }).then(() => {
              //history.push('/cadastro/categoria');
              setCategorias([...categorias, values]);
              limpaCampos();
            });
          } else {
            categoriasRepository.update({
              titulo: values.titulo,
              descricao: values.descricao,
              cor: values.cor,
              id: values.id,
            }).then(() => {
              //history.push('/cadastro/categoria');
              categorias.find((categoria) => {
                if (categoria.id === values.id) {
                  categoria.titulo = values.titulo;
                  categoria.descricao = values.descricao;
                  categoria.cor = values.cor;
                  setValue();
                  limpaCampos();
                }
              });
            });
          }
        }}
      >
        <FormField
          label="Nome da Categoria"
          value={values.titulo}
          name="titulo"
          type="text"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          value={values.descricao}
          name="descricao"
          type="textarea"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          value={values.cor}
          name="cor"
          type="color"
          onChange={handleChange}
        />

        <Button type="submit">Salvar</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading....
        </div>
      )}


      {tabelaCategorias(categorias)}

      <Button as={Link} to="/">Ir para home</Button>
    </PageDefault>
  );
}

export default CadastroCategoria;
