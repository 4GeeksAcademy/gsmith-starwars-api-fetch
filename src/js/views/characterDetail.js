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
      setCharacter(data.result.properties);
    };

    fetchCharacterDetails();
  }, [id]);

  if (!character) return <h2>Loading...</h2>;

  return (
    <div className="container mt-4">
      <h1>{character.name}</h1>
      <p> Description: {character.description}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Eye Color:</strong> {character.eye_color}</p>
      <p><strong>Hair Color:</strong> {character.hair_color}</p>
      <p><strong>Height:</strong> {character.height}</p>
      <p><strong>Mass:</strong> {character.mass}</p>
      <p><strong>Birth Year:</strong> {character.birth_year}</p>
    </div>
  );
};