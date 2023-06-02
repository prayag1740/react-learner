import React from 'react'

export default function Card(props) {
  return (
    <>
    <div className='my-3'>
    <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={props.image} alt="Card cap" />
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href={props.redirect_link} className="btn btn-primary">Watch show</a>
    </div>
    </div>
    </div>
    </>
  )
}
