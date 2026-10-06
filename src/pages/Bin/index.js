import { Navbar } from "../../components/Navbar";
import { NotesCard } from "../../components/NotesCard";
import { Sidebar } from "../../components/Sidebar";
import { UseNotes } from "../../context/notes-context";

export const Bin = () => {
  const { bin, notesDispatch } = UseNotes();

  const onEmptyBinClick = () => {
    if (window.confirm("Are you sure you want to permanently delete all notes in the bin?")) {
      notesDispatch({
        type: "CLEAR_BIN",
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <div className="p-6 w-full flex flex-col items-center">
          {bin && bin.length > 0 ? (
            <div className="w-full max-w-5xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-orange-600 font-bold text-xl">
                  Bin ({bin.length})
                </h2>
                <button
                  onClick={onEmptyBinClick}
                  className="px-3 py-1.5 bg-orange-600 text-white rounded hover:bg-orange-700 text-sm font-medium transition-colors"
                >
                  Empty Bin
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                {bin.map((note) => (
                  <NotesCard
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    inBin={true}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mt-20 text-orange-400">
              <span className="material-symbols-outlined text-6xl mb-2">delete</span>
              <h2 className="text-orange-600 font-semibold text-lg">
                Bin is empty
              </h2>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
