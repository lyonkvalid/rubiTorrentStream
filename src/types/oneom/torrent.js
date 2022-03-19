import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLInt,
  getNullableType
} from "graphql";

import  qualityType from "./quality.js";

export default new GraphQLObjectType({
  name: "Torrent",
  description: "Tv shows or series torrent",
  fields: () => ({
    idid: {
      type: GraphQLID,
      resolve: torrent => torrent.id
    },
    title: {
      type: GraphQLString,
      resolve: torrent => torrent.title
    },
    url: {
      type: GraphQLString,
      resolve: torrent => torrent.url
    },
    size: {
      type: GraphQLInt,
      resolve: torrent => torrent.size
    },
    seed: {
      type: GraphQLID,
      resolve: torrent => torrent.seed
    },
    leech: {
      type: GraphQLID,
      resolve: torrent => torrent.leech
    },
    lang_id: {
      type: GraphQLID,
      resolve: torrent => torrent.lang_id
    },
    source_id: {
      type: GraphQLID,
      resolve: torrent => torrent.source_id
    },
    vk_post_id: {
      type: getNullableType(GraphQLID),
      resolve: torrent => torrent.vk_post_id
    },
    quality_id: {
      type: GraphQLID,
      resolve: torrent => torrent.quality_id
    },
    status_id: {
      type: GraphQLID,
      resolve: torrent => torrent.status_id
    },
    rating:{
      type: getNullableType(GraphQLString),
      resolve: torrent => torrent.rating
    },
    published_at: {
      type: GraphQLString,
      resolve: torrent => torrent.published_at
    },
    created_at: {
      type: GraphQLString,
      resolve: torrent => torrent.created_at
    },
    updated_at: {
      type: GraphQLString,
      resolve: torrent => torrent.updated_at
    },
    quality: {
      type: qualityType,
      resolve: torrent => torrent.quality
    }
  })
});