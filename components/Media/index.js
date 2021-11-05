import { useRouter } from "next/router";
import classes from "./Media.module.css";

const Media = (props) => {
  let data = JSON.parse(props.data);

  if (typeof data === "string") {
    data = JSON.parse(data);
  }
  const router = useRouter();
  const Title = props.type === "i" ? data.imdbID : data.Title.toLowerCase();

  return (
    <div className={classes.container}>
      <img
        src={data.Poster}
        alt={data.Title}
        onClick={() => router.push(`/${Title}?type=${props.type}`)}
      />
      <div className={classes.details}>
        <h2
          className={classes.marginBtm}
          onClick={() => router.push(`/${Title}?type=${props.type}`)}
        >
          {data.Title}
        </h2>
        <div className={classes.marginBtm}>
          <p className={classes.label}>Starring</p>
          <p>{data.Actors}</p>
        </div>
        <div>
          <p className={classes.label}>Plot</p>
          <p className={classes.plot}>{data.Plot}</p>
        </div>
        <div className={classes.meta}>
          <div>
            <p className={classes.label}>Date</p>
            <p>{data.Released}</p>
          </div>
          <div>
            <p className={classes.label}>Duration</p>
            <p>{data.Runtime}</p>
          </div>
          <div>
            <p className={classes.label}>ImdbRating</p>
            <p>{data.imdbRating}</p>
          </div>
        </div>
        <p onClick={() => router.push(`/${Title}?type=${props.type}`)}>
          Full description &gt; &gt;
        </p>
      </div>
    </div>
  );
};

export default Media;
