
import React, {useEffect, useReducer} from "react";

const UseReducer = ({ name }) => {
  const [state, dispatch] = useReducer(useReducerObject , initialState)

  const onConfirm = () => dispatch({ type: actyonTypes.confirm});
  const onError = () => dispatch({ type: actyonTypes.error})
  const onAccept = () => dispatch({ type: actyonTypes.accept })
  const onWrite = (e) => dispatch({ type: actyonTypes.write, payload: e.target.value })
  const onReset = () => dispatch({ type: actyonTypes.reset });
  const onDeleted = () => dispatch({ type: actyonTypes.deleted });

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
          <input  placeholder={'codigo de seguridad'}
                  value={state.value} onChange={onWrite}
                />
          <button onClick={onAccept}> Comprobar </button>
        </div>
      )
  } else if ( state.confirm && !state.deleted){
    return(
      <>
        <p>estado de confirmacion</p>
        <button onClick={onDeleted}>Si eliminar</button>
        <button onClick={onReset}>No me cague</button>
      </>
    )
  } else {
    return(<>
      <p>Eliminado con exito</p>
        <button onClick={onReset}>volver al inicio</button>
    </>
    )
  }
}


const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirm: false,
}

const actyonTypes = {
  error : 'ERROR',
  confirm: 'CONFIRM',
  write: 'WRITE',
  accept: 'ACCEPT',
  reset: 'RESET',
  deleted: 'DELETED',
}

// uso de reducer object dividiendo en 2 la forma en que se hace
const reducerObject = (state, payload) => ({
    [actyonTypes.error] : { ...state, error:true, loading: false },
    [actyonTypes.confirm]: { ...state, loading: false, error: false, confirm: true },
    [actyonTypes.write]: { ...state, value: payload },
    [actyonTypes.accept]: { ...state, loading: true, error:false },
    [actyonTypes.reset]: { ...state, deleted: false, confirm: false },
    [actyonTypes.deleted]:  {...state, deleted: true },
})

const useReducerObject = (state, action) => {
    console.log(action.payload);
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return state;
    }
}

export { UseReducer };
