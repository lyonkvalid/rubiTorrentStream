import app from "./src/server.js";

// server express app to PORT
const listener = app.listen(process.env.PORT, port => {
    console.log("Server running at port " + listener.address().port);
});