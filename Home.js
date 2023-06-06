import './App.css';

import { useEffect,useState } from 'react';

import React from 'react';






function App() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch('https://api.tvmaze.com/search/shows?q=all').then(
      response => response.json()
    ).then(json =>{setData(json);})
  },[])


  


  return (
    
    
    
    
    <div className="container" id='container'>
      <h1 className='shadow-lg p-3 mb-5 bg-white rounded'>Movie Shows Details</h1>
      
      <div className='row justify-content-center'>
      
        
          
          {data.map(item => 
            

            

            
            
            <div className="card mt-5 col-md-4 shadow-lg p-3 mb-5 bg-white rounded"> 
              <img src={item.show.image.original} className='card-img-top' alt='Kohli'></img>
              <div className="card-body">
                <h5 className="card-title">{item.show.name}</h5>
                <p className="card-text">{item.show.language}</p>
                <a href={`/details?moviename=${item.show.name}&&movielanguage=${item.show.language}&&movieimg=${item.show.image.original}&&moviesummary=${item.show.summary}&&movieruntime=${item.show.averageRuntime}`} className="btn btn-primary" >More Details</a>
              </div>
            </div> 
          )}


        

      </div>
    </div>
    
  );
}

export default App;

