import { NavLink } from "react-router-dom";
import { UseNotes } from "../../context/notes-context";

export const Sidebar = () => {
  const { notes, archivedNotes, bin } = UseNotes();

  const notesCount = notes?.length || 0;
  const archivedCount = archivedNotes?.length || 0;
  const importantCount = notes?.filter((n) => n.isImportant)?.length || 0;
  const binCount = bin?.length || 0;

  const getStyles = ({ isActive }) => {
    const base =
      "px-3 py-2 flex items-center justify-between rounded-xl text-sm transition-all";
    return isActive
      ? `bg-[#F3ECE2] text-orange-800 font-semibold shadow-xs ${base}`
      : `text-stone-600 hover:bg-[#F3ECE2]/50 hover:text-stone-900 font-medium ${base}`;
  };

  return (
    <aside className="flex flex-col gap-1 border-r border-[#EFE8DE] w-[210px] min-h-[calc(100vh-57px)] p-3 select-none">
      <NavLink to="/" className={getStyles}>
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[20px]">lightbulb</span>
          <span>Notes</span>
        </div>
        {notesCount > 0 && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#EAE2D5] text-stone-700 font-medium">
            {notesCount}
          </span>
        )}
      </NavLink>

      <NavLink to="/important" className={getStyles}>
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[20px]">label_important</span>
          <span>Important</span>
        </div>
        {importantCount > 0 && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#EAE2D5] text-stone-700 font-medium">
            {importantCount}
          </span>
        )}
      </NavLink>

      <NavLink to="/archive" className={getStyles}>
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[20px]">archive</span>
          <span>Archive</span>
        </div>
        {archivedCount > 0 && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#EAE2D5] text-stone-700 font-medium">
            {archivedCount}
          </span>
        )}
      </NavLink>

      <NavLink to="/bin" className={getStyles}>
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[20px]">delete</span>
          <span>Bin</span>
        </div>
        {binCount > 0 && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#EAE2D5] text-stone-700 font-medium">
            {binCount}
          </span>
        )}
      </NavLink>
    </aside>
  );
};
