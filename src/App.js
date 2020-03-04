import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritePoem from "./FavoritePoem"

class App extends React.Component {

  state = {
    poems: [],
    favorite: [],
    toggleView: false
  }
  componentDidMount(){
    fetch("http://localhost:6001/poems")
      .then((resp) => resp.json())
      .then((data) => this.setState({poems:data}))

  }

  handleView = ()=> {
    this.setState({
      toggleView : !this.state.toggleView
    })
  }

  handlePost =(poem) => {
    
    fetch('http://localhost:6001/poems', { 
      method: "POST", 
      headers: { "Content-Type": "Application/Json" }, 
      body: JSON.stringify(poem) })
    .then(this.setState({
      poems: [...this.state.poems, poem]
    }))
  }

  deleteHandle =(id)=> {
    fetch(`http://localhost:6001/poems/${id}`, {
      method: "DELETE"
    })
  
  }
    // find poem by id then remove from state
  
  addToFavorite = (id) => {
    this.setState({
      favorite: [...this.state.favorite,id]
    })
  }

  poemFavorites = () => { 
    return this.state.poems.filter(
      poem => { return this.state.favorite.includes(poem.id) }) 
     } 

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleView}>Show/hide new poem form</button>
          {
            this.state.toggleView && <NewPoemForm handlePost={this.handlePost}/> 
          }
        </div>
        <FavoritePoem 
        favorites={this.state.favorite}
        favorite={this.poemFavorites}
        />
        <PoemsContainer 
        poems={this.state.poems}
        deleteHandle={this.deleteHandle}
        toFavorite={this.addToFavorite}
        />
      </div>
    );
  }
}

export default App;
