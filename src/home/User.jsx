import React, { useEffect } from "react";
import styles from "./user.module.css";
import { useSelector } from "react-redux";
import { Chip } from "../styled";
import { selectTrue } from "../helper";
import { useNavigate } from "react-router-dom";
import pfp from '../assets/pfp.png'

const User = () => {
  const store = useSelector((store) => store.app);
  const navigate = useNavigate();

  const chips = selectTrue(store.genre);

  if( !store.user ){
    return null
  }

  return (
    <div className={styles.box}>
      <div className={styles.pfp}>
        <img
          src={pfp}
          alt=""
        />
      </div>
      <div>
        <div>
          <p>{store.user.name}</p>
          <p>{store.user.email}</p>
          <h2>{store.user.username}</h2>
        </div>
        <div className={styles.chips}>
          {chips.map((m) => (
            <Chip key={m.id} $bgColor="#9F94FF">
              <p>{m.name}</p>
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
