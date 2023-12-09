import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Chip, ColorButton, Span } from "../styled";
import styles from "./genre.module.css";
import { useNavigate } from "react-router-dom";
import { findIndexByProperty, selectTrue } from "../helper";

const Chips = ({ updateGenre }) => {
  const navigate = useNavigate();
  const store = useSelector((store) => store.app);
  const [error, setError] = useState(false);

  const chips = selectTrue(store.genre);

  return (
    <>
      <div className={styles.chips}>
        {chips.map((m) => (
          <Chip $bgColor="#148a08" key={m.id}>
            <p>{m.name}</p>
            <p
              className={styles.cross}
              onClick={() => {
                const index = findIndexByProperty(store.genre, "id", m.id);
                updateGenre(index);
              }}
            >
              ✖
            </p>
          </Chip>
        ))}
      </div>
      {error && <Span $color="red">⚠️ Minimum 3 category required </Span>}
      <ColorButton
        $bgColor="#148A08"
        className={styles.next}
        onClick={() => {
          if (selectTrue(store.genre).length < 3) {
            setError(true);
          } else if (selectTrue(store.genre).length >= 3) {
            setError(false);
            navigate("/");
          }
        }}
      >
        Next page
      </ColorButton>
    </>
  );
};

export default Chips;
