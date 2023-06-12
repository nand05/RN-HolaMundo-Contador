import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green',
  },
    title:{
      textAlign:'center',
      fontSize:20,
      paddingVertical:20,
      borderWidth:10,
      marginHorizontal:50,
      marginVertical:25
      // backgroundColor:'red'
    }
});