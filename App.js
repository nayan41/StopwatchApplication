import {StyleSheet, View} from 'react-native';
import StopWatchComponent from './src/components/StopWatchComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <StopWatchComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
