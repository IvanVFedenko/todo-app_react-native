import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const h = Math.floor(win.height);
const w = Math.floor(win.width);

export const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4784f4',
    height: 70,
    elevation: 12,
  },

  textStyle: {
    paddingRight: 10,
    color: '#fff',
    fontSize: 44,
    fontFamily: 'Satisfy-Regular',
  },

  horisontal: {
    justifyContent: 'space-between',
    width: w - 20,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 15,
  },

  position: {
    fontSize: 16,
    marginLeft: 20,
  },

  completed: {
    fontSize: 14,
    marginLeft: 20,
    color: 'gray',
  },

  delButton: {
    width: 40,
    height: 40,
    borderBottomWidth: 0.7,
    opacity: 0.4,
  },

  shadowContainer: {
    width: w,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.3,
  },

  filters: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    //backgroundColor: '#4784f4',
    height: 51,

    borderTopWidth: 0.5,
  },

  vert: {
    elevation: 5,
    width: w + 2,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  width: {
    width: w / 3,
  },

  text: {
    textAlign: 'center',
  },
  activeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#4784f4',
  },

  list: {
    height: h - 204,
  },
});
