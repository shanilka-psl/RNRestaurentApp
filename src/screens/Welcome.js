import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import Assets from '../assets/index';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.background}
        resizeMode="cover"
        style={styles.image}
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
});

export default Welcome;
