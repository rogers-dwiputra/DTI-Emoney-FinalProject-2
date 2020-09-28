import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function QrPayScreen({navigation}){
    return (
      <View>
        <Text>Qr Pay Screen</Text>
        <Button title="Konfirmasi Bayar" onPress={() => { navigation.navigate('QrKonfirmasiBayar'); }} />
      </View>
    );
  }