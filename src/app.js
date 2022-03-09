import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schemas/serial.js";
import { fetchEpisodes } from "./http/oneom.js";

const app = express();

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("server running @ port 4000");
});