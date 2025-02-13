import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StarWars } from "../views/starwars";

import { Context } from "../store/appContext";

import "../../styles/demo.css";



export const CharacterCardComponent = ({character}) => {
  const [card, setCard] = useState();
  const { store, actions } = useContext(Context);
  
    return(
      
         <div className="card charactercard me-3" style={{minWidth:"10em"}}> 
           <img src="..." className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">{character.name}</h5>
             <p className="card-text d-block">
               Gender: {character.gender} 
               Eye Color: {character.eye_color}
               Hair Color: {character.hair_color}</p> <br/>

             <Link to="#" className="btn btn-primary">Learn More</Link>
           </div>
        </div>
        

        
    )
}