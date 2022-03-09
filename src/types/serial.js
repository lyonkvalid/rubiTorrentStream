import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLID,
  GraphQLSchema,
  getNullableType
} from "graphql";

import {
  posterType,
  statusType,
  genreType,
  countryType,
  networkType,
  variantType,
  characterType,
  peopleType,
  episodeType
} from "./type.js";

export default new GraphQLObjectType({
  name: "Serial",
  description: "Tv series and shows on (name)",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: serial => serial.id
    },
    title: {
      type: GraphQLString,
      resolve: serial => serial.title
    },
    lang_id: {
      type: GraphQLID,
      resolve: serial => serial.lang_id
    },
    tvrange_id: {
      type: getNullableType(GraphQLID),
      resolve: serial => serial.tvrange_id
    },
    tvmaze_id: {
      type: getNullableType(GraphQLID),
      resolve: serial => serial.tvmaze_id
    },
    mbd_id: {
      type: getNullableType(GraphQLID),
      resolve: serial => serial.mbd_id
    },
    tvdb_id: {
      type: getNullableType(GraphQLID),
      resolve: serial => serial.mbd_id
    },
    imdb_id: {
      type: getNullableType(GraphQLID),
      resolve: serial => (serial) ? Number(serial.mbd_id.replace(/\D/g, "")) : null
    },
    imdb_rating: {
      type: GraphQLFloat,
      resolve: serial => serial.imdb_rating
    },
    weight: {
      type: GraphQLFloat,
      resolve: serial => serial.weight
    },
    status_id: {
      type: getNullableType(GraphQLID),
      resolve: serial => serial.status_id
    },
    poster_id: {
      type: getNullableType(GraphQLID),
      resolve: serial => serial.poster_id
    },
    runtime: {
      type: GraphQLString,
      resolve: serial => serial.runtime
    },
    start: {
      type: GraphQLString,
      resolve: serial => serial.start
    },
    end: {
      type: GraphQLString,
      resolve: serial => serial.end
    },
    airday: {
      type: GraphQLString,
      resolve: serial => serial.airday
    },
    airtime: {
      type: GraphQLString,
      resolve: serial => serial.airtime
    },
    timezone: {
      type: GraphQLString,
      resolve: serial => serial.timezone
    },
    updated_at: {
      type: GraphQLString,
      resolve: serial => serial.updated_at
    },
    poster: {
      type: posterType,
      resolve: serial => serial.poster
    },
    status: {
      type: statusType,
      resolve: serial => serial.status
    },
    genre: {
      type: new GraphQLList(genreType),
      resolve: serial => serial.genre
    },
    country: {
      type: new GraphQLList(countryType),
      resolve: serial => serial.country
    },
    network: {
      type: new GraphQLList(networkType),
      resolve: serial => serial.network
    },
    variant: {
      type: new GraphQLList(variantType),
      resolve: serial => serial.variant
    },
    character: {
      type: new GraphQLList(variantType),
      resolve: serial => serial.character
    },
    people: {
      type: new GraphQLList(variantType),
      resolve: serial => serial.people
    },
    ep: {
      type: new GraphQLList(episodeType),
      resolve: serial => serial.ep
    },
})
})