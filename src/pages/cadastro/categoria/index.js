import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000",
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, //nome : 'valor'
    });
  }

  function handleChange(info) {
    // setValues(info.target.value);
    // const { getAttribute, value } = info.target;
    // setValue(getAttribute("name"), value);
    setValue(info.target.getAttribute("name"), info.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria:"
          value={values.nome}
          onChange={handleChange}
          name="nome"
          type="text"
        />

        <FormField
          label="Descrição: "
          value={values.descricao}
          onChange={handleChange}
          name="descricao"
          type="textarea"
        />

        <FormField
          label="Cor:"
          value={values.cor}
          onChange={handleChange}
          name="cor"
          type="color"
        />

        {/* <div>
          <label>
            Descrição da Categoria:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
              required
            />
          </label>
        </div> */}

        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
              required
            />
          </label>
        </div> */}
        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={`${categoria}${index}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
