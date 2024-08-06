import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/apptheme';


export const Screen1 = () => {
  const navigation = useNavigation();
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container2}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.boldTitle}>Aplicaciones móviles</Text>
      <Image source={{ uri: 'https://anincubator.com/wp-content/uploads/2022/08/Mobile-Marketing-pana.png' }} style={styles.image} />
      <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => navigation.navigate("Screen2")}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#0056b3' : '#007bff',
            },
            styles.button,
          ]}
        >
          <Text style={styles.buttonText}>Acceder</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};
