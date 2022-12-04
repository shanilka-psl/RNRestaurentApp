import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import Assets from '../assets/index';
import CommonStyles from '../common/CommonStyles';

export const FeaturedFoodItem = ({
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
      <Image style={styles.imageStyle} source={image} resizeMode={'center'} />
      <View>
        <Text style={[styles.textStyle, customTextStyle]}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={Assets.rider} />
          <Text style={[styles.subTextStyle, customTextStyle]}>
            Free Delivery
          </Text>
          <Text style={[styles.subTextStyle, customTextStyle]}>10-15 mins</Text>
        </View>
      </View>
      <Text style={[styles.textItemStyle, customTextStyle]}>BURGER</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontFamily: CommonStyles.fontFamily.medium,
  },
  subTextStyle: {
    fontSize: 16,
    fontFamily: CommonStyles.fontFamily.light,
  },
  textItemStyle: {
    fontSize: 16,
    fontFamily: CommonStyles.fontFamily.light,
    backgroundColor: CommonStyles.colors.grey1,
  },
  itemStyle: {
    flex: 1,
    height: 230,
    backgroundColor: CommonStyles.colors.white,
    justifyContent: 'flex-start',
    borderRadius: 15,
    margin: 8,
  },

  imageStyle: {
    height: 130,
    width: '100%',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
});
