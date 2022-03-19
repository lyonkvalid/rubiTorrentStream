import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType
} from "graphql";

export default new GraphQLObjectType({
  name: "Status",
  description: "Tv show or series status",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: status => status.id
    },
    name: {
      type: GraphQLString,
      resolve: status => status.name
    }
  }),
});