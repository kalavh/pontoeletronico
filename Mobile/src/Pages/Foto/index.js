import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HeaderBack from '../../components/HeaderBack';
import styles from './styles';
import {RNCamera} from 'react-native-camera';

class Foto extends PureComponent {
  render() {
    return (
      <>
      <HeaderBack/>
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permissao de camera',
              message: 'Clique em ACEITAR para Aceitar o acesso a camera',
              buttonPositive: 'Aceitar',
              buttonNegative: ' ',
            }}
          />
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> Capturar </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

export default Foto;
