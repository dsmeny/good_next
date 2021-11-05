import client from "../../util/redis-cli";
import axios from "axios";

export default async function handler(req, res) {
  const { name, type } = req.body;

  const search = await client.sismember(`${type}`, `${name}`);

  if (search === 0) {
    const response = await axios(
      `https://www.omdbapi.com/?${type}=${name}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    const data = await response.data;

    if (data.Response === "False") {
      return res.status(400).json({ message: "Bad Request", data: null });
    }

    const title = data.Title.toLowerCase();
    const id = data.imdbID;

    if (id === name) {
      await client
        .pipeline([
          ["sadd", `${type}`, name.toLowerCase()],
          ["lpush", `${id}`, JSON.stringify(data)],
          ["rpush", `${id}`, data.imdbID, data.Title],
        ])
        .exec();
    } else if (title === name) {
      await client
        .pipeline([
          ["sadd", `${type}`, name.toLowerCase()],
          ["lpush", `${title}`, JSON.stringify(data)],
          ["rpush", `${title}`, data.imdbID, data.Title],
        ])
        .exec();
    }
    // console.log("API call to OMDBapi!!");
    return res.status(200).json({ message: "OK", data: data });
  } else {
    // console.log("Call to REDIS!!");
    const result = await client.smembers(type);
    const response = result.filter((item) => item === name);
    const data = await client.lindex(`${response[0]}`, 0);

    return res.status(200).json({ message: "OK", data: data });
  }
}
