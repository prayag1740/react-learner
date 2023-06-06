import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';



export default function CreateNote(props) {

  const [note, setNote] = useState({
    'title' : "",
    "content" : ""
  })

  const [expand, setExpand] = useState(false) ;

  const expandNote = () => {
    setExpand(!expand) ;
  }

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
           {expand ? 
            <input type="text" placeholder='title' name="title" value={note.title} onChange={InputEvent} autoComplete='off' /> : null }
            <br />
            <textarea rows='' column='' name="content" value={note.content} onChange={InputEvent}  placeholder='Write a note ...' onClick={expandNote} />
            {expand ? <Button variant='contained' onClick={addEvent} >
             <AddIcon className='plus_sign' />
            </Button> : null }
        </form>
    </div>
    </>
  )
}
