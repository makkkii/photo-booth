import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


const Button = props => (
  <TouchableOpacity
    style={[styles.container, props.styles]}
    onPress={props.onPress}>
    <View>
      <Text style={styles.text}>{props.textButton}</Text>
    </View>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#0984e3',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    color: 'white'
  }
});

export default Button;