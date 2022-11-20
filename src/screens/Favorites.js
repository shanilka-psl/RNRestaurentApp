import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import {ActionButton} from '../components/ActionButton';
import {Route} from '../common/Enums';

const Favorites = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ActionButton
        title={'Favorites'}
        onPressBtn={() => navigation.navigate(Route.TAB_HOME)}
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
    fontFamily: CommonStyles.fontFamily.bold,
    color: CommonStyles.colors.white,
    fontSize: 18,
  },
});

export default Favorites;
