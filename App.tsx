import React, { useState } from 'react'
import { StatusBar, View } from 'react-native'

import DActiveChallenges from './src/screens/d-active-challenges/DActiveChallenges'
import Notifications from './src/screens/notifications-list/NotificationsList'
import TopNav from './src/components/top-app-bar/TopAppBar'

import { Notification, dActive } from './src/constants/screenChanger-constants'

import { styles } from './src/theme/styles'
import { COLORS } from './src/theme/color'

/** App: {This function shows Navbar and the screens according to state value.} */
function App(): React.JSX.Element {
  const [screen, setScreen] = useState(false)
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.neutralWhite} barStyle={'dark-content'} />
      <TopNav title={`${screen ? Notification : dActive}`} />
      {screen ? <Notifications /> : <DActiveChallenges />}
    </View>
  )
}

export default App
