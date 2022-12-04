import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import CommonStyles from '../common/CommonStyles';

export const FoodListComponent = ({
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
