import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectTrue } from "../helper";
import styles from "./home.module.css";
import User from "./User";
import Weather from "./Weather";
import News from "./News";
import Notes from "./Notes";
import Watch from "./Watch";
import { ColorButton } from "../styled";

const Home = () => {
  const store = useSelector((store) => store.app);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectTrue(store.genre).length < 3) {
      navigate("/genre");
    } else if (!store.user) {
      navigate("/register");
    }
  }, []);

  return (
    <>
      <div className={styles.screen}>
        <div className={styles.box4}>
          <div className={styles.box3}>
            <div className={styles.box2}>
              <div className={styles.box1}>
                <User />
                <Weather />
              </div>
              <Notes />
            </div>
            <Watch />
          </div>
          <News />
        </div>
      </div>
      <div className={styles.browse}>
        <Link to={"/movies"}>
          <ColorButton $bgColor="#148A08">Browse</ColorButton>
        </Link>
      </div>
    </>
  );
};

export default Home;
