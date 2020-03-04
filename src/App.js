import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

state = {
  poems: [],
  form: false
}

showForm = () => {
  this.setState({
    form: !this.state.form
  })
}

componentDidMount(){
  fetch("http://localhost:6001/poems")
  .then(resp => resp.json())
  .then(poems => {
    console.log(poems)
    this.setState({
      poems: poems
    })
  })
}

submitPoem = (sp) => {
const newPoem = [...this.state.poems, sp]
this.setState({
  poems: newPoem
})
}

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm}>{this.state.form ? "Show" : "Hide"} New Poem Form </button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer 
        poems={this.state.poems}
        submitPoem={this.submitPoem}
        />
      </div>
    );
  }
}

export default App;
