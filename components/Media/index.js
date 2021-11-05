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
        <h2>{data.Title}</h2>
        <p>{data.Released}</p>
        <p>{data.Actors}</p>
        <p>{data.Plot}</p>
        <p>{data.Runtime}</p>
      </div>
    </div>
  );
};

export default Media;
