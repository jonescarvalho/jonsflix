import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, // nome : 'valor'
    });
  }

  function handleChange(info) {
    // setValues(info.target.value);
    // const { getAttribute, value } = info.target;
    // setValue(getAttribute("name"), value);
    setValue(info.target.getAttribute('name'), info.target.value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
