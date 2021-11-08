import { useEffect, useState } from "react";
import Media from "../../components/Media";
import styles from "./Home.module.css";
import Notify from "../../components/Notify";
import postHandler from "../../util/fetch-utils";

const Home = (props) => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("/api/api_routes_home")
      .then((response) => response.json())
      .then((data) => {
        data.payload.forEach((member) => {
          setMembers((prev) => {
            return [...prev, member];
          });
        });
      });
  }, []);

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
      <div className={styles.prevSelection}>
        {members && (
          <div>
            <h1>Previous Selections</h1>
          </div>
        )}
        {members && (
          <section>
            {members.map((member, index) => (
              <Media data={member} type={"t"} key={index} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;
