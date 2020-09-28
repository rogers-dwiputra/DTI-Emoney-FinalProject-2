import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, TouchableHighlight, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TransferKonfirmasiScreen({ navigation }){
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
          <TextInput
          placeholder="Nominal Transfer"
          style={{
            marginBottom: 8
          }}
          />
          <TextInput
          placeholder="Nomor Handphone"
          style={{
            marginBottom: 8
          }}
          />
          <Text style={{
            textAlign: "center",
            fontSize: 16,
            marginBottom: 8
          }}>Penerima :</Text>
          <Text style={{
            textAlign: "center",
            fontSize: 16,
            marginBottom: 8
          }}>Dendy Aditya</Text>
        <Button title="Transfer" onPress={() => { navigation.navigate('TransferSuccess'); }} />
      </View>
      </View>
    );
  }