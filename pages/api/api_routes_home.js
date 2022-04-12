import client from "../../util/redis-cli";

export default async function handler(req, res) {
  let array = [];
  const members = await client.smembers("t");

  members.forEach((member) => array.push(member));

  res.send({ message: "Ok", payload: array });
}
