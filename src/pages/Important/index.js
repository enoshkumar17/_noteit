import { Navbar } from "../../components/Navbar";
import { NotesCard } from "../../components/NotesCard";
import { Sidebar } from "../../components/Sidebar";
import { UseNotes } from "../../context/notes-context";

export const Important = () => {
  const { notes } = UseNotes();

  const importantNotes = notes?.filter(({ isImportant }) => isImportant) || [];

  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <div className="p-6 w-full flex flex-col items-center">
          {importantNotes.length > 0 ? (
            <div className="w-full max-w-5xl">
              <h2 className="text-orange-600 font-bold text-xl mb-4">
                Important Notes ({importantNotes.length})
              </h2>
              <div className="flex flex-wrap gap-4">
                {importantNotes.map((note) => (
                  <NotesCard
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    isPinned={note.isPinned}
                    isArchived={note.isArchived}
                    isImportant={note.isImportant}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mt-20 text-orange-400">
              <span className="material-symbols-outlined text-6xl mb-2">label_important</span>
              <h2 className="text-orange-600 font-semibold text-lg">
                No Important notes yet
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Mark any note as important using the label icon to view it here.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
