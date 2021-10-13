/* All rights reserved */
import MediaDetail from "../../../components/MediaDetail";

const Item = (props) => {
  console.log("props: ", props);
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
};

export default Item;
