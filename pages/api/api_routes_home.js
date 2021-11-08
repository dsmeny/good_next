import client from "../../util/redis-cli";
import axios from "axios";

export default async function handler(req, res) {
  let array = [];
  const members = await client.smembers("t");

  members.forEach((member) => {
    client.lindex(member, 0, (err, data) => {
      array.push(data);
      if (array.length === members.length) {
        res.status(200).json({ message: "ok", payload: array });
      }
    });
  });
}
