import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'


// const {width,height} = Dimensions.get('window');

export const DimensionesScreen = () => {

    //Podemos usar el siguiente hook para poder saber las dimensiones si es que se cambia la orientacion de la pantalla
    const {width,height} = useWindowDimensions();

  return (
    <View>
        <View style={styles.container}>
            <View style={{
                ...styles.cajaMorada,
                width:width*0.80
            }}/>
            <View style={styles.cajaNaranja}/>
        </View>
        <Text style={styles.title}>W: {width}, H: {height}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:200,
        backgroundColor:'green'
    },
    cajaMorada:{
        backgroundColor:'#5856D6',
        width:'50%',
        height:'50%'
    },
    cajaNaranja:{
        backgroundColor:'#F0A23B'
    },
    title:{
        fontSize:15,
        textAlign:'center'
    }
});