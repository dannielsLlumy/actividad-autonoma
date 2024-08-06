
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../theme/apptheme';


export const InputField = ({ label, value, onChangeText }: any) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
      />
    </View>
  );
};

