/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Score from './Score';

const Post = (props) => {
  return (
    <View style={styles.postContainer}>
      <Text>{props.tag}</Text>
      <Text>{props.title}</Text>
      <Icon name="heart" size={20} color={props.heartColor} />
      <View>
        <Score score={props.score} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Post;
