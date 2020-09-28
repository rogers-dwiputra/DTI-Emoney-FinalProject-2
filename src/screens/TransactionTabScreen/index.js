import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TransactionTabScreen(){
    return (
      <View
      style={{
        paddingHorizontal: 8
      }}
      >
        <View
        style={{
          backgroundColor: "#FFFFFF",
          height: 72,
          marginTop: 8,
          borderRadius: 4,
        }}
        >
          <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
          >
            <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
            >
              <Ionicons name={'trail-sign-outline'} size={24}/>
            </View>
            <View
            style={{
              flex: 4,
              justifyContent: "center"
            }}
            >
              <Text>Rp. 80.000</Text>
              <Text>Transfer Ke 082240206862</Text>
            </View>
          </View>
        </View>

        <View
        style={{
          backgroundColor: "#FFFFFF",
          height: 72,
          marginTop: 8,
          borderRadius: 4,
        }}
        >
          <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
          >
            <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
            >
              <Ionicons name={'trail-sign-outline'} size={24}/>
            </View>
            <View
            style={{
              flex: 4,
              justifyContent: "center"
            }}
            >
              <Text>Rp. 80.000</Text>
              <Text>Transfer Ke 082240206862</Text>
            </View>
          </View>
        </View>

        <View
        style={{
          backgroundColor: "#FFFFFF",
          height: 72,
          marginTop: 8,
          borderRadius: 4,
        }}
        >
          <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
          >
            <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
            >
              <Ionicons name={'trail-sign-outline'} size={24}/>
            </View>
            <View
            style={{
              flex: 4,
              justifyContent: "center"
            }}
            >
              <Text>Rp. 80.000</Text>
              <Text>Transfer Ke 082240206862</Text>
            </View>
          </View>
        </View>

        <View
        style={{
          backgroundColor: "#FFFFFF",
          height: 72,
          marginTop: 8,
          borderRadius: 4,
        }}
        >
          <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
          >
            <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
            >
              <Ionicons name={'trail-sign-outline'} size={24}/>
            </View>
            <View
            style={{
              flex: 4,
              justifyContent: "center"
            }}
            >
              <Text>Rp. 80.000</Text>
              <Text>Transfer Ke 082240206862</Text>
            </View>
          </View>
        </View>

        <View
        style={{
          backgroundColor: "#FFFFFF",
          height: 72,
          marginTop: 8,
          borderRadius: 4,
        }}
        >
          <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
          >
            <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
            >
              <Ionicons name={'trail-sign-outline'} size={24}/>
            </View>
            <View
            style={{
              flex: 4,
              justifyContent: "center"
            }}
            >
              <Text>Rp. 80.000</Text>
              <Text>Transfer Ke 082240206862</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }