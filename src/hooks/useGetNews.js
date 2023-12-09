import { useState, useEffect } from "react";
import { getRandomNumber } from "../helper";

function useGetNews(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const jsonData = await response.json();
        const data = jsonData.articles;
        const news = data[getRandomNumber(data.length)];
        setData(news);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useGetNews;
