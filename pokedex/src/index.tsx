import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from './constant/themes';

const Root = () => {
  return (
    <View>
      <Text style={styles.font}>Root</Text>
    </View>
  );
};

export default Root;

const styles = StyleSheet.create({
  font: {
    color: colors.type_electric,
  },
});
