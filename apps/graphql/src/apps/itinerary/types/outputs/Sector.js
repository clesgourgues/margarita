// @flow

import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';

import type { Sector } from '../../Itinerary';
import Segment from '../../../common/types/outputs/Segment';
import GraphQLRouteStop from '../../../common/types/outputs/RouteStop';

export default new GraphQLObjectType({
  name: 'Sector',
  fields: {
    duration: {
      type: GraphQLInt,
    },
    segments: {
      type: new GraphQLList(Segment),
    },
    stopoverDuration: {
      type: GraphQLInt,
      resolve: ({ stopoverDuration }: Sector): number | null =>
        stopoverDuration,
    },
    departure: {
      type: GraphQLRouteStop,
    },
    arrival: {
      type: GraphQLRouteStop,
    },
  },
});
