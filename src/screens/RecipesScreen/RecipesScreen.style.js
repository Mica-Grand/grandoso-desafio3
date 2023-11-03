import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer:{
    marginLeft: 5,
  },
  recipeItem: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary, 
  },

  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  recipeInfo: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'space-between', 
  },
  recipeTitle: {
    fontSize: 18,
    fontFamily: "RalewayBold",
  },
  recipeDescription: {
    fontSize: 15,
    fontFamily: "Raleway",
    color: colors.text,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: "baseline", 
    marginTop: 10,
  },

  flatList: {
    marginTop: 15,
  },
});
