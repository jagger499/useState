import React, {useEffect, useState} from "react";

const UseState = ({ name }) => {
  const [value,setValue] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const SECURITY_CODE = 'paradigma';

  useEffect(() => {
    setTimeout(() => {  
      if (loading){
        if ( value === SECURITY_CODE ){
          setLoading(false);
          setError(false);
          setConfirm(true);
        } else {
          setError(true);
          setLoading(false);
        }
      }
    }, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[loading]);

  if (!deleted && !confirm) {
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
  } else if ( confirm && !deleted){
    return(
      <>
        <p>estado de confirmacion</p>
        <button onClick={() => { setDeleted(true) }}>
          Si eliminar
        </button>
        <button onClick={
          () => { 
            setConfirm(false); 
            setValue('');
          }
          }>
          No me cague
        </button>
      </>
    )
  } else {
    return(<>
      <p>Eliminado con exito</p>
        <button onClick={
          () => { 
            setDeleted(false);
            setConfirm(false); 
            setValue('');
          }
          }>
          volver al inicio
        </button>
    </>
    )
  }
}

export { UseState };
