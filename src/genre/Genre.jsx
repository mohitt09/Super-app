import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./genre.module.css";
import { Heading } from "../styled";
import Tabs from "./Tabs";
import { setGenre } from "../store/appSlice";
import Chips from "./Chips";

const Genre = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const store = useSelector((store) => store.app);

  const updateGenre = (index) => {
    const newGenre = [...store.genre];
    newGenre[index] = {
      id: newGenre[index].id,
      name: newGenre[index].name,
      color: newGenre[index].color,
      select: !newGenre[index].select,
      image: newGenre[index].image,
    };

    dispatch(setGenre(newGenre));
  };

  useEffect(() => {
    if (!store.user) {
      navigate("/register");
    }
  }, []);
  return (
    <div className={styles.box}>
      <div>
        <Heading $color="#72DB73" $fontSize="40px">
          Super app
        </Heading>
        <h1 className={styles.heading}>Choose your entertainment category</h1>
        <Chips updateGenre={updateGenre} />
      </div>
      <Tabs updateGenre={updateGenre} />
    </div>
  );
};

export default Genre;
