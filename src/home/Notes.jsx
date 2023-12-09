import React, { useCallback, useState } from "react";
import styles from "./notes.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setNotes } from "../store/appSlice";

const Notes = () => {

  const dispatch = useDispatch();
  const store = useSelector((store) => store.app);

  const handleChange = (e) => {
    dispatch(setNotes(e.target.value));
  };

  return (
    <div className={styles.box}>
      <h2>All Notes</h2>
      <textarea value={store.notes} onChange={handleChange}></textarea>
    </div>
  );
};

export default Notes;
