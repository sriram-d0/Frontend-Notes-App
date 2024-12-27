import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import NotesList from './components/NotesList';
import './App.css';

function App(){
  const [notes,setNotes]=useState([]);
  useEffect(()=>{
    document.title="Notes App";
  })
  const addNote=(content)=>{
    if(!content.trim()){
      alert("Note cannot be empty!");
      return;
    }
    const newNote={id:Date.now(),content,pinned:false};
    setNotes([newNote,...notes]);
  };
  const deleteNote=(id)=>{
    setNotes(notes.filter((note)=>note.id!==id));
  };
  const editNote=(id,updatedContent)=>{
    setNotes(
      notes.map((note)=>
      note.id===id?{...note,content:updatedContent}:note
      )
    );
  };
  const togglePin=(id)=>{
    setNotes(
    notes.map((note)=>
    note.id===id?{...note,pinned:!note.pinned}:note
  )
);
};
  return(
    <div className="app-container">
      <Header/>
      <Editor addNote={addNote}/>
      <NotesList 
        notes={notes}
        deleteNote={deleteNote}
        editNote={editNote}
        togglePin={togglePin}
      />
    </div>
  )
}
export default App;