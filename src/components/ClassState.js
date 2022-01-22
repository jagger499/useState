import React from "react";
import { Loading } from "./loading";


const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      value: '',
      error: false,
      loading: false,
    };
  }

  componentDidUpdate(){
    if(this.state.loading) {
      setTimeout(() => {
        this.setState({ loading : false});

        if( this.state.value === SECURITY_CODE){
          this.setState({ error:false, loading: false });
        } else {
          this.setState({ error: true, loading: false })
        }
      }, 3000)
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>por favor escribe el codigo de seguridad</p>
        { this.state.error && ( <p>error el codigo es incorrecto</p>)}
        { this.state.loading && ( <Loading /> )}

        <input placeholder={'codigo de seguridad'}
               value={this.state.value}
               onChange={(e) => {
                 this.setState({ value: e.target.value });
               }}/>
        <button onClick={() => {
          this.setState({ error: false });
          this.setState({ loading: true });
        }}> Comprobar </button>
      </div>
    )
  }
}

export { ClassState };
