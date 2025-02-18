import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StarWars } from "../views/starwars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const PlanetCardComponent = ({ planet }) => {

  const { store, actions } = useContext(Context);
  const isFavorite = store.favorites.some((fav) => fav.uid === planet.uid);

  return (
    <div className="card planetcard me-3" style={{ minWidth: "15em" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body ">
        <h5 className="card-title">{planet.properties.name}</h5>
        <p className="card-text d-block">
          Population: {planet.properties.population} <br />
          Terrain: {planet.properties.terrain}
        </p>
        <div className="card-footer">
          <Link to={`/planet/${planet.uid}`} className="learnMore btn btn-primary">
            Learn More
          </Link>
          <button
            className="favorite-btn heart "
            onClick={() => actions.toggleFavorite(character)}
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
