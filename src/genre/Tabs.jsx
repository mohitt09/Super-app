import React, { useState } from "react";
import styles from "./tabs.module.css";
import { Span, Tab } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../store/appSlice";

const Tabs = ({ updateGenre }) => {
  const store = useSelector((store) => store.app);

  return (
    <div className={styles.box}>
      {store.genre.map((m, i) => (
        <Tab
          $borderColor={m.select ? "#0c7700" : "transparent"}
          $bgColor={m.color}
          onClick={() => updateGenre(i)}
          key={i}
          className={styles.tab}
        >
          <h2>{m.name}</h2>
          <img src={m.image}  alt="" />
        </Tab>
      ))}
    </div>
  );
};

export default Tabs;
