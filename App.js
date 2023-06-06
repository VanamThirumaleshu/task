
import './App.css';
import { useEffect,useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import React from 'react';
import Details from './Details';
import Home from './Home'





function App() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch('https://api.tvmaze.com/search/shows?q=all').then(
      response => response.json()
    ).then(json =>{setData(json);console.log(json)})
  },[])





  return (
    
    
    
    
    <div className="container" id='container'>
      
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/details' Component={Details}/>
        </Routes>
      
    </div>
    
  );
}

export default App;
