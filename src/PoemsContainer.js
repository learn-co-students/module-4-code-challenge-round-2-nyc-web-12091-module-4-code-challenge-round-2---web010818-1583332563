import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    // console.log(this.props.poems);
    return (
      <div className="poems-container">
        {this.props.poems.map(poem => (
          <Poem poem={poem} key={poem.id} />
        ))}
      </div>
    );
  }
}

export default PoemsContainer;
