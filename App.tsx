// libraries
import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

// components
import Navbar from './components/Navbar';
import Notifications from './components/Notifications';
import ActiveCards from './components/ActiveCards';

// common constant
import { Notification,dActive } from './constants/screenChanger-constants';

/** App: {This function shows Navbar and the screens according to state value.} */
function App(): React.JSX.Element {
  const [screen,setScreen] = useState(true);
  return (
    <View style={styles.mainContainer}>
      {/* <StatusBar backgroundColor='white' barStyle={'dark-content'} /> */}
      <Navbar title={`${screen?Notification:dActive}`}/>
      {
        screen ? <Notifications/> : <ActiveCards/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'white'
  }
});

export default App;