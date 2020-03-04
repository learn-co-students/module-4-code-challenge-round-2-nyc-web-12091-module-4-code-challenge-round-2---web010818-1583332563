import React from "react";

class NewPoemForm extends React.Component {

state = {
  title: "",
  author: "",
  content: ""
}

handleTitle = (e) => {
  this.setState({
    title: e.target.value
  })
}

handleAuthor = (e) => {
  this.setState({
    author: e.target.value
  })
}

handleContent = (e) => {
  this.setState({
    content: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.submitPoem(this.state)
}


  render() {
    return (
      <form className="new-poem-form">
        <input type="text" value={this.state.title} onChange={this.handleTitle} placeholder="Title" />
        <input type="text" value={this.state.author} onChange={this.handleAuthor} placeholder="Author" />
        <textarea type="text" value={this.state.content} onChange={this.handleContent} placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default NewPoemForm;
