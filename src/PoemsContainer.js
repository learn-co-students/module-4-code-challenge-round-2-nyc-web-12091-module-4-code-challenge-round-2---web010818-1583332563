import React from "react";
import Poem from "./Poem";

const PoemsContainer = (props) => {
  return (
    <div className="poems-container">
      {
        props.poems.map(poem => <Poem key={poem.id} {...poem} toFavorites={props.toFavorite} deleteHandle={props.deleteHandle} />)
      }
    </div>
  );
}


export default PoemsContainer;
