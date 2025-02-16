import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      const data = await response.json();
      setCharacter(data.result);
    };

    fetchCharacterDetails();
  }, [id]);

  if (!character) return <h2>Loading...</h2>;

  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card-body d-flex">
      <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder image" />
        <p className="card-text">{character.description}</p>
      </div>
      <div
        className="card cardBody2 d-flex"
        style={{ width: "100%", height: "100%" }}
      >
        <p>Name: {character.properties.name}</p>
        <p>
          <strong>Gender:</strong> {character.properties.gender}
        </p>
        <p>
          <strong>Eye Color:</strong> {character.properties.eye_color}
        </p>
        <p>
          <strong>Hair Color:</strong> {character.properties.hair_color}
        </p>
        <p>
          <strong>Height:</strong> {character.properties.height}
        </p>
        <p>
          <strong>Mass:</strong> {character.properties.mass}
        </p>
        <p>
          <strong>Birth Year:</strong> {character.birth_year}
        </p>

        <p></p>
      </div>
    </div>
  );
};


