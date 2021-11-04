/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local 
 */
import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { MusicNavigator } from './navigation/AudioNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
// import { LoadingScreen } from './screens/LoadingScreen'
// import { SongDetailScreen } from './screens/SongDetailScreen'
// import { SongsScreen } from './screens/SongsScreen';

const AudioStack = createStackNavigator();
// const AudioDrawer = createDrawerNavigator();

const LoadingScreen = (props) => {
    return (
        <View style={styles.container}>
            <Ionicons name='heart' size={100} />
            <Text>Audio School</Text>
            <Button title='Go to Music List' onPress={() => {
                props.navigation.navigate('SongList')
            }} />
        </View>
    )
}




const SongDetailScreen = (props) => {
    return (
        <View>
            <Text>SongDetailScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})

const App = () => {
  
  return (
     <NavigationContainer>
          <AudioStack.Navigator>
              <AudioStack.Screen name='Loading' component={LoadingScreen} options={navData => {
                  return {
                      headerTitle: null
                  }
              } } />
              <AudioStack.Screen name='SongList' component={SongDetailScreen} />
              {/*<AudioStack.Screen name='SingleSong' component={SongsScreen*/} 
          </AudioStack.Navigator>
    </NavigationContainer>
  )
};





export default App;
