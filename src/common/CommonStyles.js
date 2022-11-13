import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default {
  width,
  height,

  colors: {
    // base colors
    primary: '#FE724C', // orange
    secondary: '#25282B', // black
    white: '#FFFFFF',
    grey: '#D3D1D8',
  },

  fontFamily: {
    bold: 'Rubik-Bold',
    medium: 'Rubik-Medium',
    light: 'Rubik-Light',
  },
};
