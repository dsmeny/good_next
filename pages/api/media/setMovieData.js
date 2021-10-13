const Redis = require("ioredis");

const redis = new Redis(process.env.REDIS_URL);

export default async function handler(req, res) {
  const { media } = req.body;
  console.log("setMovieData fired!!: ", media);
  const mediaStore = await redis.set("media", media);

  res.status(200).send({ success: true, mediaStore });
}
