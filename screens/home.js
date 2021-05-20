import React, {useState, useEffect} from 'react';
import { StyleSheet,  Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';

export default function Home({navigation})
{
  const background = require("../assets/background.jpg");
  
return (
  <ImageBackground source={background} style={{width:'100%', height:'100%'}}>

        <View style={globalStyles.homeContainer} >
            
            <View style = {globalStyles.homeButtonsContainer}>
            
            <Button title="Karışım Hesabı Yap" onPress={() => navigation.navigate("Data Input")} /> 
             <Button title="Hakkında" onPress={() => navigation.navigate("About")} /> 
        
        </View>

        </View>
        </ImageBackground>


)
}



