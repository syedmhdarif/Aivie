/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import auth from '@react-native-firebase/auth';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput, useTheme} from 'react-native-paper';
import Logo from '../component/Logo';

function LoginPage({navigation}) {
  const [focus, setFocus] = useState(false);
  const [focuss, setFocuss] = useState(false);
  const selected = props => {
    setFocus(true);
  };
  const handleBlur = props => {
    setFocus(false);
  };

  const Pselected = props => {
    setFocuss(true);
  };
  const PhandleBlur = props => {
    setFocuss(false);
  };

  const {colors} = useTheme();
  console.log(focus);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Logo />

      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.profileview,
          {
            backgroundColor: '#ffffff',
          },
        ]}>
        <View style={{marginTop: '25%'}}>
          <View
            style={{
              alignSelf: 'center',
              width: wp('80%'),
              height: hp('6%'),
              backgroundColor: 'white',
              borderRadius: 35,
              borderTopLeftRadius: 35,
              borderTopRightRadius: 35,
              borderWidth: 0.5,
              paddingHorizontal: 10,
              marginVertical: 8,
              justifyContent: 'center',
            }}>
            <Text style={focus ? styles.test : styles.test1}>
              Email/Username
            </Text>
            <TextInput
              style={{height: wp('10%'), backgroundColor: 'transparent'}}
              underlineColor="transparent"
              onFocus={selected}
              onBlur={handleBlur}
            />
          </View>

          <View
            style={{
              alignSelf: 'center',
              width: wp('80%'),
              height: hp('6%'),
              backgroundColor: 'white',
              borderRadius: 35,
              borderTopLeftRadius: 35,
              borderTopRightRadius: 35,
              borderWidth: 0.5,
              paddingHorizontal: 10,
              marginVertical: 8,
              justifyContent: 'center',
              marginTop: '5%',
            }}>
            <Text style={focuss ? styles.test : styles.test1}>Password</Text>
            <TextInput
              style={{height: wp('10%'), backgroundColor: 'transparent'}}
              underlineColor="transparent"
              onFocus={Pselected}
              onBlur={PhandleBlur}
            />
          </View>

          {/* <TextInput style={styles.inputBox} 
                placeholderTextColor="#595959"
                autoCorrect={false}
                underlineColor='transparent'
               
                
                placeholder="Password"
                color='black'
            
             /> */}
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Bottomtab')} style={styles.buttonlogin} >
          <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{borderBottomWidth: 0.4, width: '36%'}} />
          <Text style={{paddingHorizontal: 10, textAlign: 'center'}}>Or</Text>
          <View style={{borderBottomWidth: 0.4, width: '36%'}} />
        </View>

        {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black', width:10}} />
            <View>
                <Text style={{width: 50, textAlign: 'center'}}>Hello</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View> */}

        <TouchableOpacity style={styles.buttongoogle}>
          <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>
            Continue with Google Account
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#F7971E',
                marginHorizontal: 10,
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    color: '#F7971E',
    position: 'absolute',
    marginLeft: 20,
    top: -wp('4.5%'),
    fontSize: 12,
    fontWeight: 'bold',
  },
  test1: {
    color: '#595959',
    position: 'absolute',
    marginLeft: 20,
    top: wp('3%'),
    fontSize: 12,
  },
  logoposition: {
    position: 'absolute',
    width: '52%',
    height: '22%',
    alignSelf: 'center',

    marginTop: '5%',
  },

  buttongoogle: {
    marginVertical: 10,

    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('6%'),
    backgroundColor: '#EB6C6C',
    width: wp('80%'),
    borderRadius: 35,
  },
  buttonlogin: {
    marginVertical: 10,

    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('6%'),
    backgroundColor: '#F7971E',
    width: wp('80%'),
    borderRadius: 35,
  },
  backprofile: {
    height: hp('30%'),
    width: wp('80%'),

    backgroundColor: 'white',
    padding: 150,
    paddingHorizontal: 170,
    marginTop: 300,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  },
  backprofile2: {
    alignItems: 'center',

    padding: 200,

    marginTop: '20%',
    elevation: 4,
    height: hp('100%'),
  },
  profileview: {
    height: hp('100%'),
    width: wp('96%'),
    alignSelf: 'center',
    
    borderTopStartRadius: 35,
    borderTopRightRadius: 35,

    shadowColor: 'black',
    shadowOffset: {
      width: 40,
      height: 5,
    },
    shadowOpacity: 0.67,
    shadowRadius: 6,
    elevation: 12,
    marginTop: '45%',
  },
  //   focused : {
  //     position: 'absolute',
  //     left: 0,
  //     top: 18,
  //     fontSize:20,
  //     color: '#aaa',
  //   },
  focused: {
    color: '#000',
    top: 0,
    alignSelf: 'center',
    width: wp('80%'),
    height: hp('6%'),
    backgroundColor: 'white',
    borderRadius: 35,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    fontSize: 8,
    marginVertical: 8,
  },
  inputBox: {
    color: '#000',
    top: 0,
    alignSelf: 'center',
    width: wp('80%'),
    height: hp('6%'),
    backgroundColor: 'white',
    borderRadius: 35,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    fontSize: 12,
    marginVertical: 8,
  },
});
export default LoginPage;
