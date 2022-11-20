import React from 'react';
import {StyleSheet, View} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import {ActionButton} from '../components/ActionButton';
import {FBLogo} from '../assets/Icons/FBLogo';
import {GoogleLogo} from '../assets/Icons/GoogleLogo';

export const LoginButtonGroup = () => {
  return (
    <View style={styles.btnContainer}>
      <ActionButton
        title={'FACEBOOK'}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
        icon={<FBLogo />}
      />

      <ActionButton
        title={'GOOGLE'}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
        icon={<GoogleLogo />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },

  btnStyle: {
    backgroundColor: CommonStyles.colors.white,
    height: CommonStyles.height * 0.065,
    width: CommonStyles.width * 0.4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 28,
    flexDirection: 'row',
  },

  btnText: {
    fontFamily: CommonStyles.fontFamily.light,
    color: CommonStyles.colors.black,
    fontSize: 14,
    right: 5,
  },
});
