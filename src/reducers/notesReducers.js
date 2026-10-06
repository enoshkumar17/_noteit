import { v4 as uuid } from 'uuid';

export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case 'TITLE':
      return {
        ...state,
        title: payload,
      };

    case 'TEXT':
      return {
        ...state,
        text: payload,
      };

    case 'ADD_NOTES':
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: state.title,
            text: state.text,
            id: uuid(),
            isPinned: false,
            isArchived: false,
            isImportant: false,
          },
        ],
      };

    case 'CLEAR_INPUT':
      return {
        ...state,
        text: '',
        title: '',
      };

    case 'PIN':
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };

    case 'IMPORTANT':
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id
            ? { ...note, isImportant: !note.isImportant }
            : note
        ),
      };

    case 'ARCHIVE': {
      const noteToArchive = state.notes.find(({ id }) => id === payload.id);
      if (!noteToArchive) return state;
      return {
        ...state,
        notes: state.notes.filter(({ id }) => id !== payload.id),
        archivedNotes: [
          ...state.archivedNotes,
          { ...noteToArchive, isArchived: true, isPinned: false },
        ],
      };
    }

    case 'UNARCHIVE': {
      const noteToRestore = state.archivedNotes.find(
        ({ id }) => id === payload.id
      );
      if (!noteToRestore) return state;
      return {
        ...state,
        archivedNotes: state.archivedNotes.filter(
          ({ id }) => id !== payload.id
        ),
        notes: [
          ...state.notes,
          { ...noteToRestore, isArchived: false },
        ],
      };
    }

    case 'DELETE_NOTE': {
      const activeNote = state.notes.find(({ id }) => id === payload.id);
      const archivedNote = state.archivedNotes.find(
        ({ id }) => id === payload.id
      );
      const noteToDelete = activeNote || archivedNote;
      if (!noteToDelete) return state;

      return {
        ...state,
        notes: state.notes.filter(({ id }) => id !== payload.id),
        archivedNotes: state.archivedNotes.filter(
          ({ id }) => id !== payload.id
        ),
        bin: [...(state.bin || []), noteToDelete],
      };
    }

    case 'RESTORE_FROM_BIN': {
      const noteToRestore = state.bin.find(({ id }) => id === payload.id);
      if (!noteToRestore) return state;

      return {
        ...state,
        bin: state.bin.filter(({ id }) => id !== payload.id),
        notes: [
          ...state.notes,
          { ...noteToRestore, isArchived: false },
        ],
      };
    }

    case 'PERMANENT_DELETE':
      return {
        ...state,
        bin: state.bin.filter(({ id }) => id !== payload.id),
      };

    case 'CLEAR_BIN':
      return {
        ...state,
        bin: [],
      };

    default:
      return state;
  }
};