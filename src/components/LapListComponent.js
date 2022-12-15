import React from 'react';
import {Text, View} from 'react-native';
import {StyleLapList} from '../styleSheet/components/StyleLapList';
import {displayTime} from '../utilities/Utils';

// .. To display lap times
const LapListComponent = ({list}) => {
  return (
    list?.length > 0 &&
    list.map((item, index) => (
      <View key={index} style={StyleLapList.resultItem}>
        <Text style={StyleLapList.resultItemText}>
          Lap {list.length - index}
        </Text>
        <Text style={StyleLapList.resultItemText}>{displayTime(item)}</Text>
      </View>
    ))
  );
};

// .. React.memo : Means, React.memo checks if an upcoming render data different than the previous render data.
// .. If they are the same, then it use the previous one.
export default React.memo(LapListComponent);
