import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import fonts from '../../global/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },

  image:{
    width: 200,
    height: 200,
  },

  cameraButton:{
    backgroundColor: colors.primary,
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10,
    marginBottom: 15,
    marginTop: 20,
  },

  text:{
    color: "white",
    fontFamily: "LatoBold",
    fontSize: 13,
  }

})