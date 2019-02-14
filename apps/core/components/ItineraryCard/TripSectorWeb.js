// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text, StyleSheet, Icon } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import {
  withLayoutContext,
  LAYOUT,
  type LayoutContextState,
} from '@kiwicom/margarita-utils';

import type { TripSectorWeb as TripSectorType } from './__generated__/TripSectorWeb.graphql';
import Transporters from './Transporters';
import LocalTime from './LocalTime';
import LocationName from './LocationName';
import { getDuration, dateFormat } from './TripSectorHelpers';

type Props = {|
  +data: ?TripSectorType,
  +layout: number,
|};

function TripSectorWeb({ data, layout }: Props) {
  const mobileLayout = layout < LAYOUT.largeMobile;
  return (
    <View style={styles.container}>
      <Transporters data={data} />
      <View
        style={[
          styles.marginEnd,
          styles.timeDate,
          mobileLayout && styles.timeDateMobile,
        ]}
      >
        <View style={styles.row}>
          <LocalTime data={data?.departureTime} style={styles.timeText} />
          <Text style={styles.timeText}> - </Text>
          <LocalTime data={data?.arrivalTime} style={styles.timeText} />
        </View>
        <LocalTime
          data={data?.departureTime}
          dateFormat={dateFormat}
          style={styles.date}
        />
      </View>
      <View style={styles.marginEnd}>
        <Text style={styles.duration} numberOfLines={1}>
          {getDuration(data?.duration)}
        </Text>
        <View style={styles.destinations}>
          <LocationName data={data?.origin} style={styles.destination} />
          <Icon name="route-no-stops" color="#bac7d5" size="large" />
          <LocationName data={data?.destination} style={styles.destination} />
        </View>
      </View>
    </View>
  );
}

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

export default createFragmentContainer(
  withLayoutContext(layoutSelect)(TripSectorWeb),
  graphql`
    fragment TripSectorWeb on Sector {
      duration
      arrivalTime {
        ...LocalTime
      }
      departureTime {
        ...LocalTime
      }
      destination {
        ...LocationName
      }
      duration
      origin {
        ...LocationName
      }
      ...Transporters
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginEnd: {
    marginEnd: 10,
  },
  row: {
    flexDirection: 'row',
  },
  timeDate: {
    marginStart: 30,
    minWidth: 155,
  },
  timeDateMobile: {
    marginStart: 10,
    minWidth: 115,
  },
  timeText: {
    color: defaultTokens.paletteInkNormal,
    fontSize: parseInt(defaultTokens.fontSizeTextNormal, 10),
    fontWeight: defaultTokens.fontWeightMedium,
  },
  date: {
    color: defaultTokens.paletteInkNormal,
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
    marginTop: parseInt(defaultTokens.spaceXXSmall, 10),
  },
  duration: {
    color: '#2e353b', // @TODO repeating value - should be added to design-tokens
    fontSize: parseInt(defaultTokens.fontSizeTextNormal, 10),
  },
  destinations: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: parseInt(defaultTokens.spaceXXSmall, 10),
    height: 14,
  },
  destination: {
    color: defaultTokens.paletteInkLight,
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
  },
});
