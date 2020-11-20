import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from './fakeData.js';
import Card from "./Card.js"
import {Switch, Route } from "react-router-dom";
import DetailPage from "./DetailPage.js"


function App() {
  const [data, setData] = useState(fakeData);

  useEffect(() => {
     setData(data);
     console.log(data);
  }, []);

  return (

    <>
    <Switch>
          <Route exact path="/">
          <header className="header">
    <form className="form-inline mx-5 my-2 my-lg-0">
            <label>
                <input
                className="form-control ml-sm-5" placeholder="Type restaurant"
                />
                <input
                className="form-control ml-sm-5" placeholder="Type location"/>
            </label>
            <input className="btn btn-danger ml-sm-3 my-2 my-sm-0" type="submit" value="Search" />
        </form>
    </header>
    <Card data={data}/>
          </Route>
          <Route path="/:id">
             <DetailPage data={data}/>
          </Route>
      </Switch>
    </>    
  );
}

export default App;
