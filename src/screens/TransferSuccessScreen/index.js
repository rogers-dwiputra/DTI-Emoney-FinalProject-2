import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, TouchableHighlight, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TransferSuccessScreen({ navigation }){
    return (
        <View
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF"
        }}
        >
          <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          >
            <Image
              source={require('../../../assets/transfer.png')}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View
          style={{
            flex: 1,
            marginHorizontal: 16
          }}
          >
            <Text
            style={{
              fontSize: 24,
              textAlign: "center"
            }}
            >Transfer Berhasil!</Text>
            <Text
            style={{
              fontSize: 24,
              textAlign: "center",
              marginTop: 8
            }}
            >Rp. 100,000</Text>

        <View
        style={{
          backgroundColor: "#4982C1",
          padding: 24,
          marginTop: 8,
          marginBottom: 8
        }}
        >
        <Text style={{ textAlign: "center", fontSize: 18, color: "#FFFFFF" }}>27 September 2020</Text>
        <Text style={{ textAlign: "center", fontSize: 24, color: "#FFFFFF" }}>Penerima : Dendy Aditya</Text>
        <Text style={{ textAlign: "center", fontSize: 18, color: "#FFFFFF" }}>082240206861</Text>
      </View>

        <Button title="Selesai" onPress={() => { navigation.navigate('MainTab'); }} />
      </View>
      </View>
    );
  }