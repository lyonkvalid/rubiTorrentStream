import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from "graphql";

import pivotType from "./pivot.js";

export default new GraphQLObjectType({
  name: "Genre",
  description: "Tv show or series genres",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: genre => genre.id
    },
    name: {
      type: GraphQLString,
      resolve: genre => genre.name
    },
    pivot: {
      type: pivotType,
      resolve: genre => genre.pivot
    }
  }),
});