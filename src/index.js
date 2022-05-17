import fs from "fs";
import express from "express";
import WebTorrent from "webtorrent";
import serverless from "serverless-http";
import schema from "./schemas/serial.js";
import { graphqlHTTP } from "express-graphql";

const app = express();
const client = new WebTorrent();

const parseInfoHash = magnet => magnet.split("/").slice(-1)[0].toLowerCase();

const getTorrent = magnet => new Promise((resolve, reject) =>{
  let torrent = client.get(parseInfoHash(magnet));
  (torrent) ? resolve(torrent) : client.add(magnet, (torrent) => resolve(torrent));
});

app.get("/stream", async (req, res) => {
  const { magnet, type } = req.query;
  const ext = type.split("/")[1];

  const torrent = await getTorrent(magnet);
  const getFiles = (...exts) => (
    exts.map((ext) => torrent.files.find(file => file.name.endsWith(ext) || file.name.endsWith(".txt")))
  );

  const [video] = getFiles(ext);
  if(!video) res.json({file: null});
  let range = req.headers.range;
  const [chunkSize, total] = [10 ** 5, video.length];

  (!range) ? video.createReadStream().pipe(res) : (function(){
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + chunkSize, total - 1);
    const contentLength = end - start + 1;

    const headers = {
      "Content-Range": `bytes ${start}-${end}/${total}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": type,
    };

    res.writeHead(206, headers);
    video.createReadStream({ start, end}).pipe(res);
  })();
});

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

export default serverless(app);