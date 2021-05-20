import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image , ImageBackground} from 'react-native';
import { set } from 'react-native-reanimated';
import { globalStyles } from '../styles/global';









export default function Calculation({navigation, route})
{   
    const background = require("../assets/background.jpg"); 
    const arr = [ 
        (route.params.paramPerStone1/100),         
        (route.params.paramPerStone2/100),
        (route.params.paramPerStone3/100), 
         route.params.paramDenStone1,
         route.params.paramDenStone2,
         route.params.paramDenStone3,
         route.params.paramDenConcrete,
         route.params.paramAirVolume,
         route.params.paramConcreteType,
         route.params.paramDelicacyModule
        ];
        
        
        parseFloat(arr);
        //bütün hesaplamalar burada
        const kg = 4;
        const fcc = 32.5;
        const fc = arr[8];
        var totalConcrete = 0;
        var water = 37*(10-arr[9]); //yuvarlamaları kaldırabilirsin //su ağırlık
        var concrete = Math.sqrt((water*water*fc*kg)/fcc);          //beton ağırlık
        var concreteVolume = concrete/arr[6];
        var aggregaVolume =(1000-concreteVolume-water-arr[7]);   
        
        const stoneVolumes = [              //aggrega hacimleri
            aggregaVolume * arr[0],
            aggregaVolume * arr[1],
            aggregaVolume * arr[2]
        ];

        const stoneWeights = [              //aggrega ağırlıkları
            stoneVolumes[0] * arr[3],
            stoneVolumes[1] * arr[4],
            stoneVolumes[2] * arr[5]

        ];

        totalConcrete = stoneWeights[0] + stoneWeights[1] + stoneWeights[2] + water + concrete + arr[7];
 
return (
<ImageBackground source={background} style={{width:'100%', height:'100%'}}>
<View>
<View style={globalStyles.topContainer} >

<Text style = {{color:'white',fontSize:16,}}>Formül : S = α(10-k)</Text>
<Text style = {globalStyles.verySmall}>S : su miktarı</Text>
<Text style = {globalStyles.verySmall}>α : (varsayılan 37 alınır)</Text>
<Text style = {globalStyles.verySmall}>k : incelik modülü</Text>

<Text style = {{color:'white',fontSize:16, marginTop:10}}>Formül : Fc = (fcc / KG )*(C/S)^2 </Text>
<Text style = {globalStyles.verySmall}>Fc : hedef dayanım</Text>
<Text style = {globalStyles.verySmall}>fcc : çimento standart dayanımı(varsayılan 42.5)</Text>
<Text style = {globalStyles.verySmall}>Kg : (varsayılan 4 alınır)</Text>
<Text style = {globalStyles.verySmall}>C : çimento miktarı</Text>

<Text style = {{color:'white',fontSize:16, marginTop:10}}>Formül: Vagg = 1000-Vbeton-Vsu-Vhava</Text>
<Text style = {globalStyles.verySmall}>Vagg : aggrega hacmi</Text>
<Text style = {globalStyles.verySmall}>Vbeton : beton hacmi</Text>
<Text style = {globalStyles.verySmall}>Vsu : su hacmi</Text>

<Text style = {{color:'white',fontSize:16, marginTop:10}}>Hacim Hesapları</Text>
<Text style = {globalStyles.verySmall}>Vkırmataş1= Vagg * (kırmataş1 / 100) </Text>
<Text style = {globalStyles.verySmall}>Vkırmataş2 = Vagg * (kırmataş2 / 100)</Text>
<Text style = {globalStyles.verySmall}>Vkum = Vagg* (Kum / 100)</Text>

<Text style = {{color:'white',fontSize:16, marginTop:10}}>Kütle Hesapları</Text>
<Text style = {globalStyles.verySmall}>Mkırmataş1= Vkırmataş1 * Dkırmataş1 </Text>
<Text style = {globalStyles.verySmall}>Mkırmataş2 = Vkırmataş2 * Dkırmataş2</Text>
<Text style = {globalStyles.verySmall}>Mkum = Vkum * Dkum</Text>
</View>

<View style={globalStyles.calculationButtons}>
<Button title ="GERI DON" onPress={() => navigation.navigate("Data Input")} /> 
<Button title ="HESAPLA" onPress={() => navigation.navigate("Results", {
    paramAggregaVolume :  aggregaVolume ,paramTotalConcrete : totalConcrete, paramConcrete : concrete, paramConcreteVolume : concreteVolume, paramWater : water,
    paramAirVolume : arr[7], paramStone1v : stoneVolumes[0], paramStone2v : stoneVolumes[1], paramStone3v : stoneVolumes[2],
    paramStone1w : stoneWeights[0], paramStone2w : stoneWeights[1], paramStone3w : stoneWeights[2]
})} /> 
</View>
</View>

</ImageBackground>

)
}

