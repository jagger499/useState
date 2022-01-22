import React, {useEffect, useState} from "react";

const UseState = ({ name }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (loading){
        setLoading(false);
      }
    }, 3000)
  },[loading]);

  return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>por favor escribe el codigo de seguridad</p>
        { error && (
          <p>Error el codigo es incorrecto</p>
        ) 
        }
        {
          loading && (
            <p>cargando...</p>
          )
        }
        <input placeholder={'codigo de seguridad'}/>
        <button onClick={() => {
            setError( prevState => !prevState );
            setLoading( true );
        }}> Comprobar </button>
      </div>
    )
}

export { UseState };
