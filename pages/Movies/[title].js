import { useRouter } from "next/router";
import { useEffect } from "react";
import MediaDetail from "../../components/MediaDetail";

function ItemPage() {
  const title = useRouter().query.title;

  function getMediaData() {
    fetch("/api/media/getMovieData")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  useEffect(() => {
    getMediaData();
  }, [title]);

  const classes = {
    container: {
      color: "red",
    },
  };

  return (
    <div className={classes.container}>
      <MediaDetail />
    </div>
  );
}

export default ItemPage;
