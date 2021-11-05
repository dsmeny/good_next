import { useState, useEffect, useRef } from "react";
import { postData } from "../util/fetch-utils";
import Head from "next/head";
import Home from "./home";

export default function Index() {
  const [state, setState] = useState("");

  const inputRef = useRef();

  function stateHandler(inputFieldValue) {
    postData(inputFieldValue, setState, "t");
  }

  useEffect(() => {
    if (state === null) {
      setTimeout(() => {
        setState("");
        inputRef.current.value = "";
        inputRef.current.focus();
      }, 1500);
    }
  }, [state]);

  return <Home state={state} inputRef={inputRef} postApi={stateHandler} />;
}
