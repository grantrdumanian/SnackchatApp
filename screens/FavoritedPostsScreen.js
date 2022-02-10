/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
/* eslint-disable react/jsx-filename-extension */
import {
  ScrollView,
  StyleSheet, Text, View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from '../components/Post';
import MenuBar from '../components/MenuBar';

export default function FavoritedPostsScreen({ navigation }) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Icon name="arrow-left" size={30} color="blue" onPress={() => navigation.navigate('Home')} />
        <Text style={styles.titleText}>SnackChat</Text>
        <Icon name="plus" size={30} color="blue" onPress={() => navigation.navigate('NewPostScreen')} />
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitleText}>Favorited Posts:</Text>
      </View>
      <ScrollView style={styles.postsContainer}>
        <Post title="Gluten-free pasta..." score="48" tag="G" heartColor="blue" />
        <Post title="Veggie station line /:" score="21" tag="V" heartColor="blue" />
        <Post title="Has anyone else tried this?" score="109" tag="G" heartColor="blue" />
        <Post title="Collis during lunch...?" score="42" tag="G" heartColor="blue" />
      </ScrollView>

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
  postsContainer: {
    flexDirection: 'column',
  },
  filterContainer: {
    marginTop: 20,
    // marginBottom: 20,
    // marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 30,
  },
  filterTitleText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 20,
  },
  filterText: {
    fontSize: 20,
  },
  titleText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
  },
  menuBarContainer: {
    position: 'absolute',
    top: 800,
    left: -20,
  },
});
