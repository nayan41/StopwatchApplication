import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/Colors';
import {StyleControl} from '../styleSheet/components/StyleControl';

// .. To display two buttons: Start/Stop && Lap/Reset
const ControlComponent = ({
  containerPropStyle,
  isRunning,
  onPressLeftButton,
  onPressRightButton,
}) => {
  return (
    <View style={[StyleControl.container, containerPropStyle]}>
      <TouchableOpacity
        style={StyleControl.controlButton}
        onPress={onPressLeftButton}>
        <Text
          style={{
            color: isRunning ? Colors.colorBlack : Colors.colorRed,
          }}>
          {isRunning ? 'Lap' : 'Reset'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={StyleControl.controlButton}
        onPress={onPressRightButton}>
        <Text
          style={{
            color: isRunning ? Colors.colorRed : Colors.colorBlack,
          }}>
          {isRunning ? 'Stop' : 'Start'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ControlComponent;
