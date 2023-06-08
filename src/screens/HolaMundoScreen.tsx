import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {

    //Agregaremos screen cuando sera algo que ocupara toda la pantalla
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
  
      }}> 
        <Text style={{
          fontSize:40,
          textAlign:'center'
        }}>Hola mundo desde Screen</Text>
      </View>
  )
}
