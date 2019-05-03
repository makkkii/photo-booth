import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onCancel} style={{ margin: 15 }}>
        <View>
          <Text>Cancel</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ color: 'blue' }}>Next</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginTop: 20
  }
});

export default Header;