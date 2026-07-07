import { useReducer,useContext,createContext, Children } from "react";
import { notesReducer } from "../reducers/notesReducers";

const NotesContext=createContext();

const NotesProvider=({children})=>{
  const initialState={
    text:"",
    title:"",
    notes:[],
    archivedNotes:[],
  }
  const [{text,title,notes,archivedNotes},notesDispatch]=useReducer(notesReducer,initialState);
  return (
    <NotesContext.Provider value={{text,title,notes,archivedNotes,notesDispatch}}>
      {children}
    </NotesContext.Provider>
  )
}

const UseNotes=()=>useContext(NotesContext)
export {NotesProvider,UseNotes}