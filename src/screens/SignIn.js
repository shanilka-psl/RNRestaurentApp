import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import {ActionButton} from '../components/ActionButton';
import {Route} from '../common/Enums';
import {CustomTextInput} from '../components/CustomTextInput';
import {LoginButtonGroup} from '../components/LoginButtonGroup';
import {IconEye} from '../assets/Icons/IconEye';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = ({navigation}) => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPW, setShowPW] = React.useState(false);

  const showPassword = () => {
    setShowPW(!showPW);
  };

  const getData = async () => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('USER'));
      if (value?.email === email && value?.password === password) {
        navigation.navigate(Route.TAB_HOME);
      } else {
        console.log('Invalid Credentials');
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomTextInput title={'E-mail'} onChangeText={setEmail} value={email} />

      <CustomTextInput
        title={'Password'}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={!showPW}
        onShowPasswordPress={showPassword}
        icon={
          <IconEye
            fill={
              showPW ? CommonStyles.colors.primary : CommonStyles.colors.grey1
            }
          />
        }
      />

      <ActionButton
        title={'Sign In'}
        onPressBtn={() => getData()}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
      />

      <LoginButtonGroup />
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
    marginTop: 20,
  },

  btnText: {
    fontFamily: CommonStyles.fontFamily.medium,
    color: CommonStyles.colors.white,
    fontSize: 15,
  },
});

export default Signin;
