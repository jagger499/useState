import React from "react";

class Loading extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      error: false,
      loading: false,
    };
  }

  render() {
    return (
      <div>
          <p> Loading... </p>
      </div>
    )
  }
}

export { Loading };