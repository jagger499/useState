import React, {useEffect, useState} from "react";

const UseState = ({ name }) => {
  const [value,setValue] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const SECURITY_CODE = 'paradigma';

  useEffect(() => {
    setTimeout(() => {  
      if (loading){
        if ( value !== SECURITY_CODE ){
          setError(true);
        } 
        setLoading(false);
      }
    }, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[loading]);

  return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>por favor escribe el codigo de seguridad</p>
        { error && (<p>Error el codigo es incorrecto</p>) }
        { loading && (<p>cargando...</p>) }
        <input placeholder={'codigo de seguridad'}
               value={value}
               onChange={(e) => {
                 setValue(e.target.value);
               }}/>
        <button onClick={() => {
            setLoading( true );
            setError( false );
        }}> Comprobar </button>
      </div>
    )
}

export { UseState };
