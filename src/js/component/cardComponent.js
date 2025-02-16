import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StarWars } from "../views/starwars";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const CharacterCardComponent = ({ character }) => {
  const [card, setCard] = useState();
  const { store, actions } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(
    store.favorites.some((fav) => fav.uid === character.uid)
  );

  
  const toggleFavorite = () => {
    actions.addFavorites(character);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card charactercard me-3" style={{ minWidth: "10em" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{character.properties.name}</h5>
        <p className="card-text d-block">
          Gender: {character.properties.gender} <br/>
          Eye Color: {character.properties.eye_color} <br/>
          Hair Color: {character.properties.hair_color}
        </p>{" "}
        <br />
        <Link to = {`/character/${character.uid}`} className=" learnMore btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
};
