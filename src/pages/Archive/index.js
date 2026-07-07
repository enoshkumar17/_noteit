import { Fragment } from "react/jsx-runtime";
import { Navbar } from "../../components/Navbar"
import { NotesCard } from "../../components/NotesCard";
import { Sidebar } from "../../components/Sidebar"
import { UseNotes } from "../../context/notes-context"
export const Archive=()=>{
  const {archivedNotes}=UseNotes();
  return(
    <>
      <Navbar/>
      <main className="flex">
        <Sidebar/>
        <div className="p-3 w-screen flex flex-col">
          <h2 className="text-orange-600 font-bold text-xl self-center ">Oops Nothing Archived!...</h2>
          {archivedNotes?(archivedNotes.length > 0 && (
                      <Fragment className='flex flex-col w-screen'>
                        
                        <div className="flex flex-wrap gap-4 mt-8">
                          {archivedNotes.map(({ id, text, title, isPinned,isArchived }) => {
                            return (
                              <NotesCard
                                key={id}
                                id={id}
                                title={title}
                                text={text}
                                isPinned={isPinned}
                                isArchived={isArchived}
                              />
                            );
                          })}
                        </div>
                      </Fragment>
                    )):(
                      <h2 className="text-orange-600 font-bold mt-14">Oops Nothing Archived!...</h2>)
            }
        </div>
      </main>
    </>
  )
}