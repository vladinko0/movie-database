import React, {FC, memo} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import {FooterProps} from './types';
import {useTheme} from '../../context/Theme';

const Footer: FC<FooterProps> = ({isLoading, pageNumber}) => {
  const {theme} = useTheme();

  if (!isLoading || pageNumber === 1) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={theme.white} />
    </View>
  );
};

export default memo(Footer);
export const defaultRenderFooter = (props: FooterProps) => (
  <Footer {...props} />
);
