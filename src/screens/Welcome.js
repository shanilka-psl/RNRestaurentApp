/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import Assets from '../assets/index';
import {ActionButton} from '../components/ActionButton';
import {Route} from '../common/Enums';
import LinearGradient from 'react-native-linear-gradient';
import {LoginButtonGroup} from '../components/LoginButtonGroup';

const Welcome = ({navigation}) => {
  const subTitleText = ' Your favourite foods delivered\n fast at your door';

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.background}
        resizeMode="cover"
        style={styles.image}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)']}
          style={styles.screenContainer}>
          <View style={styles.subContainer}>
            <ActionButton
              title={'Skip'}
              onPressBtn={() => navigation.navigate(Route.TAB_HOME)}
              customStyle={styles.skipBtnStyle}
              customTextStyle={styles.skipText}
            />

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Welcome to </Text>
              <Text
                style={[styles.title, {color: CommonStyles.colors.primary}]}>
                Food Hub
              </Text>
            </View>

            <Text style={styles.subTitle}>{subTitleText}</Text>

            <View style={styles.deviderContainer}>
              <View style={styles.devider} />
              <Text style={styles.deviderText}>{'Sign in with'}</Text>
              <View style={styles.devider} />
            </View>

            <LoginButtonGroup />

            <ActionButton
              title={'Start with email or phone'}
              onPressBtn={() => navigation.navigate(Route.SIGNUP)}
              customStyle={styles.footerBtnStyle}
              customTextStyle={styles.footerBtnText}
            />

            <View style={styles.footerTextContainer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <ActionButton
                title={'Sign In'}
                onPressBtn={() => navigation.navigate(Route.TAB_HOME)}
                customTextStyle={[
                  styles.footerText,
                  {textDecorationLine: 'underline'},
                ]}
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: CommonStyles.height,
    width: CommonStyles.width,
  },
  screenContainer: {
    height: CommonStyles.height,
    width: CommonStyles.width,
  },

  subContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 30,
  },

  titleContainer: {
    marginTop: 125,
  },

  title: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 53,
    color: CommonStyles.colors.black,
  },

  subTitle: {
    fontFamily: CommonStyles.fontFamily.medium,
    fontSize: 18,
    color: CommonStyles.colors.grey2,
    textAlign: 'left',
  },

  skipBtnStyle: {
    backgroundColor: CommonStyles.colors.white,
    height: 32,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
    position: 'absolute',
    top: 10,
    right: 5,
  },

  skipText: {
    fontFamily: CommonStyles.fontFamily.medium,
    color: CommonStyles.colors.primary,
    fontSize: 14,
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

  footerBtnStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.21)',
    height: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 28,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: CommonStyles.colors.white,
  },

  footerBtnText: {
    fontFamily: CommonStyles.fontFamily.medium,
    color: CommonStyles.colors.white,
    fontSize: 17,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },
  devider: {
    height: 1,
    backgroundColor: CommonStyles.colors.white,
    width: CommonStyles.width * 0.25,
  },
  deviderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 225,
  },
  deviderText: {
    fontFamily: CommonStyles.fontFamily.medium,
    fontSize: 16,
    color: CommonStyles.colors.white,
  },

  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },

  footerText: {
    fontFamily: CommonStyles.fontFamily.medium,
    fontSize: 16,
    color: CommonStyles.colors.white,
  },
});

export default Welcome;
