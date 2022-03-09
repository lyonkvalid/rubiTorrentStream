import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  getNullableType
} from "graphql";

import pivotType from "./pivot.js";
import fileType from "./file.js";

export default new GraphQLObjectType({
  name: "people",
  description: "Tv show or series people",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: people => people.id
    },
    tv_maze_id: {
      type: GraphQLID,
      resolve: people => people.tv_maze_id
    },
    weight: {
      type: GraphQLFloat,
      resolve: people => people.weight
    },
    name: {
      type: GraphQLString,
      resolve: people => people.name
    },
    created_at: {
      type: GraphQLString,
      resolve: people => people.created_at
    },
    updated_at: {
      type: GraphQLString,
      resolve: people => people.updated_at
    },
    deleted_at: {
      type: getNullableType(GraphQLString),
      resolve: people => people.deleted_at
    },
    pivot: {
      type: pivotType,
      resolve: people => people.pivotType
    },
    file: {
      type: new GraphQLList(fileType),
      resolve: people => people.file
    },
  }),
});