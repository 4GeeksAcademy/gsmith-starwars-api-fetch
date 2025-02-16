import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StarWars } from "../views/starwars";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const StarShipCardComponent = ({ ship }) => {
  //   const [card, setCard] = useState();
  const { store, actions } = useContext(Context);

  return (
    <div className="card charactercard me-3" style={{ minWidth: "10em" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{ship.properties.name}</h5>
        <p className="card-text d-block">
          Model: {ship.properties.model} <br />
          Passengers: {ship.properties.passengers} <br />
        </p>{" "}
        <br />
        <div className="card-footer">
        <Link to={`/starship/{starship.uid}`} className="btn btn-primary">
          Learn More
        </Link>
        <button
            className="favorite-btn heart " style={{height: "10px"}}
            onClick={() => actions.toggleFavorite(character)}
          >
            ♥
          </button>
        </div>
        
      </div>
    </div>
  );
};
