import React from "react";

class Poem extends React.Component {

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <p>{this.props.poem.author}</p>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
