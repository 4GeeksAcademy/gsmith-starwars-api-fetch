import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StarWars } from "../views/starwars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const StarShipCardComponent = ({ ship }) => {
  //   const [card, setCard] = useState();
  const { store, actions } = useContext(Context);
  const isFavorite = store.favorites.some(fav => fav.uid === ship.uid);

  return (
    <div className="card shipcard me-3" style={{ minWidth: "15em" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{ship.properties.name}</h5>
        <p className="card-text d-block">
          Model: {ship.properties.model} <br />
          Passengers: {ship.properties.passengers} <br />
        </p>{" "}
        <br />
        <div className="card-footer">
          <Link to={`/starship/{starship.uid}`} className="learnMore btn btn-primary">
            Learn More
          </Link>
          <button
            className="favorite-btn heart "
            onClick={() => actions.toggleFavorite(ship)}
          >
            <FontAwesomeIcon
              icon={faHeart}
              color={isFavorite ? "red" : "gray"}
              size="lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
