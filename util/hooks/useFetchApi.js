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
    "tt11337908",
  ],
};

function useFetchApi(mediaType) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    setMedia([]);

    (() => {
      query[mediaType.name].forEach((item) => {
        fetch("/api/api_routes", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: item,
            type: "i",
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            setMedia((prev) => {
              return [...prev, data.data];
            });
          });
      });
    })();
  }, [mediaType.name]);

  if (media.length === query[mediaType.name].length) {
    return media;
  }
}

export default useFetchApi;
