import React from 'react'
import { StyleSheet, Image, Text, Dimensions } from 'react-native'
import colors from '../../config/colors/colors'
import * as Animatable from 'react-native-animatable'
const width = Dimensions.get('screen').width
const menu_container_width = width - 40

function ConfirmedOrder(props) {
  return (
    <Animatable.View style={styles.cart_empty_container} animation={'pulse'} duration={800}>
      {/* <Text style={styles.title_menu}>{props.title_message}</Text> */}
      <Image resizeMode="contain" source={require('../assets/confirm.png')} style={styles.image} />
      <Text style={styles.title_menu}>Codul comenzii este: {props.orderCode}</Text>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: menu_container_width,
    height: 300,
    borderRadius: 16,
  },
  title_menu: {
    paddingBottom: 25,
    // paddingVertical: 8,
    fontFamily: 'Poppins',
    fontSize: 18,
    textAlign: 'center',
    color: colors.blackGrey,
    fontWeight: '700',
  },
  cart_empty_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: menu_container_width,
    height: 320,
    backgroundColor: colors.white,
    borderRadius: 16,
  },
})
export default ConfirmedOrder
