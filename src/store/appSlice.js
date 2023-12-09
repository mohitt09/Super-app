import { createSlice } from "@reduxjs/toolkit";
import { genreData } from "../genre/genreData";

const appSlice = createSlice({
  name: "app",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")),
    genre: JSON.parse(localStorage.getItem("genre")) || genreData,
    notes: JSON.parse(localStorage.getItem("notes")),
  },
  reducers: {
    setUserRedux: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
      localStorage.setItem("genre", JSON.stringify(state.genre));
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
  },
});

export const { setUserRedux, setGenre, setNotes } = appSlice.actions;

export default appSlice.reducer;
