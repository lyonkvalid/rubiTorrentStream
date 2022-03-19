import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from "graphql";

export default new GraphQLObjectType({
  name: "Quality",
  description: "Tv show or series quality",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: quality => quality.id
    },
    quality_group_id: {
      type: GraphQLID,
      resolve: quality => quality.quality_group_id
    },
    name: {
      type: GraphQLString,
      resolve: quality => quality.name
    },
  }),
});