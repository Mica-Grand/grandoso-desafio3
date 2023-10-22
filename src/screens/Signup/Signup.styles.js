import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import fonts from '../../global/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
    fontFamily : "LatoBold",
    fontSize :20 ,
    color: "white",
  },
  signupContainer:{
    width: "100%",
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  inputSignup:{
    width:"92%",
    height :48 ,
    borderRadius:36,
    borderColor:'#DADADA',
    borderWidth:.7,
    marginTop:20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,

  },
  signupButton:{
    backgroundColor: colors.text,
    width: "50%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10,
    marginBottom: 15,
    marginTop: 20,
  },
  buttonText:{
    color: "white",
    fontFamily: "LatoBold",
  },
  error:{
    color: "red",
    textAlign: 'left',
    fontFamily: "LatoBold",
  }
 
 
});
