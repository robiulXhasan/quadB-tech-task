import { useEffect, useState } from "react";

const useShows = () => {
  const [shows, setShow] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, []);
  return shows;
};
export default useShows;
