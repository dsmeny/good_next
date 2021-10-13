import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useFetchApi from "../../hooks/useFetchApi";
import Media from "../../components/Media";
import classes from "../../styles/MediaItems.module.css";

const Shows = () => {
  const router = useRouter();
  const [media] = useFetchApi(router.pathname);

  // console.log("media: ", media);

  return (
    <div>
      <div className={classes.media}>
        {media &&
          media.map((item, index) => (
            <Link href={`/Shows/${item.Title}`} key={index} passHref>
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

export default Shows;
