import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, TouchableHighlight, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AuthContext} from '../../Context';

export default function SignInScreen({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const { signIn } = React.useContext(AuthContext);
  
    return (
      <View
      style={{
        flex: 1
      }}
      >
        <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center"
        }}
        >
          <Image
            source={require('../../../assets/logo.png')}
            style={{ width: 150, height: 150 }}
          />
          <Text
          style={{
            color: "#4982C1",
            fontSize: 24
          }}
          >e-money</Text>
        </View>
        <View
        style={{
          flex: 2,
          marginTop: 16,
          marginHorizontal: 16
        }}
        >
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={{
              marginBottom: 8,
              borderWidth: 0.25,
              borderRadius: 4,
              padding: 8,
              height: 48
            }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{
              marginBottom: 8,
              borderWidth: 0.25,
              borderRadius: 4,
              padding: 8,
              height: 48
            }}
          />
          <View
          style={{
            marginBottom: 8
          }}
          >
          <Button title="Sign in" onPress={() => signIn({ username, password })} />
          </View>
          <Button title="Registrasi" onPress={() => navigation.navigate('Registrasi')}/>
        </View>
      </View>
    );
  }