import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Smurfs from './Smurfs';
import Form from "./Form";
import {SmurfContext} from '../contexts';


function App()  {

  const [smurfs, setSmurfs] = useState([]);

  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: 2
});

const handleChange = e => {
    e.persist();
    const newSmurf = {
        ...smurf,
        [e.target.name]: e.target.value,
        id: Date.now(),
    };
    console.log(newSmurf);
    setSmurf(newSmurf);

}

const handleSubmit = e => {
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      console.log(response);
    })

    setSmurfs([
      ...smurfs, smurf
    ])
  
    setSmurf({
        name: "",
        age: "",
        height: "",
        id: 2});

    }

  useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      setSmurfs(response.data);
    })
  }, [])
 
  



    return (
      <div className="App">
        
        <SmurfContext.Provider value={{smurfs, smurf, handleChange, handleSubmit}}>
          <div id = "left">
            <img src ="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/The_Smurfs_logo.svg/1200px-The_Smurfs_logo.svg.png" />
            <Form />
          </div>
          <Smurfs />
          </SmurfContext.Provider>
          
      </div>
    );
  }


export default App;
