import { StyleSheet, Image, Text, View } from 'react-native';
import { Input } from '@rneui/base';
import styles from '../estilos/style';
import { Button} from '@rneui/themed';
export default function Pedidos({navigation}) {
  return (
    <View style={styles.container}>
       <Text  style={styles.titulo}>Pedidos</Text>
       <Input style = {styles.Input1}
      placeholder='  Nome do Cliente:'
      leftIcon ={{type: 'font-awesome', name:'user', color:'red'}}
    />

<Input style = {styles.Input1}
      placeholder='  E-mail do Cliente:'
      leftIcon ={{type: 'font-awesome', name:'envelope', color:'red'}}
      keyboardType='email-address'
    />
       

       <Input style = {styles.Input1}
      placeholder='  Nome do Lanche (Verde):'
      leftIcon ={{type: 'font-awesome', name:'font', color:'red'}}
    />
    
    
    <Input style = {styles.Input1}
      placeholder='  Numero do Lache (vermelho):'
      leftIcon ={{type: 'font-awesome', name:'font', color:'red'}}
      keyboardType='number-pad'
    />
        
    <Input style = {styles.Input1}
      placeholder='  Quantidade de Laches :'
      leftIcon ={{type: 'font-awesome', name:'font', color:'red'}}
      keyboardType='number-pad'
    />


        <Button style = {styles.btn}
              title="Finalizar Pedido"
              icon={{
                name: 'check',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              
              />
              
       
      </View>
  );
}