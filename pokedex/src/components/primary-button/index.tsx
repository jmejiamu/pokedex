import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
type Props = {
  title: string;
  onPress: () => void;
  style?: any;
};
const PrimaryButton = ({title, onPress, style}: Props) => {
  console.log('🚀 ~ file: index.tsx ~ line 10 ~ PrimaryButton ~ style', style);
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
