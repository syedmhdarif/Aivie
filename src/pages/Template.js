/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Template extends Component {
  render() {
    return (
        <View>
            <Text>
                HAIIII
            </Text>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',

    width: '100%',
    height: '100%',
  },

  matric: {
    paddingTop: 10,
    color: '#ffffff',
    fontSize: 18,
  },
  logoposition: {
    position: 'absolute',
    width: '52%',
    height: '22%',
    alignSelf: 'center',
    zIndex: 2,
    marginTop: '5%',
  },
});
