import {
  GraphQLObjectType,
  GraphQLID,
} from "graphql";

export default new GraphQLObjectType({
  name: "Pivot",
  description: "Tv show or series pivot",
  fields: () => ({
    serial_id: {
      type: GraphQLID,
      resolve: pivot => pivot.serial_id
    },
    genre_id: {
      type: GraphQLID,
      resolve: pivot => pivot.pivot_id
    },
  }),
});