import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { UseNotes } from "../../context/notes-context";
export const Home = () => {
  const { title, text, notes, archivedNotes, notesDispatch } = UseNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };
  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };
  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTES",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };
  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const unPinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  console.log(archivedNotes);
  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <div className="p-3 w-screen flex flex-col">
          <div className="flex flex-col w-[400px] border-2          border-orange-200 rounded-md relative text-orange-600 self-center">
            <input
              value={title}
              onChange={onTitleChange}
              className=" border-b-2 p-1 focus:outline-none border-orange-100 overflow-hidden "
              placeholder="Enter Title"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              className="p-1 border-orange-600 focus:outline-none h-[80px] overflow-hidden"
              placeholder="Enter Text"
            />
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="absolute bottom-0 right-2"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          {pinnedNotes?.length > 0 && (
            <>
              <h2 className="text-orange-600 font-bold mt-14">Pinned Notes</h2>
              <div className="flex flex-wrap gap-4">
                {pinnedNotes.map(({ id, text, title, isPinned }) => {
                  return (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                    />
                  );
                })}
              </div>
            </>
          )}
          {unPinnedNotes?.length > 0 && (
            <>
              <h2 className="text-orange-600 font-bold mt-14">Other Notes</h2>
              <div className="flex flex-wrap gap-4">
                {unPinnedNotes.map(({ id, text, title, isPinned }) => {
                  return (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};
