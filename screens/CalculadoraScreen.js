//Dependencias 
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useState} from "react"

export default function CalculadoraScreen(){

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [resultado, setResultado] = useState(null);
  const [estado, setEstado] = useState(null);

  function Calcular(){
  //Convertir a numero 
  const n1 = parseFloat(num1) || 0;
  const n2 = parseFloat(num2) || 0;
  const n3 = parseFloat(num3) || 0;

  const promedio = (n1 + n2 + n3) / 3;
  const redondeado = parseFloat(promedio.toFixed(1)); // redondea a 1 decimal

  setResultado(redondeado);
  console.log("Porcentaje:", redondeado);

  if (redondeado >= 7.5) {
      setEstado('Aprobado');
    } else {
      setEstado('Reprobado');
    }
  }


     return (
        <View style={styles.container}> 
            <Text>Nota 1</Text>
            <TextInput 
            value={num1}
            onChangeText={setNum1}
            style={styles.input}
             keyboardType="numeric"
             placeholder="Primera Nota" />
             <Text>Nota 2</Text>
            <TextInput 
            value={num2}
            onChangeText={setNum2}
            style={styles.input}
             keyboardType="numeric"
             placeholder="Segunda Nota" />
             <Text>Nota 3</Text>           
            <TextInput 
            value={num3}
            onChangeText={setNum3}
            style={styles.input}
             keyboardType="numeric"
             placeholder="Tercera Nota" />
            <Button onPress={Calcular}
             color="#555" 
             title="Calcular" />
               <Text style={styles.text}> Resultado:{resultado}</Text>
               <p></p>
               <Text style={styles.text}> Estado:{estado}</Text>
               
            </View>
     );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#FFF",
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "justify",
    color: "#000",
  }
});