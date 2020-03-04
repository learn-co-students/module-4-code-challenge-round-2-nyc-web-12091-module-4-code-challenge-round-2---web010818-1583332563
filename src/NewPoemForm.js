import React from "react";

class NewPoemForm extends React.Component {

  state ={ 
    title: '',
    author: '',
    content: ''
  }

  handleState = (event) => {
    this.setState({ 
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event)=> {
    event.preventDefault()
    this.props.handlePost(this.state)

  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={(event)=> this.handleSubmit(event)}>
        <input name="title" value={this.state.title} onChange={(event) => this.handleState(event)} />
        <input name="author" value={this.state.author} onChange={(event) => this.handleState(event)} />
        <textarea placeholder="Write your masterpiece here..." name="content" value={this.state.content} onChange={(event) => this.handleState(event)} rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
