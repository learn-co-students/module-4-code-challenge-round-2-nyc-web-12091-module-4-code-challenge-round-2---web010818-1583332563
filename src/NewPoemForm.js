import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: "",
    author: "",
    content: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newPoem = this.state;
    this.props.addPoem(newPoem);
    this.setState = {
      title: "",
      author: "",
      content: ""
    };
  };

  render() {
    // console.log(this.state.title, "TITLE");
    // console.log(this.state.author, "AUTHOR");
    // console.log(this.state.content, "CONTENT");
    return (
      <form onSubmit={this.handleSubmit} className="new-poem-form">
        <input
          name="title"
          onChange={this.handleChange}
          value={this.state.title}
          placeholder="Title"
        />
        <input
          name="author"
          onChange={this.handleChange}
          value={this.state.author}
          placeholder="Author"
        />
        <textarea
          name="content"
          onChange={this.handleChange}
          value={this.state.content}
          placeholder="Write your masterpiece here..."
          rows={10}
        />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
