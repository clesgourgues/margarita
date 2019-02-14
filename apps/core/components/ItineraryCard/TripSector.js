// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { TripSector as TripSectorType } from './__generated__/TripSector.graphql';
import TripSectorWeb from './TripSectorWeb';
import TripSectorNative from './TripSectorNative';

type Props = {|
  +data: ?TripSectorType,
|};

function TripSector({ data }: Props) {
  return Platform.OS === 'web' ? (
    <TripSectorWeb data={data} />
  ) : (
    <TripSectorNative data={data} />
  );
}

export default createFragmentContainer(
  TripSector,
  graphql`
    fragment TripSector on Sector {
      ...TripSectorNative
      ...TripSectorWeb
    }
  `,
);
