import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';



export default function CreateNote(props) {

  const [note, setNote] = useState({
    'title' : "",
    "content" : ""
  })

  const InputEvent = (event) => {

    const {name, value} = event.target ;   

    let newData = {...note, [name] : value} ; 
    setNote(newData) ;
  }

  const addEvent = () => {
    props.addNote(note) ;
    setNote({'title' : "" , "content" : ""});
  }

  return (
    <>
    <div className='main_note'>
        <form>
            <input type="text" placeholder='title' name="title" value={note.title} onChange={InputEvent} autoComplete='off' />
            <br />
            <textarea rows='' column='' name="content" value={note.content} onChange={InputEvent}  placeholder='Write a note ...' />
            <Button variant='contained' onClick={addEvent} >
             <AddIcon className='plus_sign' />
            </Button>
        </form>
    </div>
    </>
  )
}
