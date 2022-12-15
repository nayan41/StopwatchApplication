import React from 'react';
import {Text, View} from 'react-native';
import {StyleHeader} from '../styleSheet/components/StyleHeader';

// .. To display header on a screen
const HeaderComponent = ({titleName}) => {
  return (
    <View style={StyleHeader.container}>
      <View style={StyleHeader.titleViewStyle}>
        <Text style={StyleHeader.titleTextStyle} numberOfLines={1}>
          {titleName}
        </Text>
      </View>
    </View>
  );
};

export default HeaderComponent;
