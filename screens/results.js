import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';


    const roll = (array) =>
    {
        var i;
        for(i = 0;i<array.length;i++)
        {
            array[i] = Math.round(array[i]);
        }
    }

export default function Results({navigation, route}){

    const background = require("../assets/background.jpg"); 
    var arr =[
        route.params.paramAggregaVolume,
        route.params.paramTotalConcrete,
        route.params.paramConcrete,
        route.params.paramConcreteVolume,
        route.params.paramWater,
        route.params.paramAirVolume,
        route.params.paramStone1v,
        route.params.paramStone2v,
        route.params.paramStone3v,
        route.params.paramStone1w,
        route.params.paramStone2w,
        route.params.paramStone3w
    ];
    
    parseFloat(arr);
    roll(arr);
    

return(
    <ImageBackground source={background} style={{width:'100%', height:'100%'}}>
 <View style={globalStyles.resultsContainer}>
  <View style={globalStyles.resultsHeaderContainer}>
    <Text style = {globalStyles.big}>Sonuçlar</Text>
    <Text style={globalStyles.resultsHeader, {marginTop:5, marginLeft:10, color:'white'}}>(1 metreküp için) 1 m^3 = 1000 dm^3)</Text>
    </View>  
    <Text style ={[globalStyles.small,{marginTop:10}]}  >Su hacmi               =            {arr[4]} dm^3</Text>
    <Text style ={globalStyles.small}>Çimento hacmi     =            {arr[3]} dm^3 </Text>
    <Text style ={globalStyles.small}>Hava hacmi           =            {arr[5]}   dm^3</Text>
    <Text style={globalStyles.small}>Agrega hacmi       =            {arr[0]} dm^3</Text>
    <Text style={[globalStyles.big, {marginTop:10}]}>Agregalar </Text>
    <Text style ={globalStyles.small}>Kırmataş I hacmi  =            {arr[6]} dm^3</Text>
    <Text style ={globalStyles.small}>Kırmataş II hacmi =            {arr[7]} dm^3</Text>
    <Text style ={globalStyles.small}>Kum hacmi            =            {arr[8]} dm^3</Text>
    

    <Text style ={[globalStyles.big,{marginTop:20}]}>Agrega Oranları</Text>
    <Text style ={globalStyles.small}>Çimento                 =            {arr[2]} kg</Text>
    <Text style ={globalStyles.small}>Su                            =           {arr[4]} kg</Text>
    <Text style={globalStyles.small}>Kırmataş I              =            {arr[9]} kg</Text>
    <Text style={globalStyles.small}>Kırmataş II             =            {arr[10]} kg</Text>
    <Text style={globalStyles.small}>Kum                        =            {arr[11]} kg</Text>
    <Text style={globalStyles.small}>_________________________________</Text>
    <Text style={globalStyles.small}>Beton                      =          {arr[1]} kg</Text>

</View>

</ImageBackground>
)
}


