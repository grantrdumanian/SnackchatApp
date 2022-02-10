/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Score = (props) => {
  return (
    <View styles={styles.scoreContainer}>
      <Icon name="arrow-up" size={20} color="black" />
      <Text>{props.score}</Text>
      <Icon name="arrow-down" size={20} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default Score;
