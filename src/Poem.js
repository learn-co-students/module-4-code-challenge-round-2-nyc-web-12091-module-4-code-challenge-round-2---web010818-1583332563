import React from "react";

class Poem extends React.Component {
  state = {
    isRead: false
  };

  toggleStatus = () => {
    this.setState({ isRead: !this.state.isRead });
  };
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={this.toggleStatus}>
          Mark as {this.state.isRead ? "unread" : "read"}
        </button>
      </div>
    );
  }
}

export default Poem;
