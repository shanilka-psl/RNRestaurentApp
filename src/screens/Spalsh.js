import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Image} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import {Route} from '../common/Enums';
import Assets from '../assets/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  //splash screen will be shown for 2 seconds
  React.useEffect(() => {
    setTimeout(async () => {
      const value = await AsyncStorage.getItem('USER');
      if (value !== null) {
        navigation.replace(Route.TAB_HOME);
      } else {
        navigation.replace(Route.WELCOME);
      }
    }, 2000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={Assets.logo} resizeMode={'center'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CommonStyles.colors.primary,
  },
  logo: {
    width: CommonStyles.width * 0.5,
    height: CommonStyles.width * 0.5,
  },
});

export default Splash;
