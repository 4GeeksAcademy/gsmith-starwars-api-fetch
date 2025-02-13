import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StarWars } from "../views/starwars";

import { Context } from "../store/appContext";

import "../../styles/demo.css";



export const PlanetCardComponent = ({planet}) => {
  const [card, setCard] = useState();
  const { store, actions } = useContext(Context);
  
    return(
      
         <div className="card charactercard me-3" style={{minWidth:"10em"}}> 
           <img src="..." className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">{planet.name}</h5>
             <p className="card-text d-block">
               Population: {planet} 
               Terain: {planet} </p>

             <Link to="#" className="btn btn-primary">Learn More</Link>
           </div>
        </div>
        

        
    )
}