import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Home() {

    const navigate = useNavigate() ;

    const NetflixRedirect = () => {
      navigate('/netflix')   ;
    } ;

    const AmazonPrimeRedirect = () => {
        navigate('/amazonprime')   ;
    } ;

    const TodoAppRedirect = () => {
        navigate('/todoapp')   ;
    } ;

      const ReactChallenge8Redirect = () => {
        navigate('/changevariable')   ;
      } ;

      const TodoAppRedirect2 = () => {
        navigate('/todoapp2')   ;
    } ;

    const GoogleKeep = () => {
      navigate('/googlekeep')   ;
  } ;

    const ContextAPIRedirect = () => {
      navigate('/contextapi') ;
    }

    const UseEffectChallengeRedirect = () => {
      navigate('/useeffect');
    }
    const PokemonRedirect = () => {
      navigate('/pokemon');
    }

    

  return (
    <>
    <h1 className='heading'> Choose your favourite streaming App</h1>
      <div className='button-container'>
      <button onClick={NetflixRedirect}>Netflix</button>
      <button onClick={AmazonPrimeRedirect} style={{marginLeft: '300px'}}>Amazon Prime</button>
      </div>
      <div className='button-container'>
        <button onClick={TodoAppRedirect}>Todo App</button>
        <button onClick={ReactChallenge8Redirect} style={{marginLeft: '300px'}}>React Challenge 8</button>
      </div>
      <div className='button-container'>
        <button onClick={TodoAppRedirect2}>Todo App 2</button>
        <button onClick={GoogleKeep} style={{marginLeft: '300px'}}>Google Keep App</button>
      </div>
      <div className='button-container'>
        <button onClick={ContextAPIRedirect}>ContextAPI</button>
        <button onClick={UseEffectChallengeRedirect} style={{marginLeft: '300px'}}>Use Effect Challenge</button>
      </div>
      <div className='button-container'>
        <button onClick={PokemonRedirect}>Pokemon</button>
      </div>
    </>
  )
}
