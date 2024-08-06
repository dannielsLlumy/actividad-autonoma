import React, { useState } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { InputField } from './components/InputField';
import { styles } from '../theme/apptheme';


export const Screen2 = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState<string | null>(null);
  
    const handleDivide = () => {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
  
      if (number1 === 0 && number2 === 0) {
        setResult('ESTE NUMERO ESINDETERMINACIÓN');
      } else if (number2 === 0) {
        setResult('ESTA DIVISIÓN PARA CERO NO EXISTE Y PARA NINGUN O');
      } else {
        setResult((number1 / number2).toString());
      }
    };
  
    return (
      <View style={styles.container3}>
        <InputField label="Campo número 1" value={num1} onChangeText={setNum1} />
        <InputField label="Campo número 2" value={num2} onChangeText={setNum2} />
        <Pressable
          onPress={handleDivide}
          style={styles.divideButton}
        >
          <Text style={styles.divideButtonText}>Dividir</Text>
        </Pressable>
        {result && <Text style={styles.result}>{result}</Text>}
      </View>
    );
  };
  
