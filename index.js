import app from "./src/server.js";

// server express app to PORT
const listener = app.listen(port => {
    console.log("Running express server at port " + listener.address().port);
});