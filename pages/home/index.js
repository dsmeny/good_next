import { useEffect } from "react";
import Media from "../../components/Media";
import { postData } from "../../util/fetch-utils";
import styles from "./Home.module.css";
import Notify from "../../components/Notify";

const Home = (props) => {
  useEffect(() => {
    props.inputRef.current.focus();
  }, []);

  return (
    <div className={styles.home}>
      <h1>What&apos;s good ??</h1>
      <form
        id="form2"
        onSubmit={(e) => {
          e.preventDefault();

          const inputFieldValue = props.inputRef.current.value;
          postData(inputFieldValue, props.stateHandler, "t");
        }}
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
