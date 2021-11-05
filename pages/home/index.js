import { useEffect } from "react";
import Media from "../../components/Media";
import styles from "./Home.module.css";
import Notify from "../../components/Notify";
import postHandler from "../../util/fetch-utils";

const Home = (props) => {
  return (
    <div className={styles.home}>
      <h1>What&apos;s good ??</h1>
      <form
        id="form2"
        onSubmit={(e) => postHandler(e, props.inputRef, props.postApi)}
      >
        <input type="text" id="search" ref={props.inputRef} />
        <button>Submit</button>
      </form>

      {props.state === null && <Notify />}

      {props.state && props.state !== null && (
        <section>
          {props.state && <Media data={props.state} type={"t"} />}
        </section>
      )}
    </div>
  );
};

export default Home;
