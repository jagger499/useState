import React, {useState} from "react";

const UseState = ({ name }) => {
  const [error, setError] = useState(false);
  return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>por favor escribe el codigo de seguridad</p>
        { error && (
          <p>Error el codigo es incorrecto</p>
        ) }
        <input placeholder={'codigo de seguridad'}/>
        <button onClick={() => setError( prevState => !prevState ) }> Comprobar </button>
      </div>
    )
}

export { UseState };
