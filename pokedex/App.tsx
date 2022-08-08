import React from 'react';
import {SafeAreaView} from 'react-native';
import Root from './src';
import {size} from './src/constant/themes';

const App = () => {
  return (
    <SafeAreaView style={{marginHorizontal: size.margin_horizontal.size}}>
      <Root />
    </SafeAreaView>
  );
};

export default App;
