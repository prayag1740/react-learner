import React from 'react'
import keep_logo from '../images/keep_logo.png'
import '../keep.css' ;


export default function Header() {
  return (
    <>
        <div className='header'>
            <img src={keep_logo} alt='logo' width='50px' height='50px'  />
            <h1>Google Keep</h1>
        </div>
    </>
  )
}
