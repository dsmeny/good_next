import { useEffect, useState, useContext } from "react";
import MediaContext from "../../util/state/mediaContext";
import useFetchApi from "../../util/hooks/useFetchApi";
import Media from "../../components/Media";
import classes from "./Good.module.css";

const Good = () => {
  const { mediaType, handler, activeState } = useContext(MediaContext);
  const media = useFetchApi(mediaType);

  return (
    <div>
      <nav className={classes.good_nav}>
        <p
          id="movies"
          className={activeState === true ? classes.active : ""}
          onClick={() => {
            handler("movies");
          }}
        >
          Movies
        </p>
        <p
          id="shows"
          className={activeState === false ? classes.active : ""}
          onClick={() => {
            handler("shows");
          }}
        >
          Shows
        </p>
      </nav>
      <section>
        {media !== undefined &&
          media.map((item, index) => (
            <Media data={JSON.stringify(item)} key={index} type={"i"} />
          ))}
      </section>
    </div>
  );
};

export default Good;
