import React from 'react'
import Card from './Card'
import '../index.css' ;
import {netflixData} from '../data/Netflix_shows'



export default function Netflix() {

  return (
    <>
    <h1 className='heading'>Top 5 Netflix Shows</h1>
    <div className='card-container'>
    {netflixData.map( (val) => {
        return (
            <Card title={val.title} image={val.image} text={val.text} redirect_link={val.redirect_link} />
        );
    })}
    </div>
    </>
  )
}
