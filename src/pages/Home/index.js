import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { UseNotes } from "../../context/notes-context";

export const Home = () => {
  const { title, text, notes, notesDispatch } = UseNotes();

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
    if (!title.trim() && !text.trim()) return;
    notesDispatch({
      type: "ADD_NOTES",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };

  const pinnedNotes =
    notes?.length > 0 ? notes.filter(({ isPinned }) => isPinned) : [];
  const unPinnedNotes =
    notes?.length > 0 ? notes.filter(({ isPinned }) => !isPinned) : [];

  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <div className="p-4 w-full flex flex-col items-center">
          {/* Note Input Box */}
          <div className="flex flex-col w-[400px] border-2 border-orange-300 rounded-md relative text-orange-600 bg-white shadow-sm mb-6">
            <input
              value={title}
              onChange={onTitleChange}
              className="border-b p-2 focus:outline-none border-orange-100 font-medium placeholder-orange-300"
              placeholder="Title"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              className="p-2 focus:outline-none h-[90px] resize-none text-neutral-800 placeholder-neutral-400 text-sm"
              placeholder="Take a note..."
            />
            <button
              disabled={title.trim().length === 0 && text.trim().length === 0}
              onClick={onAddClick}
              className="absolute bottom-2 right-2 p-1 bg-orange-600 text-white rounded-full hover:bg-orange-700 disabled:opacity-40 transition-opacity"
              title="Add Note"
            >
              <span className="material-symbols-outlined text-[20px] block">add</span>
            </button>
          </div>

          {/* Notes display */}
          <div className="w-full max-w-5xl px-4">
            {pinnedNotes.length > 0 && (
              <div className="mb-8">
                <h2 className="text-orange-600 font-bold text-lg mb-3">Pinned Notes</h2>
                <div className="flex flex-wrap gap-4">
                  {pinnedNotes.map((note) => (
                    <NotesCard
                      key={note.id}
                      id={note.id}
                      title={note.title}
                      text={note.text}
                      isPinned={note.isPinned}
                      isImportant={note.isImportant}
                      isArchived={note.isArchived}
                    />
                  ))}
                </div>
              </div>
            )}

            {unPinnedNotes.length > 0 && (
              <div className="mb-8">
                {pinnedNotes.length > 0 && (
                  <h2 className="text-orange-600 font-bold text-lg mb-3">Other Notes</h2>
                )}
                <div className="flex flex-wrap gap-4">
                  {unPinnedNotes.map((note) => (
                    <NotesCard
                      key={note.id}
                      id={note.id}
                      title={note.title}
                      text={note.text}
                      isPinned={note.isPinned}
                      isImportant={note.isImportant}
                      isArchived={note.isArchived}
                    />
                  ))}
                </div>
              </div>
            )}

            {notes?.length === 0 && (
              <div className="flex flex-col items-center justify-center mt-16 text-orange-400">
                <span className="material-symbols-outlined text-6xl mb-2">lightbulb</span>
                <p className="text-lg font-medium text-orange-600">Notes you add appear here</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
