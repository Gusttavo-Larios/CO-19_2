import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

import colors from '../styles/colors'
import fonts from '../styles/fonts';

import warning from '../assets/image-warning.png'

import { Ionicons } from '@expo/vector-icons';

export default function Warning() {
  // const [isVisible, setIsVisible] = useState(false)

  // function close() {
  //   setIsVisible(false)
  // }

  // useEffect(() => {
  //   setIsVisible(visible)
  // }, [visible])

  return (
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.warningImage} source={warning} />

      <Text style={styles.alert}>
        Insira um valor válido
      </Text>

      <Text style={styles.information}>
        Clique em qualquer lugar da tela para fechar o alerta.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textButton,
    width: '90%',
    height: 300,
    borderRadius: 8,
    paddingLeft: '8%',
    paddingRight: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 19,
    top: 190,
    elevation: 10,
  },

  warningImage: {
    height: Dimensions.get('window').width * 0.45,
  },

  alert: {
    fontFamily: fonts.acme,
    color: colors.error,
    fontSize: 24,
    marginTop: 20
  },

  information: {
    color: colors.error,
    fontSize: 10,
    textAlign: 'center'
  }
})