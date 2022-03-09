import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString } from "graphql";

import { fetchEpisodes, fetchSerial, dataLoader } from "../http/oneom.js"
import { serialType, episodeType } from "../types/type.js";

const queryType = new GraphQLObjectType({
  name: "Query",
  description: "Root of all query",
  fields: () => ({
    episodes:{
      type: new GraphQLList(episodeType),
      resolve: () => fetchEpisodes()
    },
    serial:{
      type: serialType,
      args:{
        id: {
          type: GraphQLString
        }
      },
      resolve: (root, args) => dataLoader(fetchSerial).load(`${args.id}/`)
    }
  })
});

export default new GraphQLSchema({
  query: queryType
});