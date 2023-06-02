import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TodoItemMaterial from './TodoItemMaterial';



export default function TodoListMaterial() {

  const [currInput, setInput] = useState('') ;
  const [Items, setItems] = useState([]) ;

  const ChangeItem = (event) => {
    setInput(event.target.value) ;
  }

  const AddItem = () => {
    if (currInput === '') {
        alert('Cannot add empty item');
        return;
    }
    const newItems = [...Items, currInput] ;
    setItems(newItems) ;
    setInput('') ;
  }




  return (
    <>
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1>TODO LIST</h1>
                <br />
                <input type='text' placeholder='Add Item' onChange={ChangeItem} value={currInput}></input>
                <Button variant="contained" className='newBtn' onClick={AddItem}> <AddIcon /> </Button>
                <ol>
                    {Items.map((itemval, idx) => {
                        return <TodoItemMaterial text={itemval} key={idx}/>
                    } )}
                </ol>
            </div>
        </div>
    </>
  )
}
