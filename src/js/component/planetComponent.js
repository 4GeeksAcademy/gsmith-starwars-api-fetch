import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StarWars } from "../views/starwars";

import { Context } from "../store/appContext";

import "../../styles/demo.css";



export const PlanetCardComponent = ({planet}) => {
  const [card, setCard] = useState();
  const { store, actions } = useContext(Context);
  
    return(
      
         <div className="card planetcard me-3" > 
           <img src="..." className="card-img-top" alt="..."/>
           <div className="card-body d-flex">
             <h5 className="card-title">{planet.properties.name}</h5>
             <p className="card-text d-block">
               Population: {planet.properties.population} 
               Terain: {planet.properties.terain} </p>

             <Link to={`/planet/${planet.uid}`} className="btn btn-primary">Learn More</Link>
           </div>
        </div>
        

        
    )
}