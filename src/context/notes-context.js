import { useReducer, useContext, createContext, useEffect } from "react";
import { notesReducer } from "../reducers/notesReducers";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  // Load initial notes from localStorage if available
  const savedData = (() => {
    try {
      const data = localStorage.getItem("note_it_data");
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  })();

  const initialState = {
    text: "",
    title: "",
    notes: savedData?.notes || [],
    archivedNotes: savedData?.archivedNotes || [],
    bin: savedData?.bin || [],
  };

  const [{ text, title, notes, archivedNotes, bin }, notesDispatch] =
    useReducer(notesReducer, initialState);

  // Preserve state to localStorage whenever notes, archivedNotes, or bin change
  useEffect(() => {
    try {
      localStorage.setItem(
        "note_it_data",
        JSON.stringify({ notes, archivedNotes, bin })
      );
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
  }, [notes, archivedNotes, bin]);

  return (
    <NotesContext.Provider
      value={{ text, title, notes, archivedNotes, bin, notesDispatch }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const UseNotes = () => useContext(NotesContext);
export { NotesProvider, UseNotes };