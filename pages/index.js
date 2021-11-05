import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Home from "./home";

export default function Index() {
  const [state, setState] = useState("");

  const inputRef = useRef();

  function stateHandler(e) {
    setState(e);
  }

  useEffect(() => {
    if (state === null) {
      setTimeout(() => {
        setState("");
        inputRef.current.value = "";
        inputRef.current.focus();
      }, 1000);
    }
  }, [state]);

  return <Home state={state} inputRef={inputRef} stateHandler={stateHandler} />;
}
