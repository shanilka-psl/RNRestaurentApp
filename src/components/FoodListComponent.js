import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import CommonStyles from '../common/CommonStyles';

export const FoodListComponent = ({
  title,
  image,
  customStyle,
  customTextStyle,
  onPressBtn,
}) => {
  return (
    <TouchableOpacity
      style={[styles.itemStyle, customStyle]}
      onPress={onPressBtn}>
      <Image style={styles.imageStyle} source={image} />
      <Text style={[styles.textStyle, customTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 12,
    fontFamily: CommonStyles.fontFamily.medium,
  },

  itemStyle: {
    height: 100,
    width: 60,
    backgroundColor: CommonStyles.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 8,
  },

  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    bottom: 10,
  },
});
