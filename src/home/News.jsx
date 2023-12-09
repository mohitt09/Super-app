import React, { useEffect, useMemo, useState } from "react";
import styles from "./news.module.css";
import useGetNews from "../hooks/useGetNews";

const News = () => {
  const data = useGetNews(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=ffd1b1a6599e42fdb4b6d6617d83b5a8"
  );

  const news = data.data;

  if (!news) {
    return null;
  }

  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <img src={news.urlToImage} alt="" />
        <div className={styles.title}>
          <p>{news.title}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        {news.content}
        <br />
        {news.description}
      </div>
    </div>
  );
};

export default News;
