import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeTabScreen({ navigation }){
    return (
      <ScrollView style={{
        backgroundColor: "#F0F0F0",
        flex: 1
      }}>
        <View
        style={{
          backgroundColor: "#FFFFFF",
          flex: 1,
          paddingTop: 8,
          paddingLeft: 8,
        }}
        >
          <Image
            source={require('../../../assets/logo.png')}
            style={{ width: 36, height: 36 }}
          />
          <Text
          style={{
            marginTop: 8,
            fontSize: 14
          }}
          >Saldo Anda :</Text>
          <Text
          style={{
            marginTop: 4,
            fontSize: 36
          }}
          >
            Rp. 1.234.567.890
          </Text>
        </View>
        <View
        style={{
          backgroundColor: "#4982C1",
          flex: 1,
          marginTop: 16,
          paddingTop: 8,
          marginHorizontal: 16,
          marginBottom: 16,
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: "center"
        }}
        >
          <TouchableHighlight
          onPress={() => { navigation.navigate('TopUp'); }}
          >
          <>
          <View
          style={{
            backgroundColor: '#FFFFFF',
            padding: 16
          }}
          >
            <Ionicons name={'add'} size={24}/>
          </View>
          <Text style={{
            textAlign: 'center',
            color: "#FFFFFF",
            fontSize: 14,
            marginTop: 8
          }}>Top Up</Text>
          </>
          </TouchableHighlight>
  
          <TouchableHighlight
          onPress={() => { navigation.navigate('QrPay'); }}
          >
          <>
          <View
          style={{
            backgroundColor: '#FFFFFF',
            padding: 16
          }}
          >
            <Ionicons name={'qr-code'} size={24}/>
          </View>
          <Text style={{
            textAlign: 'center',
            color: "#FFFFFF",
            fontSize: 14,
            marginTop: 8
          }}>QR Pay</Text>
          </>
          </TouchableHighlight>
          
          <TouchableHighlight
          onPress={() => { navigation.navigate('Transfer'); }}
          >
          <>
          <View
          style={{
            backgroundColor: '#FFFFFF',
            padding: 16
          }}
          >
            <Ionicons name={'send'} size={24}/>
          </View>
          <Text style={{
            textAlign: 'center',
            color: "#FFFFFF",
            fontSize: 14,
            marginTop: 8
          }}>Transfer</Text>
          </>
          </TouchableHighlight>
        </View>
        <View
        style={{
          flex: 2,
          marginHorizontal: 16
        }}
        >
        <Text>5 Transaksi Terakhir :</Text>
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
      </ScrollView>
    );
  }