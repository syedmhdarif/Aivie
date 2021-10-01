/* eslint-disable prettier/prettier */
import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const Splashscreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#ffffff' barStyle='dark-content'/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                // duration="1500"
            source={require('../images/Aivie.png')}
            style={styles.logo}
            resizeMode="stretch"
            /> 
            {/* <Text style={{fontSize:40, fontWeight:'bold', color:'#F76B1C', marginBottom:30}}>Aivie</Text> */}

                <TouchableOpacity onPress={()=>navigation.navigate('LoginPage')}>
                    <LinearGradient
                        colors={['#FFA737', '#FF8E00']}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#fff"
                            size={20}
                        />
                    </LinearGradient>
                </TouchableOpacity>


        </View>
        
            <View >
                
            </View>

        </View>
        
    );
};

export default Splashscreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ffffff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      bottom : '0%',
      top: '5%'
  },
  footer: {
      flex: 1,
      backgroundColor: '#009387',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: '70%',
      height: '26%'
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: '70%',
      height: '25%',
      
      paddingHorizontal: 55,
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      
      textAlign:'center',
      color: 'white',
      fontWeight: 'bold'
  },
  getstarted : {
      alignSelf:'center',
      marginBottom:400
     
  }
});