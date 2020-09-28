import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TopUpScreen({ navigation }){
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            marginHorizontal: 16
        }}
        >
        <TextInput
        placeholder="Nominal Top Up"
        />
        <Button title="Submit" onPress={() => { navigation.navigate('TopUpSuccess'); }} />
        </View>
    );
}