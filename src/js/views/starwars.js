import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

import { CharacterCardComponent } from "../component/cardComponent";
import { PlanetCardComponent } from "../component/planetComponent";
import { StarShipCardComponent } from "../component/starship";

import getState from "../store/flux";

export const StarWars = () => {
  const { actions, store } = useContext(Context);
  const [detail, setDetail] = useState();
  const seeStore = () => {
    console.log(store.characters);
  };
  // useEffect(() => {
  //   actions.getCharacter(person.uid);
  //   setDetail((detailPerson) => setDetail(detailPerson))
  // }, []);
  useEffect(() => {
    const loadPage = async () => {
      await Promise.all([
        actions.getCharacters(),
        actions.getPlanets(),
        actions.getStarships(),
      ]);
    };
    loadPage();
  }, []);
  console.log;

  return (
    <div className="card-container ">
      <h1>Characters</h1>
      <div className="characters d-flex">
        {console.log(store.characters, "Here are your stores")}
        {store.characters?.map((character) => (
          <CharacterCardComponent key={character.uid} character={character} />
        ))}
        : (<p>Loading character...</p>)
      </div>
      <br/>
      
      <div>
        <h1>Planets</h1>
        <div className="planets d-flex">
          {store.planets?.map((planet) => (
            <PlanetCardComponent key={planet.uid} planet={planet} />
          ))}
          :(<p>Loading planets...</p>)
        </div>
      </div>
      <br/>

      <div>
        <h1> Vehicles </h1>
        <div className="starships d-flex">
          {store.starShips?.map((ship) => (
            <StarShipCardComponent key={ship.uid} ship={ship} />
          ))} 
          :(<p>Loading StarShip...</p>)
        </div>
      </div>
    </div>
  );
};
