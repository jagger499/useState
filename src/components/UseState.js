import React, {useEffect, useState} from "react";

const UseState = ({ name }) => {
  const [state, setState] = useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirm: false,
  })

  const onConfirm = () => {
    setState({ ...state, loading: false, error: false, confirm: true })
  }

  const onError = () => {
    setState({ ...state, error:true, loading: false })
  }
  
  const accept = () => {
    setState({ ...state, loading: true, error:false })
  }

  const onWrite = (e) => {
    setState({ ...state, value: e.target.value })
  }

  const onReset = () => { 
    setState({ ...state, deleted: false, confirm: false })
  }

  const onDeleted = () => {
    setState({...state, deleted: true })
  }

  const SECURITY_CODE = 'paradigma';

  useEffect(() => {
    setTimeout(() => {  
      if (state.loading){
        if ( state.value === SECURITY_CODE ){
          onConfirm();
        } else {
          onError();
        }
      }
    }, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[state.loading]);

  if (!state.deleted && !state.confirm) {
    return (
        <div>
          <h2>Eliminar {name}</h2>
          <p>por favor escribe el codigo de seguridad</p>
          { state.error && (<p>Error el codigo es incorrecto</p>) }
          { state.loading && (<p>cargando...</p>) }
          <input placeholder={'codigo de seguridad'}
                 value={state.value}
                 onChange={(e) => onWrite(e)}/>
          <button onClick={() => accept()}> Comprobar </button>
        </div>
      )
  } else if ( state.confirm && !state.deleted){
    return(
      <>
        <p>estado de confirmacion</p>
        <button onClick={() => { onDeleted() }}>
          Si eliminar
        </button>
        <button onClick={() => onReset()}>
          No me cague
        </button>
      </>
    )
  } else {
    return(<>
      <p>Eliminado con exito</p>
        <button onClick={() => onReset()}>
          volver al inicio
        </button>
    </>
    )
  }
}

export { UseState };
