import {Text, View} from 'react-native';
import React from 'react';
import {backgrounds} from './constant/themes';
import {PrimaryButton} from './components';

const Root = () => {
  return (
    <View>
      <Text>Root</Text>
      <PrimaryButton title="Primary button" onPress={() => null} />
    </View>
  );
};

export default Root;
