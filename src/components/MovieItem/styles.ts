import {Theme} from '../../context/Theme/types';
import {StyleSheet} from 'react-native';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginTop: 4,
      marginBottom: 4,
      height: 80,
      borderRadius: 7,
      backgroundColor: theme.white,
      width: '100%',
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
    },
    titleText: {
      flexGrow: 1,
      fontSize: 16,
      color: theme.cornflowerBlue,
      width: '45%',
      marginRight: 15,
    },
    poster: {
      width: 45,
      height: 45,
      marginRight: 8,
      borderRadius: 5,
    },
  });
