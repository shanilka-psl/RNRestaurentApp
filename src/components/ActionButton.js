import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {FBLogo} from '../assets/Icons/FBLogo';
import CommonStyles from '../common/CommonStyles';

export const ActionButton = ({
  title,
  customStyle,
  customTextStyle,
  onPressBtn,
}) => {
  return (
    <TouchableOpacity style={customStyle} onPress={onPressBtn}>
      <Text
        style={[{fontFamily: CommonStyles.fontFamily.medium}, customTextStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
