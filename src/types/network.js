import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLFloat
} from "graphql";

import pivotType from "./pivot.js";

export default new GraphQLObjectType({
  name: "Network",
  description: "Tv show or series network",
  fields: () => ({
    weight: {
      type: GraphQLFloat,
      resolve: network => network.weight
    },
    country_id: {
      type: GraphQLID,
      resolve: network => network.country_id
    },
    name: {
      type: GraphQLString,
      resolve: network => network.name
    },
    pivot: {
      type: pivotType,
      resolve: network => network.pivot
    }
  }),
});