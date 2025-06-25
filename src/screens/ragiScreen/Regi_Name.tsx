/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import AllBackground from '../../components/allScrComponets/AllBackground';
import { deviceHeight, deviceWidth } from '../../utils/deviceUtils';
import allTextStyles from '../../styles/allSrcStyles/allTextStyles';

const Regi_Name = () => {
  return (
    <AllBackground>
      <View style={{ flex: 3 }} />
      <View style={{ flex: 1 }}>
        <Text
          style={[allTextStyles.signuptext, { marginLeft: deviceWidth * 0.2 }]}
        >
          Sign up
        </Text>
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <View
          style={{
            width: deviceWidth * 0.3,
            height: deviceHeight * 0.025,
            marginRight: deviceWidth * 0.48,
            marginBottom: deviceHeight * 0.008,
          }}
        >
          <Text style={allTextStyles.SemiBold15}>이름</Text>
        </View>
        <TextInput
          placeholder="이름 입력"
          placeholderTextColor={'#C4C4C4'}
          style={{
            width: deviceWidth * 0.8,
            height: deviceHeight * 0.06,
            backgroundColor: '#ffffff',
            borderRadius: 7,
            borderColor: '#C4C4C4',
            borderWidth: 1,
            paddingLeft: deviceWidth * 0.03,
            fontSize: 12,
          }}
        />
      </View>
      <View
        style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-end' }}
      >
        <TouchableOpacity
          style={{
            width: deviceWidth * 0.8,
            height: deviceHeight * 0.06,
            backgroundColor: '#FF0000',
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={[allTextStyles.SemiBold15, { color: '#ffffff' }]}>
            다음
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }} />
    </AllBackground>
  );
};

export default Regi_Name;
