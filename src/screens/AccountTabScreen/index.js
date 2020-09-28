import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AuthContext} from '../../Context';

export default function AccountTabScreen(){
    const { signOut } = React.useContext(AuthContext);
  
    return (
      <View
      style={{
        flex: 1
      }}
      >
        <View
        style={{
          flex: 1,
          backgroundColor: "#005690",
          justifyContent: "center",
          alignItems: "center"
        }}
        >
          <Ionicons name={'person-circle-outline'} size={120} color={"#FFFFFF"}/>
          <Text style={{
            color: "#FFFFFF"
          }}>R. Rogers Dwiputra Setiady</Text>
          <Text style={{
            color: "#FFFFFF"
          }}>082240206862</Text>
        </View>
        <View
        style={{
          flex: 2,
          marginHorizontal: 16
        }}
        >
          <View
          style={{
            marginTop: 8
          }}
          >
          <Button title="UBAH PROFIL"/>
          </View>
          
          <View
          style={{
            marginTop: 8
          }}
          >
          <Button title="GANTI PASSWORD"/>
          </View>
          <View
          style={{
            marginTop: 8
          }}
          >
          <Button title="LOGOUT" onPress={() => signOut() }/>
          </View>
        </View>
      </View>
    );
  }