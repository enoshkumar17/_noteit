import logo from "../../assets/notes_logo_1.webp";
import { UseNotes } from "../../context/notes-context";

export const Navbar = () => {
  const { searchQuery, setSearchQuery } = UseNotes();

  return (
    <header className="sticky top-0 z-20 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EFE8DE] px-6 py-2.5 flex items-center justify-between">
      {/* Brand logo & title */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl overflow-hidden shadow-sm border border-[#EFE8DE] bg-white flex items-center justify-center p-1">
          <img className="w-full h-full object-contain" src={logo} alt="NoteIt logo" />
        </div>
        <div className="flex items-baseline gap-2">
          <h1 className="text-stone-800 text-xl font-bold tracking-tight">
            Note<span className="text-orange-600">It</span>
          </h1>
        </div>
      </div>

      {/* Warm search bar */}
      <div className="relative w-full max-w-md mx-6">
        <span className="material-symbols-outlined text-[20px] text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          search
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search your notes..."
          className="w-full pl-10 pr-9 py-1.5 bg-white border border-[#EFE8DE] rounded-xl text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all shadow-sm"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        )}
      </div>

      {/* Subtle indicator / count */}
      <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-stone-500 bg-[#F3ECE2] px-3 py-1.5 rounded-full">
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        <span>Saved Locally</span>
      </div>
    </header>
  );
};