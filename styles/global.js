import { StyleSheet } from 'react-native';



export const globalStyles = StyleSheet.create({

    homeContainer:{
        flex:1,
        paddingTop:60,
    },

    homeButtonsContainer : {
        
        alignItems :"center",
        justifyContent:"space-between", 
        marginTop:200,
       
        height:150,
        
    },

 
    
     
    //////

    dataContainer :{
        marginTop:20,
        marginLeft:10,
    },

    dataInputContainer:{
        flexDirection:"row",
      
          },

    dataText:{
      
            marginTop:5,
            width:125,
            color:'white',
            
        },

    dataTextInput :{
        borderWidth:1,
        width:70,
        marginLeft:2,
        marginBottom:2,
        borderRadius:8,
        backgroundColor:'white',

    },

    dataButtons:{
        marginTop:150, 
        flexDirection:"row", 
        justifyContent:"space-around",
        
    },
     
    dataPicker:{
        height:35,
        width:200,
        color:'white',
            },
   
        topContainer :{
            marginTop:20,
            marginLeft:20,
          
        },


     

    dataInfoBox :{
        marginTop:5,
        marginLeft:-20,
        
    },

    //////////

    resultsContainer: {
    marginTop:30,
    marginLeft:30,
    justifyContent:"center",

    },

    verySmall:{
        fontSize:12,
        color:'white',
    },

    small: {
        fontSize:16,
        color:'white',
    },
    
    big :{
        fontSize:20,
        color:'white',
    },

    resultsHeaderContainer:{
        flexDirection:"row",
    },
    
    resultsHeader: {
        fontSize:10,
        marginTop:10,
        marginLeft:25
    },

    calculationButtons:{
        marginTop:20,
        flexDirection:"row", 
        width:360,
        justifyContent:"space-around",
       
        
    },   

    //

    aboutText:{
        marginLeft:30, 
        marginTop:30
    },

    background : {
        flex: 1,
        resizeMode:"center"
      },

})




