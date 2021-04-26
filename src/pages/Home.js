import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, Keyboard } from 'react-native';

import colors from '../styles/colors'

import logo from '../assets/header.png'
import { FontAwesome } from '@expo/vector-icons';

import Panel from '../components/Panel'
import Warning from '../components/Warning'
import Error from '../components/Error'

import api from '../services/api'

export default function Home() {
  const [uf, setUf] = useState('')
  const [isVisibleWarning, setIsVisibleWarning] = useState(false)
  const [isVisibleError, setIsVisibleError] = useState(false)
  const [isVisiblePanel, setIsVisiblePanel] = useState(false)
  const [data, setData] = useState(null)

  function close() {
    setIsVisibleError(false)
    setIsVisibleWarning(false)
  }

  async function searchUf() {
    Keyboard.dismiss()

    try {
      const response = await api.get(`/${uf}`)

      if (response.status !== 200) {
        setIsVisibleError(true)
        setIsVisiblePanel(false)
        return
      }

      if (response.data.uid === undefined) {
        setIsVisibleWarning(true)
        return
      }

      setData(response.data)
      setUf('')

    } catch (error) {
      setIsVisibleError(true)
    }

    setIsVisiblePanel(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image resizeMode='contain' style={styles.imageLogo} source={logo} />

      <View style={styles.search}>
        <TextInput
          placeholder='Ex: SP' placeholderTextColor={colors.icons}
          style={styles.input} onChangeText={(value) => setUf(value)} value={uf} />

        {/* placeholder='Ex: SP' placeholderTextColor={colors.icons}  */}


        <TouchableOpacity style={styles.searchButton} onPress={searchUf}>
          <FontAwesome name="search" size={24} color={colors.textButton} />
        </TouchableOpacity>
      </View>

      {isVisiblePanel && <Panel uf={data} />}

      {isVisibleWarning && (
        <>
          <View onStartShouldSetResponder={close} style={styles.overlay} />
          <Warning />
        </>
      )
      }

      {isVisibleError && (
        <>
          <View onStartShouldSetResponder={close} style={styles.overlay} />
          <Error />
        </>
      )
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  imageLogo: {
    height: Dimensions.get('window').width * 0.2,
    marginTop: 40
  },

  search: {
    width: '90%',
    backgroundColor: colors.containerBackground,
    borderRadius: 8,
    flexDirection: 'row',
    height: 41,
    paddingStart: 20,
    justifyContent: 'space-between',
    marginTop: 30
  },

  input: {
    width: '80%',
    height: '100%',
    fontSize: 18,
    color: colors.icons
  },

  searchButton: {
    width: '20%',
    height: '100%',
    backgroundColor: colors.searchButton,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },

  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
    backgroundColor: '#f0f8ff',
    opacity: 0.5
  }
})