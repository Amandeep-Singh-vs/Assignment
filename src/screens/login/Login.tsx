import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootNativeStackParamsList} from '../../types/navigation-types';
import {useNavigation} from '@react-navigation/native';

import {Covstats} from '../../assets';

import {styles} from './login-styles';

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>();
  const [number, setNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [numberError, setNumberError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const buttonLabel =
    number.trim() && password.trim() ? 'Submit' : 'Sign In with Google';
  const handleSubmit = () => {
    const numberRegexExpression = new RegExp(/^(?:\+)?[7-9][0-9]{9}$/);
    if (!numberRegexExpression.test(number)) {
      setNumberError(true);
      return;
    }
    const passwordRegexExpression = /^(?=.*[A-Za-z])(?=.*[^A-Za-z0-9]).+$/;
    if (!passwordRegexExpression.test(password)) {
      setPasswordError(true);
      return;
    }
    if (numberError || passwordError) return;
    Alert.alert('Submitted!!');
    setNumber('');
    setPassword('');
    navigation.navigate('TabNavigator');
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '255056555371-d2b7tvtte9rhvauosdgko5lp6ai51ndk.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);
  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const jsonValue = JSON.stringify(idToken);
      await AsyncStorage.setItem('token', jsonValue);
      Alert.alert('Login Successful');
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
        <ScrollView>
          <View style={styles.subContainer}>
            <Covstats />
            <Text style={styles.title}>COVSTATS</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.inputLabel}>Mobile Number</Text>
            <TextInput
              keyboardType="phone-pad"
              style={styles.inputArea}
              placeholder="Enter your mobile number"
              value={number}
              onChangeText={setNumber}
            />
            <Text style={styles.error}>
              {numberError ? 'Invalid mobile number' : ' '}
            </Text>
          </View>
          <View style={styles.passwordContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry
              style={styles.inputArea}
              placeholder="Enter your mobile number"
              value={password}
              onChangeText={setPassword}
            />
            <Text style={styles.error}>
              {passwordError ? 'Invalid password' : ' '}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={number && password ? handleSubmit : onGoogleButtonPress}>
            <Text style={styles.buttonLabel}>{buttonLabel}</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
