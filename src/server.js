import fs from "fs";
import express from "express";
import { Server } from "socket.io";
import WebTorrent from "webtorrent";
import { createServer } from "http";
import path from 'path';
const __dirname = path.resolve();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.use((socket, next) => {
    const { device } = socket.handshake.auth;
    if(!device) return next(Error("A device id must be provided."));
    socket.id = device;
    next();
});
const client = new WebTorrent();

const parseInfoHash = magnet => magnet.split("/").slice(-1)[0].toLowerCase();

const getTorrent = magnet => new Promise((resolve, reject) =>{
    let torrent = client.get(parseInfoHash(magnet));
    (torrent) ? resolve(torrent) : client.add(magnet, (torrent) => resolve(torrent));
});

io.on("connection", (socket)=> {
    let torrent, server;
    
    socket.on("getTorrentInfo", async magnetURI => {
       torrent = await getTorrent(magnetURI);
       const info = {
           infoHash: torrent.infoHash,
            files: torrent.files.map((file, index) => ({
                index,
                name: file.name,
                size: file.length,
           }))
        };
        socket.emit("torrentInfo", info);
    });
});

app.get("/stream/:infoHash/:index", (req, res) => {
    const { infoHash, index } = req.params;
    const torrent = client.get(infoHash);
    if(!torrent) return res.send({"error": "Invalid request"}, status=500);
    const file = torrent.files[index];
    if(!file) return res.send({"error": "torrent file with index not found"}, status=404);
    const stream = file.createReadStream();
    stream.on("open", () => {
        console.log(stream);
        stream.pipe(res);
    });
});

export default httpServer;