// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@kiwicom/margarita-components';
import { Button, StyleSheet } from '@kiwicom/universal-components';

import { MODAL_TYPE } from './SearchConstants';
import {
  withSearchContext,
  type SearchContextState,
  type ModalTypes,
} from './SearchContext';

type Props = {|
  +setModalType: ModalTypes => void,
|};

class NoLocationSelected extends React.Component<Props> {
  handlePress = () => {
    this.props.setModalType(MODAL_TYPE.HIDDEN);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Please fill this form completely before you proceed.
        </Text>
        <View style={styles.buttonContainer}>
          <Button label="OK" onPress={this.handlePress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  text: {
    marginBottom: 8,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
  },
});

const select = ({ actions: { setModalType } }: SearchContextState) => ({
  setModalType,
});

export default withSearchContext(select)(NoLocationSelected);
