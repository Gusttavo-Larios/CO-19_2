import React from 'react';
import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Acme_400Regular } from '@expo-google-fonts/acme';

import Routes from './src/routes'

export default function App() {

  //carregar fonte
  let [fontsLoaded] = useFonts(
    { Acme_400Regular },
  );

  //verificar se a fonte carregou
  if (!fontsLoaded) {
    return (
      <AppLoading />//segurando a splash enquanto a fonte carrega
    )
  }

  return (
    <>
      <StatusBar hidden />
      <Routes />
    </>
  );
}

