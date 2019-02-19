// @flow

import { GraphQLObjectType, GraphQLInt } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import GraphQLDateType from './DateType';
import GraphQLVehicle from './Vehicle';
import GraphQLTransporter from './Transporter';
import GraphQLLocation from '../../../location/types/outputs/Location';
import GraphQLRouteStop from './RouteStop';

export default new GraphQLObjectType({
  name: 'Segment',
  fields: {
    id: GlobalID(({ id }) => id),
    arrivalTime: {
      type: GraphQLDateType,
    },
    departureTime: {
      type: GraphQLDateType,
    },
    destination: {
      type: GraphQLLocation,
    },
    duration: {
      type: GraphQLInt,
    },
    origin: {
      type: GraphQLLocation,
    },
    transporter: {
      type: GraphQLTransporter,
    },
    vehicle: {
      type: GraphQLVehicle,
    },
    departure: {
      type: GraphQLRouteStop,
    },
    arrival: {
      type: GraphQLRouteStop,
    },
  },
});
