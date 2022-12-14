import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import {ActionButton} from '../components/ActionButton';
import {Route} from '../common/Enums';
import {CustomTextInput} from '../components/CustomTextInput';
import {LoginButtonGroup} from '../components/LoginButtonGroup';
import {IconEye} from '../assets/Icons/IconEye';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPW, setShowPW] = React.useState(false);

  const showPassword = () => {
    setShowPW(!showPW);
  };

  const storeData = async () => {
    try {
      let userData = {
        fullName: fullName,
        email: email,
        password: password,
      };
      const userObject = JSON.stringify(userData);
      await AsyncStorage.setItem('USER', userObject);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomTextInput
        title={'Full Name'}
        onChangeText={setFullName}
        value={fullName}
      />

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
        title={'Store Data'}
        onPressBtn={() => storeData()}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
      />

      <ActionButton
        title={'Get Data'}
        onPressBtn={() => storeData()}
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

export default Signup;
