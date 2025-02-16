import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarShipDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [starShip, setstarShip] = useState(null);

  useEffect(() => {
    const fetchStarShipDetails = async () => {
      const response = await fetch(
        `https://www.swapi.tech/api/starships/${id}`
      );
      const data = await response.json();
      setstarShip(data.result);
      // console.log(starShip)
    };

    fetchStarShipDetails();
  }, [id]);

  if (!starShip) return <h2>Loading...</h2>;

  return (
    <div className="container mt-4">
      <h1>{ship.properties.name}</h1>
      <p>
        <strong>Decription:</strong> {ship.description}
      </p>
      {/* <p>
        <strong>Cost in credits:</strong> {ship.cost_in_credits}
      </p>
      <p>
        <strong></strong> {starShip.hair_color}
      </p>
      <p>
        <strong></strong> {starShip.height}
      </p> */}
    </div>
  );
};
