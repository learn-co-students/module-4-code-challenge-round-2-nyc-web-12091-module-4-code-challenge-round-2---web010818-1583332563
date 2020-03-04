import React from "react";
import Poem from "./Poem";


class PoemsContainer extends React.Component {
  render() {
    return (
      
      
      <div className="poems-container">
        
        {
          
          // render poems here
          this.props.poems.map((poemObj) => {
            return (
              <Poem 
              poem={poemObj}
              key={poemObj.id}
              
              />
              
            )
          })
        }
      </div>
    );
  }
}

export default PoemsContainer;
