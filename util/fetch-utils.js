export const postData = (e, inputRef, setState, type) => {
  e.preventDefault();

  const inputFieldValue = inputRef.current.value;

  fetch("/api/api_routes", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inputFieldValue,
      type: type,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setState(JSON.stringify(data.data));
    });
};

export const closeNotify = (setState, inputRef) => {
  setTimeout(() => {
    setState("");
    inputRef.current.value = "";
  }, 500);
};
