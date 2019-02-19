// @flow

import { GraphQLObjectType, GraphQLList } from 'graphql';

import BookingInterface, { commonFields } from './BookingInterface';
import type { Booking } from '../../Booking';
import GraphQLTrip from '../../../common/types/outputs/Trip';
import FromToInterface from '../../../common/types/outputs/FromToInterface';

const NAME = 'BookingMulticity';

const BookingMulticity = new GraphQLObjectType({
  name: NAME,
  description: 'Booking from A to B, B to C and so on, with possible stopovers',
  interfaces: [BookingInterface, FromToInterface],
  isTypeOf: (value: Booking) => value.type === NAME,
  fields: {
    ...commonFields,

    trips: {
      type: GraphQLList(GraphQLTrip),
      resolve: ({ trips }: Booking) => trips,
    },
  },
});

export default BookingMulticity;
