

// 'use strict';
// import React, { PureComponent } from 'react';
// import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { RNCamera } from 'react-native-camera';

// const PendingView = () => (
//   <View
//     style={{
//       flex: 1,
//       backgroundColor: 'lightgreen',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}
//   >
//     <Text>Waiting</Text>
//   </View>
// );

// export default class Camera extends PureComponent {
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           style={styles.preview}
//           type={RNCamera.Constants.Type.back}
//           flashMode={RNCamera.Constants.FlashMode.on}
//           androidCameraPermissionOptions={{
//             title: 'Permission to use camera',
//             message: 'We need your permission to use your camera',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           androidRecordAudioPermissionOptions={{
//             title: 'Permission to use audio recording',
//             message: 'We need your permission to use your audio',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//         >
//           {({ camera, status, recordAudioPermissionStatus }) => {
//             if (status !== 'READY') return <PendingView />;
//             return (
//               <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//                 <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
//                   <Text style={{ fontSize: 14 }}> SNAP </Text>
//                 </TouchableOpacity>
//               </View>
//             );
//           }}
//         </RNCamera>
//       </View>
//     );
//   }

//   takePicture = async function(camera) {
//     const options = { quality: 0.5, base64: true };
//     const data = await camera.takePictureAsync(options);
//     //  eslint-disable-next-line
//     console.log(data.uri);
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function Camerapage() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});


// import React, {useRef, useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   Pressable,
//   Modal,
//   Text,
//   ActivityIndicator,
// } from 'react-native';

// import {
//   getModel,
//   convertBase64ToTensor,
//   startPrediction,
// } from '../helpers/tensor-helper';
// import {cropPicture} from '../helpers/image-helper';

// import {Camera} from 'expo-camera';

// const RESULT_MAPPING = ['Woman', 'Man', 'Cat'];

// const Camerapage = () => {
//   const cameraRef = useRef();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [presentedShape, setPresentedShape] = useState('');

//   const handleImageCapture = async () => {
//     setIsProcessing(true);
//     const imageData = await cameraRef.current.takePictureAsync({
//       base64: true,
//     });
//     processImagePrediction(imageData);
//   };

//   const processImagePrediction = async (base64Image) => {
//     const croppedData = await cropPicture(base64Image, 300);
//     const model = await getModel();
//     const tensor = await convertBase64ToTensor(croppedData.base64);

//     const prediction = await startPrediction(model, tensor);

//     const highestPrediction = prediction.indexOf(
//       Math.max.apply(null, prediction),
//     );
//     setPresentedShape(RESULT_MAPPING[highestPrediction]);
//   };

//   return (
//     <View style={styles.container}>
//       <Modal visible={isProcessing} transparent={true} animationType="slide">
//         <View style={styles.modal}>
//           <View style={styles.modalContent}>
//             <Text>Your current shape is {presentedShape}</Text>
//             {presentedShape === '' && <ActivityIndicator size="large" />}
//             <Pressable
//               style={styles.dismissButton}
//               onPress={() => {
//                 setPresentedShape('');
//                 setIsProcessing(false);
//               }}>
//               <Text>Dismiss</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>

//       <Camera
//         ref={cameraRef}
//         style={styles.camera}
//         type={Camera.Constants.Type.back}
//         autoFocus={true}
//         whiteBalance={Camera.Constants.WhiteBalance.auto}></Camera>
//       <Pressable
//         onPress={() => handleImageCapture()}
//         style={styles.captureButton}></Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   camera: {
//     width: '100%',
//     height: '100%',
//   },
//   captureButton: {
//     position: 'absolute',
//     left: Dimensions.get('screen').width / 2 - 50,
//     bottom: 40,
//     width: 100,
//     zIndex: 100,
//     height: 100,
//     backgroundColor: 'white',
//     borderRadius: 50,
//   },
//   modal: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalContent: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 300,
//     height: 300,
//     borderRadius: 24,
//     backgroundColor: 'gray',
//   },
//   dismissButton: {
//     width: 150,
//     height: 50,
//     marginTop: 60,
//     borderRadius: 24,
//     color: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'red',
//   },
// });

// export default Camerapage;