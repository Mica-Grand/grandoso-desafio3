import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: '50%',
    width: '90%',
    alignSelf: 'center', 
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    marginVertical: 15,
    fontFamily: 'RalewayBold',
    padding: 10,
  },

 subtitle:{
  fontSize: 20,
  fontFamily: 'Lato',
  padding: 10,
  fontWeight: 'bold',
 },
  textContainer:{
    fontFamily: 'Lato',
    padding: 10,
    flex: 1, 
  },

})