import React from 'react'
import {Name} from './ContextApi' ;

export default function ContextChildC() {
  return (
        <Name.Consumer>
        {
          (name) => {
            return (<div>
                <h1>Hello my name is {name} </h1>
                <h4>&nbsp;&nbsp;I am studying ContextAPI in order to pass data to child components without sending to intermediate levels</h4>
                </div>
            )
          }
        }
        </Name.Consumer>
  )
}
