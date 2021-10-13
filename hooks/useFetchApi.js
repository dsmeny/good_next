import { useState, useEffect } from "react";

const query = {
  movies: [
    "tt0113161",
    "tt0407887",
    "tt0119822",
    "tt0195685",
    "tt1596363",
    "tt0375063",
    "tt1389137",
    "tt0068646",
    "tt2446980",
    "tt0073195",
  ],
  shows: [
    "tt0944947",
    "tt0773262",
    "tt0903747",
    "tt3032476",
    "tt1094229",
    "tt8962124",
    "tt0439100",
    "tt0386676",
    "tt5071412",
    "tt0387199",
  ],
};

function useFetchApi(mediaType) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    (function requestMovies() {
      setMedia([]);

      query[mediaType.slice(1).toLowerCase()].forEach(async (media) => {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${media}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setMedia((prev) => {
          return [...prev, data];
        });
      });
    })();
  }, [mediaType]);

  return [media, setMedia];
}

export default useFetchApi;
