import React from 'react'
import '../keep.css' ;


export default function Footer() {

    var year = new Date().getFullYear()

  return (
    <>
        <footer>
            <p>Copyright © {year}</p>
        </footer>
    </>
  )
}
