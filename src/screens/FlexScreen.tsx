import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.caja1}>Caja 1</Text>        
        <Text style={styles.caja2}>Caja 2</Text>        
        <Text style={styles.caja3}>Caja 3</Text> 
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28C4D9',
        // flexDirection:'row', //Por defecto son columnas
        // flexDirection:'row-reverse', //Por defecto son columnas
        // flexDirection:'column', //Por defecto son columnas
        // flexDirection:'column-reverse', //Por defecto son columnas
        // justifyContent:'flex-start',//Por defecto es el flex-start
        // justifyContent:'flex-end',//Lo manda hacia abajo
        // justifyContent:'center',//Lo pone en medio pero no es en medio de la pantalla sino en medio del contenedor padre
        // justifyContent:'space-around',//distribuye un espacio igual tanto arriba como abajo entre sus hijos
        // justifyContent:'space-between',//distribuye un espacio igual entre los hijos pero iniciando primero arriba y luego abajo
        // justifyContent:'space-evenly',//distribuye un espacio igual entre los hijos 
        // alignItems:'stretch',//Valor por default hace que los hijos tomen todo el espacio posible 
        // alignItems:'baseline',//Hace que los hijos tengan el valor minimo necesario a menos que nosotros le especifiquemos un tamaño
        // alignItems:'flex-start',//
        // alignItems:'flex-end',//
        // alignItems:'center',//
        // flexWrap:'wrap'
    },
    caja1:{
        //flex:3, //Hace la suma de los flex hijos 3 + 2 + 1 = 6, y de esos 6 que es el 100% toma 3 que seria el 50%
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // alignSelf:'center', //El alignSelf sirve para sobreescribir algun comportamiento que el padre le este dando
    },
    caja2:{
        //flex:2,//Hace la suma de los flex hijos 3 + 2 + 1 = 6, y de esos 6 que es el 100% toma 2 que seria el 33.3%
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // alignSelf:'flex-start',
    },
    caja3:{
        //flex:1,//Hace la suma de los flex hijos 3 + 2 + 1 = 6, y de esos 6 que es el 100% toma 1 que seria el 16.6%
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // alignSelf:'flex-end',
    },
});
