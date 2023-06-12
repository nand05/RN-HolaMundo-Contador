import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaAzul}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#28425B',
        flex:1,
        //Tarea 1
        //Tarea 2
        // justifyContent:'center',
        //Terea 3
        // justifyContent:'center',
        //Tarea 4
        // flexDirection:'row-reverse',
        // justifyContent:'space-between',
        //Tarea 5
        // flexDirection:'row',
        // justifyContent:'space-between'
        //Tarea 6
        //Tarea 7
        // justifyContent:'center',
        // alignItems:'center',
        //Tarea 8
        // justifyContent:'center',
        // alignItems:'center',
        //Tarea 9
        // justifyContent:'center',
        // alignItems:'center',
        //Tarea 10
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    cajaMorada:{
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#5856D6',
        //Tarea1
        // height:100,
        // width:100,
        //Tarea 2
        // height:100,
        // width:100,
        //Terea 3
        // height:100,
        // width:100,
        // alignSelf:'flex-end',
        //Tarea 4
        // height:100,
        // width:100,
        //Tarea 5
        // width:100,
        //Tarea 6
        // flex:1,
        //Tarea 7
        // height:100,
        // width:100,
        //Tarea 8
        // height:100,
        // width:100,
        //Tarea 9
        // height:100,
        // width:100,
        // top:100,
        //Tarea 10
        height:100,
        width:100,
    },
    cajaNaranja:{
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#F0A23B',
        //Tarea 1
        // flex:1,
        // width:100,
        //Tarea 2
        // width:100,
        // height:100,
        //Terea 3
        // width:100,
        // height:100,
        //Tarea 4
        // width:100,
        // height:100,
        // alignSelf:'center',
        //Tarea 5
        // width:100,
        //Tarea 6
        // flex:1,
        //Tarea 7
        // height:100,
        // width:100,
        //Tarea 8 DUDA
        // height:100,
        // width:100,
        // left:100,
        //Tarea 9 DUDA
        // height:100,
        // width:100,
        // left:100
        //Tarea 10
        height:100,
        width:100,
        top:50,
        

    },
    cajaAzul:{
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#28C4D9',
        //Tarea 1
        // height:100,
        // width:100,
        //Tarea 2
        // height:100,
        //Terea 3
        // width:100,
        // height:100,
        // alignSelf:'center',
        //Tarea 4
        // width:100,
        // height:100,
        // alignSelf:'flex-end',
        //Tarea 5
        // width:100,
        //Tarea 6
        // flex:2,
        //Tarea 7
        // height:100,
        // width:100,
        //Tarea 8
        // height:100,
        // width:100,
        //Tarea 9
        // height:100,
        // width:100,
        //Tarea 10
        height:100,
        width:100,
    },
});
