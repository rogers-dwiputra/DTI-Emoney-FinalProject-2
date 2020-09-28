import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TopUpSuccessScreen({ navigation }){
    return (
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 32
      }}
      >
        <Text
        style={{
          fontSize: 24,
          textAlign: "center"
        }}
        >Top Up Berhasil</Text>
        <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          marginTop: 8
        }}
        >Rp. 60,000</Text>
        <View
        style={{
          backgroundColor: "#4982C1",
          padding: 24,
          marginTop: 8,
          marginBottom: 8
        }}
        >
          <Text style={{ textAlign: "center", fontSize: 18, color: "#FFFFFF" }}>27 September 2020</Text>
          <Text style={{ textAlign: "center", fontSize: 18, color: "#FFFFFF" }}>VA Mandiri</Text>
        </View>
        <Button title="Selesai" onPress={() => { navigation.navigate('MainTab'); }} />
      </View>
    );
  }