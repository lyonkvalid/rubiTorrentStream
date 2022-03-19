import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLFloat
} from "graphql";

import pivotType from "./pivot.js";

export default new GraphQLObjectType({
  name: "Country"
  description: "Tv show or series country",
  fields: () => ({
    id: {
      type: GraphQLID
      resolve: country => country.id
    },
    weight: {
      type: GraphQLFloat
      resolve: country => country.weight
    },
    name: {
      type: GraphQLString
      resolve: country => country.name
    },
    pivot: {
      type: new GraphQLObjectType(pivotType)
      resolve: country = country.pivot
    }
  }),
});