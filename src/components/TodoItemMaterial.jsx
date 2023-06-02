import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItemMaterial(props) {

    const [line, setLine] = useState(false) ;

    const tempDelete = () => {
        setLine(true);
    }

  return (
    <>
        <div className='todo_style'>
        <span onClick={tempDelete}><DeleteIcon style={{marginRight: '20px'}}/></span>
        <li style={{textDecoration : line ? 'line-through' : 'none'}}>{props.text}</li>
        </div>
    </>
  )
}
