import { useRouter } from "next/router";
import classes from "./MediaDetail.module.css";

const MediaDetail = (props) => {
  const data = JSON.parse(props.data);

  const router = useRouter();

  const Title = data.Title.toLowerCase();

  const styles = {
    color: "#cac4ce",
    marginRight: "0.5rem",
  };

  return (
    <div className={classes.container}>
      <div>
        <img src={data.Poster} alt={data.Title} onClick={() => router.back()} />
      </div>
      <div>
        <p className={classes.title} onClick={() => router.back()}>
          <strong style={styles}>Title: </strong>
          <span>{data.Title}</span>
        </p>
        <p>
          <strong style={styles}>Release Date: </strong> {data.Released}
        </p>
        <p style={{ lineHeight: "1.5rem" }}>
          <strong style={styles}>Director: </strong> {data.Director}
        </p>
        <p style={{ lineHeight: "1.5rem" }}>
          <strong style={styles}>Actors: </strong> {data.Actors}
        </p>
        <p style={{ lineHeight: "1.5rem" }}>
          <strong style={styles}>Writer: </strong> {data.Writer}
        </p>
        <p style={{ lineHeight: "1.5rem" }}>
          <strong style={styles}>Plot: </strong> {data.Plot}
        </p>
        <p>
          <strong style={styles}>Runtime: </strong>
          {data.Runtime}
        </p>
      </div>
      <div>
        <h1>Ratings</h1>
        {data.Ratings.map((Rating, index) => (
          <p key={index}>
            <strong style={styles}>{Rating.Source}</strong>: {Rating.Value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MediaDetail;
