import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import {BORDER_RADIUS_100} from '../../constants/Dimens';

const StyleControl = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  controlButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('15%'),
    height: hp('7.5%'),
    borderRadius: BORDER_RADIUS_100,
    backgroundColor: Colors.colorPrimaryLight,
  },
});

export {StyleControl};
