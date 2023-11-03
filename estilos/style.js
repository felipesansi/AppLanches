import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor: '#F2B705',
    alignItems: 'center',
    },
    
    imagens:{
        marginTop: 30,
        width:105,
        height:105,
        
        marginRight:50,
      },
     
      linhas:
     {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    },


    titulo:
    {
        marginTop:10,
        fontSize:50,
        color: '#D96704',
        fontWeight : 'bold' ,  
      
    },
    
    numero:
    {
        marginTop:90,
        fontSize:50,
        color: 'red',
        fontWeight : 'bold' , 
        paddingTop:100,
        left:120
    },
    nomes:
    {
        
        bottom:110,
        fontSize:20,
        color: 'green',
        fontWeight : 'bold' , 
        paddingTop:100,
        left:80
    },
    Input1:
  
    { color:'white',
    marginTop:40,
    },
    nomes3:
    {
        
        bottom:110,
        fontSize:20,
        color: 'green',
        fontWeight : 'bold' , 
        paddingTop:100,
        left:98
    },
    numero3:
    {
        marginTop:90,
        fontSize:50,
        color: 'red',
        fontWeight : 'bold' , 
        paddingTop:100,
        left:160
    },
    
  });
  export default styles
  