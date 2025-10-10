//Dependencias 
import {View, Text, TextInput, Button} from 'react-native';
import { StyleSheet } from 'react-native/types_generated/index';

export default function CalculadoraScreen(){
     return (
        <View>
            <Text>Calculadora</Text>
            <TextInput 
             keyboardType="numeric"
             placeholder="Primer numero" />
            <TextInput 
             keyboardType="numeric"
             placeholder="Segundo numero" />
            <Button
             color="#555" 
             title="Calcular" />
               <Text>Resultado:</Text>
            </View>
     );
}

const styles = StyleSheet.create({

});