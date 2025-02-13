import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

import { CharacterCardComponent } from "../component/cardComponent";
import { PlanetCardComponent } from "../component/planetComponent";

import getState from "../store/flux";

export const StarWars = () => {
  const { actions, store } = useContext(Context);
  const [detail, setDetail] = useState()

  // useEffect(() => {
  //   actions.getCharacter(person.uid);
  //   setDetail((detailPerson) => setDetail(detailPerson))
  // }, []);
  useEffect(() => {
    const loadPage = async () => {
      await actions.getCharacters()
      
    }
    loadPage()
  }, [])

  console.log("Characters in Store:", store.character);

  return (
    <div className="card-container ">
       <h1>Characters</h1>
      <div className="characters d-flex">
        {store.characters?.map((character, index) => (
          <CharacterCardComponent key={character.uid} character={character} />
        ))}
        : (<p>Loading character...</p>)
      </div>

      <div>
        <h1>Planets</h1>
        <div>
        {store.planets?.map((planet, index) => (
         <PlanetCardComponent key={planet.uid} planet={planet}/>
        ))}
        </div>
      </div>


      
    </div>
  );
};
