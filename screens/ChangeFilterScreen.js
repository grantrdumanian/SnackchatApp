/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
/* eslint-disable react/jsx-filename-extension */
import {
  StyleSheet, Text, View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSelect from 'react-native-multiple-select';
import MenuBar from '../components/MenuBar';

const items = [{
  id: '92iijs7yta',
  name: 'Gluten-free',
}, {
  id: 'a0s0a8ssbsd',
  name: 'Vegetarian',
}, {
  id: '16hbajsabsd',
  name: 'Vegan',
}, {
  id: 'nahs75a5sg',
  name: 'Celiac',
}, {
  id: '667atsas',
  name: 'Sodium Intolerant',
}, {
  id: 'hsyasajs',
  name: 'Lactose Intolerant',
},
];

export default function ChangeFilterScreen({ navigation }) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Icon name="arrow-left" size={30} color="blue" onPress={() => navigation.navigate('Home')} />
        <Text style={styles.titleText}>SnackChat</Text>
        <Icon name="plus" size={30} color="blue" />
      </View>
      <View style={styles.addPostContainer}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
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
