import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function QrKonfirmasiBayarScreen({navigation}){
    return (
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 32
      }}
      >
        <TextInput
        placeholder="Nominal Bayar"
        />
        <View
        style={{
          backgroundColor: "#4982C1",
          padding: 24,
          marginTop: 8,
          marginBottom: 8
        }}
        >
          <Text style={{ textAlign: "center", fontSize: 18, color: "#FFFFFF" }}>Pembayaran Kepada</Text>
          <Text style={{ textAlign: "center", fontSize: 24, color: "#FFFFFF" }}>Basicschool</Text>
          <Text style={{ textAlign: "center", fontSize: 18, color: "#FFFFFF" }}>Jl. Ciparay No 20 Kota Bandung</Text>
        </View>
        <Button title="SUBMIT" onPress={() => { navigation.navigate('QrSuccessPage'); }} />
      </View>
    );
  }