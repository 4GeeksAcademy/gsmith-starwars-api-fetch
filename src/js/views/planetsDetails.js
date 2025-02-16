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
      setPlanet(data.result.properties);
    };

    fetchPlanetsDetails();
  }, [id]);

  if (!planet) return <h2>Loading...</h2>;

  return (
    <div className="container mt-4">
      <h1>{planet.name}</h1>
      <p><strong>Diameter:</strong> {planet.diameter}</p>
      <p><strong>Gravity:</strong> {planet.gravity}</p>
      <p><strong>Population:</strong> {planet.population}</p>
    </div>
  );
};