// for components we always keep index.jsx instead of .js but in general both are same no differnece but to get proper understanding for people we use like that
import logo from "../../assets/notes_logo_1.webp";

export const Navbar=()=>{
  return (
    <header className="flex px-4 py-2 gap-3 border-b-2 border-orange-400">
      <div className='w-12 h-12'>
        <img className="w-full h-full" src={logo} alt='logo'/>
      </div>
      <h1 className="text-orange-600 text-4xl font-semibold">NoteIt</h1>
    </header>
  )
}