/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Logo from '../component/Logo';

export default class Trim extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          <View>
            <View style={styles.header}>
              <TouchableOpacity style={styles.profile}>
                <Image
                  source={require('../images/profile.jpg')}
                  style={styles.profileimage}
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <Text
                style={{
                  marginTop: '5%',
                  marginLeft: '18%',
                  position: 'absolute',
                }}>
                Syed Arif
              </Text>

              <TouchableOpacity style={styles.setting}>
                <Image
                  source={require('../images/setting2.png')}
                  style={{width: '80%', height: '80%'}}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
            <View style={{height: 960}}>
              <View style={{height: 710}}>
                <Image
                  source={require('../images/Aivie.png')}
                  style={styles.logoposition}
                  resizeMode="stretch"
                />

                <TouchableOpacity>
                  <LinearGradient
                    colors={['#FFD200', '#F7971E']}
                    style={styles.newproject}>
                    <Image
                      source={require('../images/newproject2.png')}
                      style={{width: '10%', height: '27%', marginRight: '3%'}}
                      resizeMode="stretch"
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                        fontFamily: 'poppins-semi-bold',
                      }}>
                      New Project
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  position: 'absolute',
                  marginTop: '90%',
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginLeft: '6%',
                  }}>
                  <Text style={styles.Draft}>Draft</Text>

                  <TouchableOpacity style={{marginLeft: '32%'}}>
                    <Text style={styles.seeAll}>See all</Text>
                  </TouchableOpacity>
                </View>

                {/*demo project 1*/}
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: '5%',
                    alignItems: 'center',
                    marginTop: '3%',
                  }}>
                  <View style={styles.DraftBox}></View>

                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      marginLeft: '2%',
                    }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      Demo Project 3
                    </Text>
                    <Text>04:19</Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      width: '20%',
                      height: '31%',
                      backgroundColor: '#F7971E',
                      borderRadius: 15,
                      marginLeft: '13%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 14}}>Edit</Text>
                  </TouchableOpacity>
                </View>

                {/*demo project 2*/}
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: '5%',
                    alignItems: 'center',
                    marginTop: '3%',
                  }}>
                  <View style={styles.DraftBox}></View>

                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      marginLeft: '2%',
                    }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      Demo Project 2
                    </Text>
                    <Text>04:19</Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      width: '20%',
                      height: '30%',
                      backgroundColor: '#F7971E',
                      borderRadius: 15,
                      marginLeft: '13%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 14}}>Edit</Text>
                  </TouchableOpacity>
                </View>

                {/*demo project 3*/}
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: '5%',
                    alignItems: 'center',
                    marginTop: '3%',
                  }}>
                  <View style={styles.DraftBox}></View>

                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      marginLeft: '2%',
                    }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      Demo Project 3
                    </Text>
                    <Text>04:19</Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      width: '20%',
                      height: '30%',
                      backgroundColor: '#F7971E',
                      borderRadius: 15,
                      marginLeft: '13%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 14}}>Edit</Text>
                  </TouchableOpacity>
                </View>

                {/*demo project 4*/}
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: '5%',
                    alignItems: 'center',
                    marginTop: '3%',
                  }}>
                  <View style={styles.DraftBox}></View>

                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      marginLeft: '2%',
                    }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      Demo Project 4
                    </Text>
                    <Text>04:19</Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      width: '20%',
                      height: '30%',
                      backgroundColor: '#F7971E',
                      borderRadius: 15,
                      marginLeft: '13%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 14}}>Edit</Text>
                  </TouchableOpacity>
                </View>

                {/*demo project 5*/}
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: '5%',
                    alignItems: 'center',
                    marginTop: '3%',
                  }}>
                  <View style={styles.DraftBox}></View>

                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      marginLeft: '2%',
                    }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      Demo Project 5
                    </Text>
                    <Text>04:19</Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      width: '20%',
                      height: '30%',
                      backgroundColor: '#F7971E',
                      borderRadius: 15,
                      marginLeft: '13%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 14}}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
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
  DraftBox: {
    width: '29%',
    borderRadius: 10,
    height: 90,
    backgroundColor: '#F7971E',
  },
  Draft: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: '3%',
    marginLeft: '0%',
  },
  seeAll: {
    color: '#F7971E',
    fontSize: 16,
    fontWeight: 'bold',

    marginTop: '4%',
    marginLeft: '63%',
  },
  profileimage: {
    borderRadius: 300,

    width: 40,
    height: 40,
  },
  setting: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '72%',

    marginTop: 10,
    width: 40,
    height: 40,
  },
  header: {
    flexDirection: 'row',
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    borderRadius: 100,
    marginTop: 10,
    width: 40,
    height: 40,
    borderWidth: 2,
  },
  logoposition: {
    width: wp('62%'),
    height: '23%',
    alignSelf: 'center',

    marginTop: '10%',
  },
  newproject: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    height: '43%',
    borderRadius: 15,
    flexDirection: 'row',
    // backgroundColor:'#F7971E'
  },
});
