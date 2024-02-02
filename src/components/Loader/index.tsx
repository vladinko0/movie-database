import React, {FC, memo} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';

const Loader: FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default memo(Loader);
