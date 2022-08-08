import {StyleSheet} from 'react-native';
import {backgrounds, colors} from '../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: backgrounds.background_type_psychic,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  text: {
    color: colors.text_white,
  },
});
