import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Covstats} from '../../assets';
import {styles} from './login-styles';

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
      <TouchableOpacity style={styles.signInButton} onPress={handleSubmit}>
        <Text style={styles.buttonLabel}>{buttonLabel}</Text>
      </TouchableOpacity>
      {/* </KeyboardAvoidingView> */}
      {/* </ScrollView> */}
    </View>
  );
};

export default Login;
