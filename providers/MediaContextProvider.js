/* All rights reserved */

import { createContext, useState } from "react";

const MovieContext = createContext({
  showMedia: String,
  setCategoryType: () => {},
  showMenu: Boolean,
});

export function MediaContextProvider(props) {
  const [showMedia, setMedia] = useState(null);
  const [showMenu] = useState(true);

  function setCategoryType(param) {
    setMedia(param.query);
  }

  const context = {
    showMedia,
    setCategoryType,
    showMenu,
  };

  return (
    <MovieContext.Provider value={context}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
