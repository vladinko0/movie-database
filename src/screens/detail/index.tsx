import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {useTheme} from '../../context/Theme';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Detail: FC = () => {
  const {theme} = useTheme();
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={[theme.homeGradient1, theme.homeGradient2]}
        style={styles.gradient}
      />
    </View>
  );
};

export default memo(Detail);
