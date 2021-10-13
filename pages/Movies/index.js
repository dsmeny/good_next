import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useFetchApi from "../../hooks/useFetchApi";
import Media from "../../components/Media";
import classes from "../../styles/MediaItems.module.css";

const Movies = () => {
  const router = useRouter();
  const [media] = useFetchApi(router.pathname);

  function postMediaData() {
    fetch("/media/setMovieData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: media,
    });
  }

  useEffect(() => {
    postMediaData();
  }, [media]);

  return (
    <div>
      <div className={classes.media}>
        {media &&
          media.map((item, index) => (
            <Link href={`/Movies/${item.Title}`} key={index} passHref>
              <a>
                <Media
                  title={item.Title}
                  poster={item.Poster}
                  released={item.Released}
                  actors={item.Actors}
                  runtime={item.Runtime}
                  key={item.imdbID}
                />
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Movies;
