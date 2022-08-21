import {StyleSheet} from 'react-native';
import {backgrounds, colors} from '../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: backgrounds.background_type_psychic,
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: backgrounds.background_type_fighting,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  text: {
    color: colors.text_white,
  },
});
