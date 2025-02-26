import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarShipDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [starShip, setStarShip] = useState(null);

  useEffect(() => {
    const fetchStarShipDetails = async () => {
      const response = await fetch(
        `https://www.swapi.tech/api/starships/${id}`
      );
      const data = await response.json();
      setStarShip(data.result);
      // console.log(starShip)
    };

    fetchStarShipDetails();
  }, [id]);

  if (!starShip) return <h2>Loading...</h2>;

  return (
    <div className="container mt-4">
      <h1>{starShip.properties.name}</h1>
      <p>
        <strong>Decription:</strong> {starShip.description}
      </p>
      <p>
        <strong>Cost in credits:</strong> {starShip.properties.cost_in_credits}
      </p>
      <p>
        <strong>Passengers</strong> {starShip.properties.pasengers}
      </p>
      <p>
        <strong>Manufacturer</strong> {starShip.properties.manufacturer}
      </p>
    </div>
  );
};
