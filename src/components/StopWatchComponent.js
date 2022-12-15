import React, {useCallback, useRef, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {StyleStopWatch} from '../styleSheet/components/StyleStopWatch';
import {displayTime} from '../utilities/Utils';
import ControlComponent from './ControlComponent';
import HeaderComponent from './HeaderComponent';
import LapListComponent from './LapListComponent';

// .. To display Stopwatch view on a screen
const StopWatchComponent = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [lapList, setLapList] = useState([]);
  const timer = useRef(null);

  // .. Why used useCallback : rerendering child again and again without need
  const _onPressLeftButton = useCallback(() => {
    if (isRunning) {
      // .. push the new lap time on previous laplist
      setLapList(previousResults => [time, ...previousResults]);
    } else {
      // .. reset value when clicked on left side Reset button
      setLapList([]);
      setTime(0);
    }
  }, [isRunning, time]); // .. called every time when isRunning & time state value changed

  // .. Why used useCallback : rerendering child again and again without need
  const _onPressRightButton = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        // .. update new time on state, For example: 5 + 1 = 6.
        setTime(previousTime => previousTime + 1);
      }, 10);

      timer.current = interval; // .. To store interval new value in a timer Ref
    } else {
      clearInterval(timer.current); // .. clear interval
    }

    setRunning(!isRunning);
  }, [isRunning]); // .. called every time when isRunning state value changed

  return (
    <SafeAreaView style={StyleStopWatch.container}>
      <HeaderComponent titleName={'Stopwatch'} />

      <View style={StyleStopWatch.counterContainer}>
        <Text style={StyleStopWatch.counterTextStyle}>{displayTime(time)}</Text>
      </View>

      <ControlComponent
        containerPropStyle={StyleStopWatch.controlPropStyle}
        onPressLeftButton={() => _onPressLeftButton()}
        onPressRightButton={() => _onPressRightButton()}
        isRunning={isRunning}
      />

      <View style={StyleStopWatch.lapContainerStyle}>
        <LapListComponent list={lapList} />
      </View>
    </SafeAreaView>
  );
};

export default StopWatchComponent;
