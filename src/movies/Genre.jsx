import React from "react";
import styles from "./genre.module.css";
import useMovies from "../hooks/useMovies";

const Genre = ({ genre }) => {
  const data = useMovies(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`
  );

  const results = data.data?.results;

  if (!results) {
    return null;
  }

  console.log(results);

  return (
    <div className={styles.box}>
      <p className={styles.title}>{genre.name}</p>
      <div className={styles.posters}>
        {results.map((m) => (
          <div className={styles.poster} key={m.id}>
            {m.backdrop_path && (
              <img
                src={"https://image.tmdb.org/t/p/w500/" + m.backdrop_path}
                onClick={() => console.log("clicked")}
              />
            )}
            <div className={styles.name}>
              <p>{m.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genre;
