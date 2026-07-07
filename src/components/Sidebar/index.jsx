import { NavLink } from "react-router-dom";
export const Sidebar = () => {
  const getStyles=({isActive})=>{
    const styles=' px-2 py-1.5 flex items-center gap-1 rounded-br-full rounded-tr-full'
    return isActive?`bg-orange-600 text-orange-50${styles}`:`hover:bg-orange-600 hover:text-orange-50 ${styles}` 
  }
  return (
    <aside className="flex flex-col text-orange-600 font-semibold gap-3 border-r-2 border-orange-400 w-[180px] h-screen px-2 py-3 text-lg">
      <NavLink to="/" className={getStyles}>
        <span className="material-symbols-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink to="/archive" className={getStyles}>
        <span className="material-symbols-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink to="/importnat" className={getStyles}>
        <span className="material-symbols-outlined">label_important</span>
        <span>Important</span>
      </NavLink>
      <NavLink to="/bin" className={getStyles}>
        <span className="material-symbols-outlined">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
