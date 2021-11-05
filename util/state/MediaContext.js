import { createContext, useState } from "react";

const MediaContext = createContext({
  mediaType: null,
  handler: function (elem) {},
  activeState: null,
});

export function MediaContextProvider(props) {
  const [changeMedia, setChangeMedia] = useState({
    name: "movies",
  });

  const [isActive, setIsActive] = useState(true);

  function changeMediaHandler(elem) {
    setIsActive(!isActive);
    setChangeMedia(() => {
      return {
        name: elem,
      };
    });
  }

  const context = {
    mediaType: changeMedia,
    handler: changeMediaHandler,
    activeState: isActive,
  };

  return (
    <MediaContext.Provider value={context}>
      {props.children}
    </MediaContext.Provider>
  );
}

export default MediaContext;
