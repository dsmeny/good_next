import { useRef, useState, useEffect } from "react";
import Media from "../../components/Media";
import { postData, closeNotify } from "../../util/fetch-utils";

const Home = () => {
  const [state, setState] = useState("");
  const inputRef = useRef();

  const styles = {
    color: "white",
    transform: "translateY(3rem)",
    fontSize: "1rem",
  };

  return (
    <div>
      <h3 style={{ color: "white" }}>Find what&apos;s good!</h3>
      <form
        id="form2"
        method="GET"
        onSubmit={(e) => {
          postData(e, inputRef, setState, "t");
        }}
      >
        <input type="text" id="search" ref={inputRef} />
        <button>Submit</button>
      </form>
      {state === null && (
        <p
          style={styles}
          onMouseOver={() => {
            closeNotify(setState, inputRef);
          }}
          onTouchStart={() => {
            closeNotify(setState, inputRef);
          }}
        >
          Sorry we don&apos;t seem to have a match for that search.
        </p>
      )}
      <section>{state && <Media data={state} type={"t"} />}</section>
    </div>
  );
};

export default Home;
