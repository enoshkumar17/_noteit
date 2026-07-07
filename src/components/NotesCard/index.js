import { UseNotes } from "../../context/notes-context";
export const NotesCard = ({ id, title, text ,isPinned,isArchived }) => {
  const {notesDispatch}=UseNotes();
  const onPinClick=(id)=>{
    notesDispatch({
      type:'PIN',
      payload:{id}
    })
  }//here we may pass another one if isPinned is false then by taking unpin-type another_case
  const onArchiveClick=(id)=>{
    notesDispatch({
      type:"ARCHIVE",
      payload:{id}
    })
  }
  return (
    <div className="w-[250px] border-2 border-orange-200 rounded-lg mb-2"
      key={id}>
      <div className="border-b-2 p-1 border-orange-100 relative text-orange-600 font-semibold">
        <p>{title}</p>
        <button onClick={()=>onPinClick(id)} className="absolute right-1 top-1">
          <span className={`material-symbols-outlined ${isPinned?"filled":"outlined"}`}>
            keep
            </span>
        </button>
      </div>
      <div  className="bg-white text-orange-600 rounded-br-md
            rounded-bl-md p-1 relative h-[70px] overflow-hidden">
        <p>{text}</p>
        <div className="flex absolute bottom-0 right-1">
          <button onClick={()=>onArchiveClick(id)} className="">
            <span className={` material-symbols-outlined ${isArchived?"filled":"outlined"} `}>archive</span>
          </button>
          <button className="">
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
