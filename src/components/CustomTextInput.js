import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CommonStyles from '../common/CommonStyles';

export const CustomTextInput = ({
  customTitle,
  icon,
  onShowPasswordPress,
  secureTextEntry,
  customValue,
  onChangeCustomText,
  multiline,
  numberOfLines,
  customInputStyle,
}) => {
  return (
    <View>
      <Text style={styles.titleText}>{customTitle}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={customValue}
          onChangeText={onChangeCustomText}
          style={[styles.inputStyles, customInputStyle]}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
        <TouchableOpacity onPress={onShowPasswordPress} style={styles.icon}>
          {icon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 0.5,
    borderColor: '#2196F3',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CommonStyles.colors.white,
  },
  titleText: {
    fontFamily: CommonStyles.fontFamily.medium,
    color: CommonStyles.colors.grey3,
    marginVertical: 12,
  },
  // inputStyles: {
  //   height: 65,
  //   width: CommonStyles.width * 0.8,
  //   padding: 20,
  //   borderRadius: 10,
  // },

  inputStyles: {
    height: 50,
    width: CommonStyles.width * 0.65,
    padding: 10,
    borderRadius: 8,
  },

  icon: {position: 'absolute', right: 20},
});
