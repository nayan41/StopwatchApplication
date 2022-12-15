import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';

const StyleHeader = StyleSheet.create({
  container: {
    backgroundColor: Colors.colorWhite,
    flexDirection: 'row',
    width: wp('100%'),
    height: hp('7%'),
    alignItems: 'center',
    alignSelf: 'center',
  },
  titleViewStyle: {
    flex: 1,
  },
  titleTextStyle: {
    color: Colors.colorBlack,
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
});

export {StyleHeader};
