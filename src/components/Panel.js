import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import colors from '../styles/colors'
import fonts from '../styles/fonts';

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Panel({ uf }) {
  const [height] = useState(new Animated.Value(250))
  const [opacity] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.parallel([
      Animated.spring(height, {
        toValue: 0,
        duration: 5,
        bounciness: 25,
        useNativeDriver: true
      }),

      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start()
  }, [])

  function numberFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,')
  }

  return (
    <Animated.View style={[styles.container, {
      opacity: opacity,
      transform: [
        {
          translateY: height
        }
      ]
    }]}>

      <Text style={styles.uf}>
        {uf.state}
      </Text>

      <View style={styles.datas}>

        <View style={styles.textData}>
          <MaterialIcons name="people-alt" size={36} color={colors.icons} />
          <Text style={styles.text}>
            Infectados:
            </Text>
          <Text style={styles.value}>
            {numberFormat(uf.cases)}
          </Text>
        </View>

        <View style={styles.textData}>
          <MaterialCommunityIcons name="help" size={32} color={colors.icons} />

          <Text style={styles.text}>
            Casos supeitos:
            </Text>
          <Text style={styles.value}>
            {numberFormat(uf.suspects)}
          </Text>
        </View>

        <View style={styles.textData}>
          <MaterialCommunityIcons name="skull" size={36} color={colors.icons} />

          <Text style={styles.text}>
            Mortes:
            </Text>
          <Text style={styles.value}>
            {numberFormat(uf.deaths)}
          </Text>
        </View>

      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.containerBackground,
    width: '90%',
    height: 300,
    borderRadius: 8,
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingTop: 20,
    marginTop: 30,
    alignItems: 'center'
  },

  uf: {
    color: colors.searchButton,
    fontSize: 40,
    fontFamily: fonts.acme,
    textAlign: 'center'
  },

  datas: {
    alignItems: 'flex-start',
    marginTop: 20
  },

  textData: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8

  },

  text: {
    fontSize: 20,
    color: colors.text,
    marginRight: 5,
    marginLeft: 4
  },

  value: {
    color: colors.text,
    fontFamily: fonts.acme,
    fontSize: 20,
  }
})