import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

import colors from '../styles/colors'
import fonts from '../styles/fonts';

import error from '../assets/image-error.png'

export default function Warning() {

  return (
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.errorImage} source={error} />

      <Text style={styles.alert}>
        Ops! Tente mais tarde...
      </Text>

      <Text style={styles.information}>
        Clique em qualquer lugar da tela para fechar o erro.
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

  errorImage: {
    height: Dimensions.get('window').width * 0.38,
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