/* eslint-disable react/style-prop-object */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import FavoritedPostsScreen from './screens/FavoritedPostsScreen';
import ChangeFilterScreen from './screens/ChangeFilterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
        <Stack.Screen name="FavoritedPostsScreen" component={FavoritedPostsScreen} />
        <Stack.Screen name="ChangeFilterScreen" component={ChangeFilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
