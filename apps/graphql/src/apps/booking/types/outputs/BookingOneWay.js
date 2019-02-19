// @flow

import { GraphQLObjectType } from 'graphql';

import BookingInterface, { commonFields } from './BookingInterface';
import type { Booking } from '../../Booking';
import GraphQLTrip from '../../../common/types/outputs/Trip';
import FromToInterface from '../../../common/types/outputs/FromToInterface';

const NAME = 'BookingOneWay';

const BookingOneWay = new GraphQLObjectType({
  name: NAME,
  description: 'Booking from A to B with no return, but possible stopovers',
  interfaces: [BookingInterface, FromToInterface],
  isTypeOf: (value: Booking) => value.type === NAME,
  fields: {
    ...commonFields,
    trip: {
      type: GraphQLTrip,
      resolve: (booking: Booking) => booking,
    },
  },
});

export default BookingOneWay;
