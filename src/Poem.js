import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }

  toggleRead = () => {
    this.setState({
      read: !this.state.read
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p>
          <strong>- {this.props.author}</strong>
        </p>
        <button onClick={this.toggleRead}>Mark as { this.state.read ? "unread" : "read"} </button> 
        <button onClick={() => this.props.toFavorites(this.props.id)}>Favorite</button>
        <button onClick={()=>this.props.deleteHandle(this.props.id)}>Delete</button>

      </div>
    );
  }
}

export default Poem;
