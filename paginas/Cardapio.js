import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Button} from '@rneui/themed';
import styles from '../estilos/style';
import React, { useState } from 'react';

export default function Cardapio({navigation}) {
  const Pedir= ()=>{
    navigation.navigate('Pedidos')
}

  return (
    <View style={styles.container}>
       <Text style={styles.titulo}>Cardápio</Text>
      <StatusBar style="auto" />
    <  View style = {styles.linhas}>
      
       <Text style= {styles.numero}>1</Text>
       <Text style = {styles.nomes}>LEÃO</Text>
        <Image style={styles.imagens} source = {{uri:'https://i.pinimg.com/564x/10/d1/20/10d1204745607ba84f1017e8abf1afee.jpg',}}></Image>
        <Text style= {styles.numero}>2</Text>
        <Text style = {styles.nomes}>Elefante</Text>
        <Image style={styles.imagens} source = {{uri:'https://i.pinimg.com/564x/0f/a2/91/0fa291e4f003959fc8c9c64bb8107537.jpg',}}></Image>
      

        </View>
        
        < View style = {styles.linhas}>
        <Text style= {styles.numero3}>3</Text>
        <Text style = {styles.nomes3}>Mata fome</Text>
        <Image style={styles.imagens} source = {{uri:'https://i.pinimg.com/564x/32/be/0d/32be0db0cc99d1af537b3a2ccc29eb5d.jpg',}}></Image>
        <Text style= {styles.numero}>4</Text>
        <Text style = {styles.nomes}>X-Tudo</Text>
        <Image style={styles.imagens} source = {{uri:'https://i.pinimg.com/564x/0b/ce/45/0bce458c9208282d94a8ed0b73af45b8.jpg',}}></Image>
        
        </View>

        <Button style = {styles.btn}
              title="Fazer pedido"
              icon={{
                name: 'check',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              
              onPress={()=>Pedir()}
              />
        </View>
        
    
  );
}
