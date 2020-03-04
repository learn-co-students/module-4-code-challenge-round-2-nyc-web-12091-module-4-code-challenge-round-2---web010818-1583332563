import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    formOpen: false
  };

  formToggle = () => {
    this.setState({ formOpen: !this.state.formOpen });
  };

  addPoem = newPoem => {
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newPoem)
    })
      .then(response => response.json())
      .then(poems => {
        this.setState({
          poems: [...this.state.poems, poems]
        });
      });
  };

  componentDidMount() {
    fetch("http://localhost:6001/poems")
      .then(response => response.json())
      .then(poems => this.setState({ poems }));
  }

  render() {
    // console.log(this.state.poems)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.formToggle}>
            {this.state.formOpen ? "Hide" : "Show"} new poem form
          </button>
          {this.state.formOpen && <NewPoemForm addPoem={this.addPoem} />}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
