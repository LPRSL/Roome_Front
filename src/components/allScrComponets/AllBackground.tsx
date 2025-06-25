import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AllBackgroundStyles from '../../styles/allSrcStyles/AllBackgroundStyles';

interface AllBackgroundProps {
  children?: React.ReactNode;
}

const AllBackground: React.FC<AllBackgroundProps> = ({ children }) => {
  return (
    <SafeAreaView style={AllBackgroundStyles.AllBackground}>
      {children}
    </SafeAreaView>
  );
};

export default AllBackground;
