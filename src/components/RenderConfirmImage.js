import React from 'react'
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native'
import colors from '../../config/colors/colors'
import * as Animatable from 'react-native-animatable'
const width = Dimensions.get('screen').width
const menu_container_width = width - 60

function RenderConfirmImage(props) {
  return (
    <Animatable.View style={styles.cart_empty_container} animation={'pulse'} duration={800}>
      <Image resizeMode="contain" source={require('../assets/confirmed.png')} style={styles.image} />
      <Text style={styles.textSuggest}>{props.title_message}</Text>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: menu_container_width,
    height: 340,
    borderRadius: 16,
  },
  title_menu: {
    paddingBottom: 25,
    paddingVertical: 8,
    fontSize: 18,
    textAlign: 'center',
    color: colors.blackGrey,
    fontWeight: '700',
  },
  textSuggest: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 16,
    color: colors.backgroundButtonActive,
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  cart_empty_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: menu_container_width,
    height: 300,
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingBottom: 100,
    marginBottom: 20,
    marginTop: 40,
  },
})

export default RenderConfirmImage
