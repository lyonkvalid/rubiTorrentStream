import fs from "fs";
import express from "express";
import WebTorrent from "webtorrent";
import portFinder from "portfinder";
import TCPPortUsed from "tcp-port-used";
import StreamBodyParser from "stream-body-parser";
import Transcoder from "stream-transcoder";

const app = express();
// const bodyParser = new StreamBodyParser(app);

// let client = new WebTorrent();

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

app.get("/video.mp4", (req, res) => {
new Transcoder(fs.createReadStream("video.mp4"))
    	   
    	    .videoCodec('h264')

    	   // .audioCodec('aac')

    	    .format('mp4')
    	    .on('finish', function() {
    	    	next();
    	    })
    	    .stream().pipe(res);
  // .pipe(res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Files serving @ port 3000");
});