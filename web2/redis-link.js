let redis = require("redis"),
  client = redis.createClient({
    host: process.env.redis_host || "127.0.0.1",
    prot: 6379,
  });

client.on("error", function (err) {
  console.log("Error " + err);
});

let setKey = (key, value) => {
  return new Promise((resolve, reject) => {
    client.set(key, value, (err, replay) => {
      if (err) {
        reject(err);
      } else {
        resolve(replay);
      }
    });
  });
};

let getKey = (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, replay) => {
      if (err) {
        reject(err);
      } else {
        resolve(replay);
      }
    });
  });
};

module.exports = {
  setKey,
  getKey,
};
