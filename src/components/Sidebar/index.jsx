import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    const styles =
      " px-3 py-2 flex items-center gap-2 rounded-r-full transition-colors";
    return isActive
      ? `bg-orange-600 text-orange-50 font-semibold ${styles}`
      : `text-orange-700 hover:bg-orange-200 hover:text-orange-900 ${styles}`;
  };

  return (
    <aside className="flex flex-col text-orange-600 font-semibold gap-2 border-r-2 border-orange-300 w-[190px] min-h-[calc(100vh-65px)] px-2 py-4 text-base">
      <NavLink to="/" className={getStyles}>
        <span className="material-symbols-outlined text-[22px]">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink to="/archive" className={getStyles}>
        <span className="material-symbols-outlined text-[22px]">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink to="/important" className={getStyles}>
        <span className="material-symbols-outlined text-[22px]">label_important</span>
        <span>Important</span>
      </NavLink>
      <NavLink to="/bin" className={getStyles}>
        <span className="material-symbols-outlined text-[22px]">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
