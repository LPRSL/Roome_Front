import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import Regi_Name from '../screens/ragiScreen/Regi_Name';

export type RootStackParamList = {
  Regi_Name: undefined;
};

export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Regi_Name'>;
  onPress?: () => void;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Regi_Name" component={Regi_Name} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
