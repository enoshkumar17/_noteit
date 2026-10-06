import { UseNotes } from "../../context/notes-context";

export const NotesCard = ({
  id,
  title,
  text,
  isPinned,
  isArchived,
  isImportant,
  inBin,
}) => {
  const { notesDispatch } = UseNotes();

  const onPinClick = () => {
    notesDispatch({
      type: "PIN",
      payload: { id },
    });
  };

  const onImportantClick = () => {
    notesDispatch({
      type: "IMPORTANT",
      payload: { id },
    });
  };

  const onArchiveClick = () => {
    notesDispatch({
      type: "ARCHIVE",
      payload: { id },
    });
  };

  const onUnarchiveClick = () => {
    notesDispatch({
      type: "UNARCHIVE",
      payload: { id },
    });
  };

  const onDeleteClick = () => {
    notesDispatch({
      type: "DELETE_NOTE",
      payload: { id },
    });
  };

  const onRestoreClick = () => {
    notesDispatch({
      type: "RESTORE_FROM_BIN",
      payload: { id },
    });
  };

  const onPermanentDeleteClick = () => {
    notesDispatch({
      type: "PERMANENT_DELETE",
      payload: { id },
    });
  };

  return (
    <div className="w-[260px] border-2 border-orange-200 rounded-lg mb-2 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      {/* Card Header */}
      <div className="border-b-2 p-2 border-orange-100 relative text-orange-600 font-semibold flex items-center justify-between">
        <p className="truncate pr-7">{title || "Untitled"}</p>
        {!inBin && !isArchived && (
          <button
            onClick={onPinClick}
            title={isPinned ? "Unpin Note" : "Pin Note"}
            className="absolute right-2 top-2 hover:text-orange-800"
          >
            <span
              className={`material-symbols-outlined text-[20px] ${
                isPinned ? "filled" : "outlined"
              }`}
            >
              keep
            </span>
          </button>
        )}
      </div>

      {/* Card Body */}
      <div className="p-2 text-neutral-800 text-sm whitespace-pre-wrap break-words min-h-[60px] max-h-[140px] overflow-y-auto">
        <p>{text}</p>
      </div>

      {/* Card Actions Footer */}
      <div className="flex items-center justify-end gap-1 px-2 py-1.5 border-t border-orange-100 bg-orange-50/50 rounded-b-lg text-orange-600">
        {inBin ? (
          <>
            <button
              onClick={onRestoreClick}
              title="Restore Note"
              className="p-1 hover:bg-orange-100 rounded"
            >
              <span className="material-symbols-outlined text-[20px]">
                restore_from_trash
              </span>
            </button>
            <button
              onClick={onPermanentDeleteClick}
              title="Delete Permanently"
              className="p-1 hover:bg-orange-100 rounded text-red-600"
            >
              <span className="material-symbols-outlined text-[20px]">
                delete_forever
              </span>
            </button>
          </>
        ) : isArchived ? (
          <>
            <button
              onClick={onUnarchiveClick}
              title="Unarchive Note"
              className="p-1 hover:bg-orange-100 rounded"
            >
              <span className="material-symbols-outlined text-[20px]">
                unarchive
              </span>
            </button>
            <button
              onClick={onDeleteClick}
              title="Move to Bin"
              className="p-1 hover:bg-orange-100 rounded"
            >
              <span className="material-symbols-outlined text-[20px]">
                delete
              </span>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onImportantClick}
              title={isImportant ? "Mark as Not Important" : "Mark as Important"}
              className="p-1 hover:bg-orange-100 rounded"
            >
              <span
                className={`material-symbols-outlined text-[20px] text-orange-600 ${
                  isImportant ? "filled" : "outlined"
                }`}
              >
                label_important
              </span>
            </button>
            <button
              onClick={onArchiveClick}
              title="Archive Note"
              className="p-1 hover:bg-orange-100 rounded"
            >
              <span className="material-symbols-outlined text-[20px]">
                archive
              </span>
            </button>
            <button
              onClick={onDeleteClick}
              title="Move to Bin"
              className="p-1 hover:bg-orange-100 rounded"
            >
              <span className="material-symbols-outlined text-[20px]">
                delete
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
