import {v4 as uuid} from 'uuid';
export const notesReducer=(state,{type,payload})=>{
  switch(type){
    case 'TITLE':
      return {
        ...state,
        title:payload,
      }
    case 'TEXT':
      return{
        ...state,
        text:payload,
      }
    case 'ADD_NOTES':
      return {
        ...state,
        notes:[...state.notes,{title:state.title,text:state.text,
          id:uuid(),isPinned:false,isArchived:false}]
      }
    case 'CLEAR_INPUT':
      return{
        ...state,
        text:'',
        title:''
      }
    case 'PIN':
      return{
        ...state,
        notes:state.notes.map(note=>note.id===payload.id?{...note,isPinned:!note.isPinned}:note)
      }// see we can also add unpin case if we used if isPinned else isPinned
    case "ARCHIVE":
      return{
        ...state,
        archivedNotes:[...state.archivedNotes,state.notes.find(({id})=>id===payload.id)],
        notes:state.notes.filter(({id})=>id!==payload.id)
      }//same as before case for if archived else not archived..
    default:
      return state
  }
}