export const postData = (inputRef, stateHandler, type) => {
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
      !data.data ? stateHandler(null) : stateHandler(JSON.stringify(data.data));
    });
};
