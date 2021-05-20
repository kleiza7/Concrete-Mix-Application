import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';

export default function About({navigation})
{
    const background = require("../assets/background.jpg");
return(
    <ImageBackground source={background} style={{width:'100%', height:'100%'}}>
    <View style ={globalStyles.aboutText}>
        <Text style ={[globalStyles.big,{ fontSize:30, marginTop:10}]}>KAYNAKÇA</Text>
        <Text style ={[globalStyles.small,{marginTop:10, fontSize:20}]}>Bu uygulama yapılırken aşağıda ki kaynaklardan yararlanılmıştır.</Text>
        <Text style ={{color:"white", marginTop:10, fontSize:20}}>http://kisi.deu.edu.tr/kamile.tosun/Yapi_Malzemesi_6_beton_karisim_hesabi_-3-.pdf</Text>
        <Text style ={{color:"white", marginTop:10, fontSize:20}}>http://kisi.deu.edu.tr//halit.yazici/YM2/YM-II%2315_BETON_KARISIM_HESABI.pdf</Text>
        <Text style ={{color:"white", marginTop:10, fontSize:20}}>https://avesis.yildiz.edu.tr/resume/downloadfile/bkkanat?key=e5cf8455-2eec-4024-843a-9e3f3cc54d62</Text>
        <Text style ={{color:"white", fontSize:30, marginTop:20}} >Proje Ekibi</Text>
        <Text style ={{color:"white", marginTop:10, fontSize:20}}>Şerafet Şahin 1611012099</Text>
        <Text style ={{color:"white", marginTop:10, fontSize:20}} >Ayşe Şinasi 1411012036</Text>
    
    
    </View>



    </ImageBackground>


)
}
