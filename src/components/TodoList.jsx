import React, { useState } from 'react' ;
import TodoItem from '../components/TodoItem'

export default function TodoList () {

const [currInput, setInput] = useState('') ; //for updating the state of the input field
const [Items, setItems] = useState([]) ; // for settings items list on button click

const itemEvent = (event) => {
    setInput(event.target.value) ;
}

const listItems = () => {
    const newItems = [...Items, currInput] ;
    setItems(newItems) ;
    setInput('') ;
}

const deleteItem = (id) => {
    const newItems = Items.filter((_, index) => {return index !== id} )
    setItems(newItems);
}



  return (
    <div className='main_div'>
        <div className='center_div'>
            <br />
            <h1>Todo List</h1>
            <br />
            <input type='text' placeholder='Add item' onChange={itemEvent} value={currInput} />
            <button className='button-todo' onClick={listItems}> + </button>
            <ol>
                {Items.map( (itemval, index) => {
                    return <TodoItem text={itemval} key={index} id={index} onSelect={deleteItem} />
                })}
            </ol>
        </div>
    </div>
  )
}
