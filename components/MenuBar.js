/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function MenuBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.menuBarContainer}>
      <View style={styles.menuOption}>
        <Icon name="home" size={40} color="white" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={styles.menuOption}>
        <Icon name="heart" size={40} color="white" onPress={() => navigation.navigate('FavoritedPostsScreen')} />
      </View>
      <View style={styles.menuOption}>
        <Icon name="user" size={40} color="white" />
      </View>
      <View style={styles.menuOption}>
        <Icon name="gear" size={40} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuBarContainer: {
    height: 100,
    width: 440,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'blue',
  },
  menuOption: {
    height: 100,
    width: 110,
    borderColor: 'black',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
