import {Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const font = {
  xs: Platform.OS === 'android' ? RFPercentage(1.8) : RFPercentage(1.5),
  sm: RFPercentage(1.8),
  md: RFPercentage(2.0),
  lg: RFPercentage(2.5),
  xl: RFPercentage(2.7),
  xxl: RFPercentage(3.0),
};

export default font;
