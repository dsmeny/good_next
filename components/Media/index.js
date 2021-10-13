import classes from "../../styles/MediaItem.module.css";

const Media = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.poster} alt={props.title} />
      <div className={classes.details}>
        <h2>{props.title}</h2>
        <p>{props.released}</p>
        <p>{props.actors}</p>
        <p>{props.plot}</p>
        <p>{props.runtime}</p>
      </div>
    </div>
  );
};

export default Media;
