import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from "graphql";


export default new GraphQLObjectType({
  name: "Poster",
  description: "Movie poster/image for Tv shows and series",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: poster => poster.id
    },
    name: {
      type: GraphQLString,
      resolve: poster => poster.name
    },
    alt: {
      type: GraphQLString,
      resolve: poster => poster.alt
    },
    original: {
      type: GraphQLString,
      resolve: poster => poster.original
    },
    path: {
      type: GraphQLString,
      resolve: poster => path
    }
  }),
});