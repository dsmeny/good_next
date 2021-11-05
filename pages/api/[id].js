import client from "../../util/redis-cli";

export default async function handler(req, res) {
  const result = await client.smembers(req.query.type);
  console.log("dynamic api result: ", result);
  console.log("dynamic api req.query.id: ", req.query.id);
  const response = result.filter((item) => item === req.query.id);
  // console.log("dynamic api response: ", response);
  const data = await client.lindex(`${response[0]}`, 0);
  // console.log("dynamic api data: ", data);
  return res.status(200).json({ mesasge: "OK", data: data });
}
