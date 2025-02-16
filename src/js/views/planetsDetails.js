import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanetsDetails = async () => {
      const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
      const data = await response.json();
      setPlanet(data.result);
    };

    fetchPlanetsDetails();
  }, [id]);

  if (!planet) return <h2>Loading...</h2>;

  return (
    <div className="card" style={{width: "100%"}}>
      <div className="card-body d-flex">
      <img src="..." className="card-img-top" alt="..." />
      <p className="card-text">
          {planet.description}
        </p>
      </div>
      <div className="card cardBody2 d-flex" style={{width: "100%", height:"100%"}}>
        <p>NAme: {planet.properties.name}</p>
        <p>Gravity: {planet.properties.gravity}</p>

        <p>Diameter:{planet.properties.diameter}</p>

        <p>Climate:{planet.properties.climate}</p>

        <p></p>


      </div>
    </div>
  );
};
