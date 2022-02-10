/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
/* eslint-disable react/jsx-filename-extension */
import {
  StyleSheet, Text, View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuBar from '../components/MenuBar';

export default function NewPostScreen({ navigation }) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Icon name="arrow-left" size={30} color="blue" onPress={() => navigation.navigate('Home')} />
        <Text style={styles.titleText}>SnackChat</Text>
        <Icon name="plus" size={30} color="blue" />
      </View>
      <View style={styles.addPostContainer}>
        <Text style={styles.addPostTitle}>Add a new post:</Text>
        <View style={styles.formSectionTitle}>
          <Text>Type your title</Text>
        </View>
        <View style={styles.formSectionRestrictions}>
          <Text>Add dietary restriction filters</Text>
        </View>
        <View style={styles.formSectionBody}>
          <Text>Add body</Text>
        </View>
        <View style={styles.bottomButtons}>
          <Icon name="trash" size={30} color="blue" onPress={() => navigation.navigate('Home')} />
          <Icon name="check" size={30} color="blue" onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
      <View style={styles.menuBarContainer}>
        <MenuBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
  },
  addPostTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  formSectionTitle: {
    borderColor: 'black',
    borderWidth: 0.5,
    height: 40,
  },
  formSectionRestrictions: {
    borderColor: 'black',
    borderWidth: 0.5,
    height: 60,
  },
  formSectionBody: {
    borderColor: 'black',
    borderWidth: 0.5,
    height: 450,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 80,
  },
  menuBarContainer: {
    position: 'absolute',
    top: 800,
    left: -20,
  },
});
