import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Covstats} from '../../assets';
import {styles} from './login-styles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [number, setNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [numberError, setNumberError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const buttonLabel =
    number.trim() && password.trim() ? 'Submit' : 'Sign In with Google';
  const handleSubmit = () => {
    const numberRegexExpression = new RegExp(/^(?:\+)?[6-9][0-9]{9}$/);
    if (!numberRegexExpression.test(number)) {
      setNumberError(true);
      return;
    }
    const passwordRegexExpression = new RegExp(
      '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$',
    );
    if (!passwordRegexExpression.test(password)) {
      setPasswordError(true);
      return;
    }
    if (numberError || passwordError) return;
    Alert.alert('Submitted!!');
    setNumber('');
    setPassword('');
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
      console.log(idToken);
      Alert.alert('Login Successful');
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.subContainer}>
        <Covstats />
        <Text style={styles.title}>COVSTATS</Text>
      </View>
      {/* <KeyboardAvoidingView
          style={styles.container}
          keyboardVerticalOffset={20}
          behavior="position"> */}
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
        onPress={onGoogleButtonPress}>
        <Text style={styles.buttonLabel}>{buttonLabel}</Text>
      </TouchableOpacity>
      {/* </KeyboardAvoidingView> */}
      {/* </ScrollView> */}
    </View>
  );
};

export default Login;
