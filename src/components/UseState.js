import React, {useEffect, useState} from "react";

const UseState = ({ name }) => {
  const [value,setValue] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const onConfirm = () => {
    setLoading(false);
    setError(false);
    setConfirm(true);
  }

  const onError = () => {
    setError(true);
    setLoading(false);
  }
  
  const accept = () => {
    setLoading( true );
    setError( false );
  }

  const onWrite = (e) => {
    setValue(e.target.value);
  }

  const home = () => { 
    setDeleted(false);
    setConfirm(false); 
    setValue('');
  }

  const SECURITY_CODE = 'paradigma';

  useEffect(() => {
    setTimeout(() => {  
      if (loading){
        if ( value === SECURITY_CODE ){
          onConfirm();
        } else {
          onError();
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
                 onChange={(e) => onWrite(e)}/>
          <button onClick={() => accept()}> Comprobar </button>
        </div>
      )
  } else if ( confirm && !deleted){
    return(
      <>
        <p>estado de confirmacion</p>
        <button onClick={() => { setDeleted(true) }}>
          Si eliminar
        </button>
        <button onClick={() => home()}>
          No me cague
        </button>
      </>
    )
  } else {
    return(<>
      <p>Eliminado con exito</p>
        <button onClick={() => home()}>
          volver al inicio
        </button>
    </>
    )
  }
}

export { UseState };
