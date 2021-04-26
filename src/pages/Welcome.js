import React from 'react';

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Touchable, Dimensions } from 'react-native';

import logo from '../assets/header.png'
import welcomeLogo from '../assets/image-welcome.png'
import { useNavigation } from '@react-navigation/core';

export default function pages() {
  const navigation = useNavigation()

  function next() {
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>

      <Image resizeMode="contain" source={logo} style={styles.imageLogo} />

      <Image resizeMode="contain" source={welcomeLogo} style={styles.imageWelcome} />

      <Text style={styles.welcomeMessage}>Seja bem vindo(a)!</Text>

      <TouchableOpacity style={styles.button} onPress={next}>
        <Text
          style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  imageLogo: {
    height: Dimensions.get('window').width * 0.2,
    marginTop: Dimensions.get('window').width * 0.28
  },

  imageWelcome: {
    height: Dimensions.get('window').width * 0.65,
    marginTop: 25
  },

  welcomeMessage: {
    fontSize: 20,
    color: colors.buttonBackground,
    fontFamily: fonts.alef,
    marginTop: 30
  },

  button: {
    width: '80%',
    backgroundColor: colors.buttonBackground,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  textButton: {
    fontSize: 22,
    color: colors.textButton,
    fontFamily: fonts.assistant
  }
});