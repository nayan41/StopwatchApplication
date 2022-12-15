import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';

const StyleStopWatch = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  counterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('5%'),
  },
  counterTextStyle: {
    color: Colors.colorBlack,
    fontSize: 30,
    fontWeight: '500',
  },
  controlPropStyle: {
    width: wp('65%'),
    justifyContent: 'space-between',
  },
  lapContainerStyle: {
    marginTop: hp('5%'),
  },
});

export {StyleStopWatch};
