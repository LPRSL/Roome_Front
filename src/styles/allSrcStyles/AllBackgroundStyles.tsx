import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { deviceHeight, deviceWidth } from '../../utils/deviceUtils';

export default StyleSheet.create({
  AllBackground: {
    flex: 1,
    backgroundColor: '#FFF4EB',
    width: deviceWidth * 1,
    height: deviceHeight * 1,
    paddingTop: Platform.OS === 'android' ? getStatusBarHeight() : null,
  },
});
