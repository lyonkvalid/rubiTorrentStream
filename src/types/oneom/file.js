import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLFloat,
  getNullableType
} from "graphql";

import pivotType from "./pivot.js";

export default new GraphQLObjectType({
  name: "File",
  description: "Tv show or series file",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: file => file.id
    },
    tv_maze_id: {
      type: GraphQLID,
      resolve: file => file.tv_maze_id
    },
    weight: {
      type: GraphQLFloat,
      resolve: file => file.weight
    },
    name: {
      type: GraphQLString,
      resolve: file => file.name
    },
    created_at: {
      type: GraphQLString,
      resolve: file => file.created_at
    },
    updated_at: {
      type: GraphQLString,
      resolve: file => file.updated_at
    },
    deleted_at: {
      type: getNullableType(GraphQLString),
      resolve: file => file.deleted_at
    },
    pivot: {
      type: pivotType,
      resolve: file => file.pivotType
    }
  }),
});