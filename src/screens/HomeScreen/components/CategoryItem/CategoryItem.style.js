import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    minWidth: 90,
    width: '85%',
    maxWidth: 500,
    height: 90, 
    minHeight: 30,
    justifyContent: 'center',
  },
  cardContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  image: {
    width: 40, 
    height: 40, 
    marginRight: 10, 
  },
  text: {
    fontFamily: "Lato",
    fontSize: 18,
    textAlign: "left",
  }
})
