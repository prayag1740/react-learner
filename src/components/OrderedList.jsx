import React from 'react'

const myName = 'Prayag Bhatia' ;

function OrderedList () {
    return (
        <ol>
            <li>Prayag</li>
            <li>Bhatia</li>
        </ol>
    )
}

export default OrderedList;
export {myName} ; // named exports