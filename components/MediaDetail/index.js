import { useRouter } from "next/router";
import classes from "./Media.module.css";

const MediaDetail = (props) => {
  const data = JSON.parse(props.data);

  const router = useRouter();

  const Title = data.Title.toLowerCase();

  const styles = {
    color: "#cac4ce",
    marginRight: "0.5rem",
  };

  return (
    <div>
      <section>
        <img
          src={data.Poster}
          alt={data.Title}
          className={classes.poster}
          onClick={() => router.back()}
        />
        <div className={classes.details}>
          <div className={classes.title}>
            <strong style={styles}>Title: </strong>
            <h2 onClick={() => router.back()}>{data.Title}</h2>
          </div>
          <p>
            <strong style={styles}>Release Date: </strong> {data.Released}
          </p>
          <p style={{ lineHeight: "1.5rem" }}>
            <strong style={styles}>Actors: </strong> {data.Actors}
          </p>
          <p style={{ lineHeight: "1.5rem" }}>
            <strong style={styles}>Plot: </strong> {data.Plot}
          </p>
          <p>
            <strong style={styles}>Runtime: </strong>
            {data.Runtime}
          </p>
        </div>
      </section>
    </div>
  );
};

export default MediaDetail;
