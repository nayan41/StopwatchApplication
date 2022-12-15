import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';

const StyleLapList = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('85%'),
    marginVertical: hp('0.5%'),
  },
  resultItemText: {
    color: Colors.colorBlack,
    fontSize: 20,
    fontWeight: '400',
  },
});

export {StyleLapList};
