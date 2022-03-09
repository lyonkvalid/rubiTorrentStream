import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  getNullableType,
  GraphQLInt
} from "graphql";

import { torrentType } from "./type.js";

export default new GraphQLObjectType({
  name: "Episode",
  description: "Tv series episodes",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: episode => episode.id
    },
    serial_id: {
      type: GraphQLID,
      resolve: episode => episode.serial_id
    },
    season: {
      type: GraphQLString,
      resolve: episode => episode.season
    },
    ep: {
      type: GraphQLString,
      resolve: episode => episode.ep
    },
    td_post_id: {
      type: getNullableType(GraphQLID),
      resolve: episode => episode.td_post_id
    },
    fb_post_id:{
      type: getNullableType(GraphQLID),
      resolve: episode => episode.fb_post_id
    },
    title: {
      type: GraphQLString,
      resolve: episode => episode.title
    },
    airdate: {
      type: GraphQLString,
      resolve: episode => episode.airdate
    },
    rait: {
      type: getNullableType(GraphQLID),
      resolve: episode => episode.tvrange_id
    },
    weight: {
      type: GraphQLFloat,
      resolve: episode => episode.weight
    },
    online_c: {
      type: GraphQLInt,
      resolve: episode => episode.online_c
    },
    subtitle_c: {
      type: GraphQLInt,
      resolve: episode => episode.subtitle_c
    },
    torrent_c: {
      type: GraphQLInt,
      resolve: episode => episode.torrent_c
    },
    updated_at: {
      type: GraphQLString,
      resolve: episode => episode.updated_at
    },
   /* torrent: {
      type: new GraphQLList(torrentType),
      resolve: episode => episode.torrent
    } */
  }),
});