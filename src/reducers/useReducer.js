
import React, {useEffect, useReducer} from "react";

const UseReducer = ({ name }) => {
  const [state, dispatch] = useReducer(useReducerObject , initialState)

  const SECURITY_CODE = 'paradigma';

  useEffect(() => {
    setTimeout(() => {  
      if (state.loading){
        if ( state.value === SECURITY_CODE ){
          dispatch({ type: 'CONFIRM' });
        } else {
          dispatch({ type: 'ERROR' })
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
            onChange={e => dispatch({ type: 'WRITE', payload: e.target.value })}
                />
          <button onClick={() => dispatch({ type: 'ACCEPT' })}> Comprobar </button>
        </div>
      )
  } else if ( state.confirm && !state.deleted){
    return(
      <>
        <p>estado de confirmacion</p>
        <button onClick={() => { dispatch({ type: 'DELETED' })}}>
          Si eliminar
        </button>
        <button onClick={() => { dispatch({ type: 'RESET' })}}>
          No me cague
        </button>
      </>
    )
  } else {
    return(<>
      <p>Eliminado con exito</p>
        <button onClick={() => { dispatch({ type: 'RESET' })}}>
          volver al inicio
        </button>
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

// uso de reducer object dividiendo en 2 la forma en que se hace
const reducerObject = (state, payload) => ({
    'ERROR': { ...state, error:true, loading: false },
    'CONFIRM': { ...state, loading: false, error: false, confirm: true },
    'WRITE': { ...state, value: payload },
    'ACCEPT': { ...state, loading: true, error:false },
    'RESET': { ...state, deleted: false, confirm: false },
    'DELETED':  {...state, deleted: true },
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
