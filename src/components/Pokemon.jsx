import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Pokemon() {

    const [num, setNum] = useState(1) ;
    const [pokeName, setPokeName] = useState('') ;
    const [moves, setMoves] = useState() ;

    useEffect (() => {
        async function getData() {
            const url = `https://pokeapi.co/api/v2/pokemon/${num}` ;
            const res = await axios.get(url) ;
            setPokeName(res.data.name) ;
            setMoves(res.data.moves.length) ;

        }
        getData() ;
    }, [num]) ;

  return (
    <>  
        <h2>You have selected <span style={{color:'red'}}> {num} value </span></h2>
        <h2>My name is <span style={{color:'red'}}> {pokeName} </span> </h2>
        <h2> I have moves <span style={{color:'red'}}> {moves} </span></h2>
        <select value={num} onChange={(event) => {setNum(event.target.value)}}>
            <option value='1'>1</option>
            <option value='25'>25</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
    </>
  )
}
