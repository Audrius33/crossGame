import logo from './logo.svg';
import './App.css';
import Cross from "./components/Cross";
import React, {useState, useRef, useEffect, Component} from "react";

function App() {


    const [getSymbol, setSymbol] = useState(true)

    function crossPlace(place) {
        console.log(place)
        setSymbol(!getSymbol)
        if (place.target.innerText.length === 0){

            getSymbol ? place.target.innerText = "0" : place.target.innerText = "X"
        }

    }

  return (
      <div className="Area">
        <Cross send={crossPlace}/>
        <Cross send={crossPlace}/>
        <Cross send={crossPlace}/>
        <Cross send={crossPlace}/>
        <Cross send={crossPlace}/>
        <Cross send={crossPlace}/>
        <Cross send={crossPlace}/>
        <Cross send={crossPlace}/>
        <Cross send={crossPlace}/>
      </div>
  );
}

export default App;
