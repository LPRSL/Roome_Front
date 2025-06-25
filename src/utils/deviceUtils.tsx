import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const currenPlatform: string = Platform.OS;
export const deviceWidth: number = width;
export const deviceHeight: number = height;
