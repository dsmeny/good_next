export const postData = (inputFieldValue, setState, type) => {
  fetch("/api/api_routes", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inputFieldValue.trim().toLowerCase(),
      type: type,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      !data.data ? setState(null) : setState(JSON.stringify(data.data));
    });
};

function postHandler(e, inputRef, postApi) {
  e.preventDefault();

  const inputFieldValue = inputRef.current.value;
  postApi(inputFieldValue);
}

export default postHandler;
