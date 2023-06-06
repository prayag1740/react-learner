import React, { createContext } from 'react'
import ContextChildA from './ContextChildA'

const Name = createContext() ;

export default function ContextApi() {
  return (
    <>
        <Name.Provider value={"Prayag"} >
        <ContextChildA />
        </Name.Provider>
    </>
  )
}

export {Name} ;