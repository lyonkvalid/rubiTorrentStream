import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLFloat,
  getNullableType
} from "graphql";

import pivotType from "./pivot.js";
import fileType from "./file.js";

export default new GraphQLObjectType({
  name: "Character",
  description: "Tv show or series character",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: character => character.id
    },
    tv_maze_id: {
      type: GraphQLID,
      resolve: character => character.tv_maze_id
    },
    weight: {
      type: GraphQLFloat,
      resolve: character => character.weight
    },
    name: {
      type: GraphQLString,
      resolve: character => character.name
    },
    created_at: {
      type: GraphQLString,  
      resolve: character => character.created_at
    },
    updated_at: {
      type: GraphQLString,
      resolve: character => character.updated_at
    },
    deleted_at: {
      type: getNullableType(GraphQLString),
      resolve: character => character.deleted_at
    },
    pivot: {
      type: pivotType,
      resolve: character => character.pivotType
    },
    file: {
      type: new GraphQLList(fileType),
      resolve: character => character.file
    },
  }),
});