import React from "react";
import {useParams} from "react-router-dom"

export default function DetailPage({data}) {
    const {id} = useParams() 
    const getRestaurant = data.find(restaurant => restaurant.id === id);
    
    if(getRestaurant) {
        return (
            <div className="wrap-container">
            <h1>{getRestaurant.name}</h1>
            <div className="pl-1">{getRestaurant.rating}</div>
            <div className="pl-2">{getRestaurant.address}</div>
             <div className="image">                 
                <img className="d-block w-100 h-100" src={getRestaurant.image}/> 
                </div>  

                <div className="comments">                 
                <img className="d-block w-100 h-100" src={getRestaurant.comments.map(comment => {
                 return comment.text
                })}/> 
                </div>                        
            </div>
        )
    }
    else {
        return (
            <p>Loading ...</p>
          );
    }
    }