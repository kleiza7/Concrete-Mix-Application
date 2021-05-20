import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button, TextInput, Picker, Alert, ImageBackground} from 'react-native';
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';
import { globalStyles } from '../styles/global';
import { AntDesign } from '@expo/vector-icons'; 




 

    export default function DataInput({navigation, route})
    {
        const background = require("../assets/background.jpg");
        const [perStone1, setPerStone1] = useState(0);
        const [perStone2, setPerStone2] = useState(0);
        const [perStone3, setPerStone3] = useState(0);
        const [denStone1, setDenStone1] = useState(0);
        const [denStone2, setDenStone2] = useState(0);
        const [denStone3, setDenStone3] = useState(0);
        const [denConcrete, setDenConcrete] = useState(0);
        const [airVolume, setAirVolume] = useState(0);
        const [concreteType, setConcreteType] = useState("C14/16");
        const [delicacyModule, setDelicacyModule] = useState(0);
        
        var totalPer = parseFloat(perStone1) + parseFloat(perStone2) + parseFloat(perStone3);
        var air = parseFloat(airVolume);
        var delicacy = parseFloat(delicacyModule);

        // const delicacyValue = () =>
        //      {
             
        //     if(route.params.dmResult != 0){
                
        //         return route.params.dmResult;
        //     }
        //     else {
        //         return "";
        //     }
        // }
        

    return (

    <ImageBackground source={background} style={{width:'100%', height:'100%'}}>
    <View style ={globalStyles.dataContainer} >
        
    <View style={{flexDirection:"row", marginLeft:130}}>
    <Text style={{color:'white' }}>Kırmataş I</Text>
    <Text style ={{marginLeft:10, color:'white'}}>Kırmataş II</Text>
    <Text style ={{marginLeft:15, color:'white'}}>Kum   </Text>
    </View>
    
    <View style ={globalStyles.dataInputContainer}>
    <Text style={globalStyles.dataText}>Yüzdeleri giriniz : </Text>

    <TouchableOpacity 
    style={globalStyles.dataInfoBox}
    onPress={() => Alert.alert("Agrega yüzdelerini toplamı 100 olacak şekilde giriniz.")}>
    <AntDesign name="questioncircleo" size={18} color="white" />
    </TouchableOpacity>

    <TextInput style = {globalStyles.dataTextInput} keyboardType="numeric" onChangeText ={(val) => setPerStone1(val)} />
    <TextInput style = {globalStyles.dataTextInput} keyboardType="numeric" onChangeText ={(val) => setPerStone2(val)} />
    <TextInput style = {globalStyles.dataTextInput} keyboardType="numeric" onChangeText ={(val) => setPerStone3(val)} />
    </View>

    <View style ={globalStyles.dataInputContainer}>
    <Text style={globalStyles.dataText}>Yoğunluklar :</Text>
    
    <TextInput style = {globalStyles.dataTextInput} keyboardType="numeric" onChangeText ={(val) => setDenStone1(val)} />
    <TextInput style = {globalStyles.dataTextInput} keyboardType="numeric" onChangeText ={(val) => setDenStone2(val)} />
    <TextInput style = {globalStyles.dataTextInput} keyboardType="numeric" onChangeText ={(val) => setDenStone3(val)} />
    </View>
    
    <View style= {globalStyles.dataInputContainer}>
        <Text style ={globalStyles.dataText}>Çimento Yoğunluğu: </Text>
        <TextInput 
        style ={[globalStyles.dataTextInput,{width:214}]} 
        keyboardType="numeric"
        placeholder="kg/m^3"
        onChangeText ={(val) => setDenConcrete(val)} />
    </View>

    <View style= {globalStyles.dataInputContainer}>
        <Text style ={globalStyles.dataText}>Hava Hacmi: </Text>
        <TouchableOpacity 
    style={globalStyles.dataInfoBox}
    onPress={() => Alert.alert("0 ile 30 arasında hava boşluğu değerini giriniz.")}>
    <AntDesign name="questioncircleo" size={18} color="white" />
    </TouchableOpacity>
        <TextInput 
        placeholder = "dm^3"
        style ={[globalStyles.dataTextInput,{width:214}]}
        keyboardType="numeric" 
        onChangeText ={(val) => setAirVolume(val)} />
    </View>

    <View style ={globalStyles.dataInputContainer}>
    <Text style ={globalStyles.dataText}>Beton türü : </Text>

  

    <Picker style={globalStyles.dataPicker}   
    selectedValue = {concreteType} 
    onValueChange={(itemValue, itemIndex) => setConcreteType(itemValue) } >
    <Picker.Item label="C14/16" value ="18"/>
    <Picker.Item label="C16/20" value ="20"/>
    <Picker.Item label="C18/22" value ="22"/>
    <Picker.Item label="C20/25" value ="26"/>
    <Picker.Item label="C25/30" value ="31"/>
    <Picker.Item label="C30/37" value ="36"/>
    <Picker.Item label="C35/45" value ="43"/>
    <Picker.Item label="C40/50" value ="48"/>
    <Picker.Item label="C45/55" value ="53"/>
    <Picker.Item label="C50/60" value ="58"/>
    <Picker.Item label="C55/67" value ="63"/>
    <Picker.Item label="C60/75" value ="68"/>
    <Picker.Item label="C70/85" value ="78"/>
    <Picker.Item label="C80/95" value ="88"/>
    <Picker.Item label="C90/105" value ="98"/>
    <Picker.Item label="C100/115" value ="108"/>
    </Picker>

   </View>   


   <View style={globalStyles.dataInputContainer}>
       <Text style={globalStyles.dataText}>İncelik Modülü: </Text>
       <TextInput 
        style = {[globalStyles.dataTextInput,{width:100, marginRight:30 }]} 
        keyboardType="numeric"
        onChangeText ={(val) => setDelicacyModule(val)} />
        <Button title="hesapla" onPress ={() => (totalPer != 100) ? Alert.alert("Yüzde toplamları 100 olmalı!") : navigation.navigate("Delicacy Module Calculator",
        {paramPerStone1: perStone1, paramPerStone2:perStone2, paramPerStone3 : perStone3 })} />
   </View>

    <View style ={globalStyles.dataButtons}>
    <Button  title="Geri" onPress ={()=>  navigation.goBack()}  />
    <Button title ="İleri" onPress={() => 
    (totalPer != 100) ? Alert.alert("Yüzde toplamları 100 olmalı!") : 
    (air>30 || air<0) ? Alert.alert("Hava değeri 0 ile 30 arasında olmalıdır.") :
    (delicacy > 10) ? Alert.alert("İncelik modülü 10'dan büyük olamaz!") :
    navigation.navigate("Calculation",
    {paramPerStone1 : perStone1, 
    paramPerStone2 : perStone2, //en son seçenek
    paramPerStone3 : perStone3, 
    paramDenStone1 : denStone1, 
    paramDenStone2 : denStone2, 
    paramDenStone3 : denStone3,
    paramDenConcrete : denConcrete, 
    paramAirVolume : airVolume, 
    paramConcreteType : concreteType, 
    paramDelicacyModule : delicacyModule   })} />
    </View>
    
       
    </View>
    </ImageBackground>

    )

    }




   