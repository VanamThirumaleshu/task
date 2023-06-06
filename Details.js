import React from 'react'

import './Details.css'
import { useLocation } from 'react-router';
export default function Details() {
  const search=useLocation().search;
  const moviename=new URLSearchParams(search).get('moviename');
  
  
  const movielanguage=new URLSearchParams(search).get('movielanguage');
  const movieimg=new URLSearchParams(search).get('movieimg');
  const moviesummary=new URLSearchParams(search).get('moviesummary');
  const movieruntime=new URLSearchParams(search).get('movieruntime');
  const summarylength=moviesummary.length;
  console.log(moviesummary.slice(3,summarylength-4))

  
  return (
    <div className='container'>
      <h1 className='shadow-lg p-3 mb-5 bg-white rounded'>More Details About <strong>{moviename}</strong></h1>
      <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded mt-5'>
        <div className='col-md-10 text-center'>
        <img className='img-fluid' src={movieimg}></img>
        



        <table class="table table-bordered mt-5">
            <thead>
              <tr>
                
                <th scope="col">Heading</th>
                <th scope="col">Details</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                
                <td>Movie Name</td>
                <td>{moviename}</td>
                
              </tr>
              <tr>
              <td>Movie Language</td>
                <td>{movielanguage}</td>
              </tr>
              <tr>
              <td>Movie Summary</td>
                <td>{moviesummary}</td>
              </tr>
              <tr>
              <td>Movie RunTime</td>
                <td>{movieruntime.slice(3,summarylength-4)}</td>
              </tr>
            </tbody>
          </table>
          <a href='./' className='btn btn-primary'>Go Back</a>

        </div>

      </div>
       
    </div>
  )
}

