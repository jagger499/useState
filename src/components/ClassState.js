import React from "react";
import { Loading } from "./loading";

class ClassState extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      error: false,
      loading: false,
    };
  }

  componentDidUpdate(){
    if(this.state.loading) {
      setTimeout(() => {
        this.setState({ loading : false});
      }, 3000)
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>por favor escribe el codigo de seguridad</p>
        {
          this.state.error && (
            <p>error el codigo es incorrecto</p>
          )
        }
        {
          this.state.loading && (
            <Loading />
          )
        }

        <input placeholder={'codigo de seguridad'}/>
        <button onClick={() => {
          this.setState({ error: !this.state.error });
          this.setState({ loading: !this.state.loading });
        }}> Comprobar </button>
      </div>
    )
  }
}

export { ClassState };
