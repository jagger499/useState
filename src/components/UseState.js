import React, {useEffect, useState} from "react";
const SECURITY_CODE = 'paradigma';

const UseState = ({ name }) => {
  const [state, setState] = useState({
    value: '',
    loading: false,
    error: false,
  });

  useEffect(() => {
    setTimeout(() => {  
      if (state.loading){
        if ( state.value === SECURITY_CODE ){
          // setError(true);
          setState({ ...state, loading: false,  error: false });
        } else {
          setState({ ...state, loading: false, error: true });
        }
        // setLoading(false);
      }
    }, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[state.loading]);

  return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>por favor escribe el codigo de seguridad</p>
        { state.error && (<p>Error el codigo es incorrecto</p>) }
        { state.loading && (<p>cargando...</p>) }
        <input placeholder={'codigo de seguridad'}
               value={state.value}
               onChange={(e) => {
                 // setValue(e.target.value);
                 setState({ ...state, value: e.target.value });
               }}/>
        <button onClick={() => {
            // setLoading( true );
            // setError( false );
            setState({ ...state, loading: true, error: false });
        }}> Comprobar </button>
      </div>
    )
}

export { UseState };
