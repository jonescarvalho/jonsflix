import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://jonsflix.herokuapp.com/categorias';

    fetch(URL).then(async (resposta) => {
      const response = await resposta.json();
      setCategorias([
        ...response,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, values]);
          clearForm(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          value={values.nome}
          onChange={handleChange}
          name="nome"
          type="text"
        />

        <FormField
          label="Descrição"
          value={values.descricao}
          onChange={handleChange}
          name="descricao"
          type="textarea"
        />

        <FormField
          label="Cor"
          value={values.cor}
          onChange={handleChange}
          name="cor"
          type="color"
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading....
        </div>
      )}

      <ul>
        {categorias.map((categoria) => <li key={`${categoria.titulo}`}>{categoria.titulo}</li>)}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
