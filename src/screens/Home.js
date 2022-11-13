import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import Assets from '../assets/index';
import {ActionButton} from '../components/ActionButton';
import {FBLogo} from '../assets/Icons/FBLogo';
import {Route} from '../common/Enums';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground
        source={Assets.background}
        resizeMode="cover"
        style={styles.image}
      /> */}
      {/* <FBLogo /> */}

      <ActionButton
        title={'Home'}
        onPressBtn={() => navigation.navigate(Route.SPLASH)}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    height: CommonStyles.height,
    width: CommonStyles.width,
  },
  btnStyle: {
    backgroundColor: CommonStyles.colors.primary,
    height: 60,
    width: CommonStyles.width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28.5,
  },

  btnText: {
    // fontFamily: CommonStyles.fontFamily.bold,
    color: CommonStyles.colors.white,
    fontSize: 15,
  },
});

export default Home;
