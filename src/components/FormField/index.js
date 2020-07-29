import React from "react";

function FormField({ value, name, type, label, onChange }) {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          value={value} // value= {values['nome']}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormField;
