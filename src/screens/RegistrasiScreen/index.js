import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RegistrasiScreen(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nama, setNama] = React.useState('');
    const [noHandphone, setNoHandphone] = React.useState('');
    
    return (
      <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
      >
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{
              marginBottom: 16,
              borderWidth: 0.25,
              borderRadius: 4,
              padding: 8,
              height: 48,
              marginTop: 16,
              marginHorizontal: 16
            }}
          />

        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={{
              marginBottom: 16,
              borderWidth: 0.25,
              borderRadius: 4,
              padding: 8,
              height: 48,
              marginHorizontal: 16
            }}
          />

          <TextInput
            placeholder="Nama"
            value={nama}
            onChangeText={setNama}
            style={{
              marginBottom: 16,
              borderWidth: 0.25,
              borderRadius: 4,
              padding: 8,
              height: 48,
              marginHorizontal: 16
            }}
          />

          <TextInput
            placeholder="No Handphone"
            value={noHandphone}
            onChangeText={setNoHandphone}
            style={{
              marginBottom: 16,
              borderWidth: 0.25,
              borderRadius: 4,
              padding: 8,
              height: 48,
              marginHorizontal: 16
            }}
          />

          <View
          style={{
            marginHorizontal: 16
          }}
          >
          <Button
          title="SUBMIT"
          />
          </View>
      </View>
    );
  }