import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from "graphql";

export default new GraphQLObjectType({
  name: "variant",
  description: "Tv show or series variant",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: variant => variant.id
    },
    serial_id: {
      type: GraphQLID,
      resolve: variant => variant.serial_id
    },
    title: {
      type: GraphQLString,
      resolve: variant => variant.title
    },
    start: {
      type: GraphQLString,
      resolve: variant => variant.start
    },
    end: {
      type: GraphQLString,
      resolve: variant => variant.end
    },
    created_at: {
      type: GraphQLString,
      resolve: variant => variant.created_at
    },
    updated_at: {
      type: GraphQLString,
      resolve: variant => variant.updated_at
    },
  }),
});