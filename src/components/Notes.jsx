import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Notes(props) {

  const deleteEvent = () => {
    props.deleteNote(props.id)
  }

  return (
    <>
    <div className='note'>
        <h2 className='note_heading'>{props.title}</h2>
        <br />
        <p>{props.content}</p>
        <button className='btn'><DeleteIcon className='deleteIcon' onClick={deleteEvent} /></button>
        </div>
    </>
  )
}
