import React from "react";
import {Link} from "react-router-dom";
import './App.css';
import Card from "react-bootstrap/Card";

export default function Cards({data}) {
    return (

    <div className="wrapper">
        {data.map((restaurant) => {
          return(
        <Card className ="card-data" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={restaurant.image} />
      <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
        </Card.Text>
        </Card.Body>
      <Card.Title className="list-group-flush m-5">
      <Card.Title>{restaurant.city[2]}</Card.Title>
      <Card.Title>{restaurant.adress}</Card.Title>
      <Card.Title>Rating: {restaurant.rating} Stars</Card.Title>
      </Card.Title>
      <Card.Body>
      <Link to={restaurant.id}><a>Find More ...</a></Link>
    </Card.Body>
    </Card>
    )})}
           </div>
           )

}



        