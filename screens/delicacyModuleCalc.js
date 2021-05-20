import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';

export default function DelicacyModuleCalc({navigation, route})
{
  
const percent1 = route.params.paramPerStone1/100;
const percent2 = route.params.paramPerStone2/100;
const percent3 = route.params.paramPerStone3/100;

const background = require("../assets/background.jpg");
const [value, setValue] = useState(0);
const [x, setX] = useState(0);
const [result, setResult] = useState(0);
//3 değeri de ayrı ayrı hesaplayabilirsin diye düşündün.


const calculate = (sandType) => {

    if(sandType == 1){
        setX(x + (value*percent1));
    }
    
    else if (sandType == 2){
        setX(x + (value*percent2));
    }

    else if(sandType == 3){
        setX(x + (value*percent3));
    }
}

const calculateResult = (x) => {
     setResult((800-x) / 100);
}


return (
    <ImageBackground source={background} style={{width:'100%', height:'100%'}}>
<View >

<View style={styles.tableContainer}>

<View style={styles.header}>
    <View style={{flex:0.3, borderWidth:1, alignItems:'center', justifyContent:'center', borderColor:'white',}}><Text style={styles.bigText}>Elek no  (mm)</Text></View>
    <View style={{flex:0.7, borderWidth:1, alignItems:'center', justifyContent:'center',  borderColor:'white', flexDirection:'row'}}>
        <View >
            <Text style={styles.bigText}>Elekten Geçen Malzemeler(%)</Text>
            <Text style={styles.bigText}>Mıcır I Mıcır II Kum</Text>
        </View>
        
        
    </View>

    
    
    
    
</View>

<View style={styles.row}>
    <View style={styles.cell,{flex:0.305}}>
         <Text style={styles.bigText}>32</Text>
    </View>
    <View style={styles.cell}> 
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(1)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(2)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(3)}/>
    </View>
    
   
</View>

<View style={styles.row}>
    <View style={styles.cell,{flex:0.305}}>
    <Text style={styles.bigText}>16</Text>
    </View>
    <View style={styles.cell}> 
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(1)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(2)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(3)}/>
    </View>
  
   
</View><View style={styles.row}>
    <View style={styles.cell,{flex:0.305}}>
    <Text style={styles.bigText}>8</Text>
    </View>
    <View style={styles.cell}> 
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(1)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(2)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(3)}/>
    </View>
  
   
</View><View style={styles.row}>
    <View style={styles.cell,{flex:0.305}}>
    <Text style={styles.bigText}>4</Text>
    </View>
    <View style={styles.cell}> 
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(1)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(2)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(3)}/>
    </View>
    
   
</View><View style={styles.row}>
    <View style={styles.cell,{flex:0.305}}>
    <Text style={styles.bigText}>2</Text>
    </View>
    <View style={styles.cell}> 
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(1)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(2)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(3)}/>
    </View>
    
   
</View><View style={styles.row}>
    <View style={styles.cell,{flex:0.305}}>
    <Text style={styles.bigText}>1</Text>
    </View>
    <View style={styles.cell}> 
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(1)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(2)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(3)}/>
    </View>
    
   
</View><View style={styles.row}>
    <View style={styles.cell,{flex:0.305}}>
    <Text style={styles.bigText}>0.5</Text>
    </View>
    <View style={styles.cell}> 
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(1)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(2)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(3)}/>
    </View>
 
   
</View><View style={styles.row}>
    <View style={styles.cell,{flex:0.305}}>
    <Text style={styles.bigText}>0.25</Text>
    </View>
    <View style={styles.cell}> 
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(1)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(2)}/>
    </View>
    <View style={styles.cell}>
    <TextInput keyboardType="numeric" style={styles.input} onChangeText={(val) => setValue(val)} onBlur={() => calculate(3)}/>
    </View>
    
   
</View>



    <View style={{width:250, marginTop:30,  marginLeft:30}}>
       <TouchableOpacity  style={styles.button} title="Hesapla" onPress={() => calculateResult(x)}>
       <Text >Hesapla</Text>
       </TouchableOpacity>
       </View>

    
       <View><Text style={{fontSize:20, textAlign:'center', marginTop:30, color:'white'}}>İncelik modül sonucu: {(Math.round(result*100)/100)}</Text></View>



</View>

    <View style={{width:250, marginTop:160,  marginLeft:'auto', marginRight:'auto'}}>
       <Button  title="geri git" onPress={() => navigation.navigate('Data Input', {dmResult : result})}/> 
       </View>

 </View>
 
  </ImageBackground>
)
}

const styles = StyleSheet.create({

    tableContainer:{
        width : '90%',
        height:450,
        borderWidth:0.25,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:50,
        borderWidth:1,
        borderColor:'white',
    },

    header:{
        borderWidth:0.5,
        height:'20%',
        flexDirection:'row',
        borderColor:'white',
        
    },

    row:{
        borderWidth:1,
        height:'10%',
        flexDirection:'row',
        borderColor:'white',
    },


    cell :{
        
        borderLeftWidth:1.5,
        flex:0.233,
        borderColor:'white',
    },

    input:{

        borderRadius:10,
        flex:1,
        fontSize:18,
        color:'white',
        textAlign:'center',
     },

     bigText:{
        textAlign:'center',
        marginTop:'auto',
        marginBottom:'auto',
        fontSize: 18,   
        color:'white',
     },
     button : {
        backgroundColor:"white",
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:100,
        backgroundColor:'#7AC',
        
     }

});

