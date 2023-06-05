import React, {useState} from 'react'
import CreateNote from './CreateNote'
import Footer from './Footer'
import Header from './Header'
import Notes from './Notes'




export default function GoogleKeep() {

  const [currItem, setItem] = useState([]) ;

  const addNote = (note) => {
    let newData = [...currItem, note]
    setItem(newData);
  }

  const deleteNote = (id) => {
    let newData = currItem.filter((_, idx) => {return idx !== id})
    setItem(newData);
  }

  return (
    <>
        <Header />
        <CreateNote addNote={addNote} />
          {currItem.map((note, idx) => {
            return <Notes title={note.title} content={note.content} key={idx} id={idx} deleteNote={deleteNote} />
          })}
        <Footer />
    </>
  )
}
