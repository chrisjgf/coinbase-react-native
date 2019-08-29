import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  productCell: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 10,
  },
  productText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  errorText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
  },
});
