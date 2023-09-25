
import { StyleSheet } from 'react-native'


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100, 

  },
  image: {
    aspectRatio: 16 / 9,
    width: '100%',
    alignSelf: 'center',
  },
  titleContainer:{
    flex: 1,
    flexDirection: 'row', 
    alignItems: "center",
  
  },
  title: {
    fontSize: 30,
    marginVertical: 15,
    fontFamily: 'RalewayBold',
    padding: 10,
    marginVertical: 10,
  },
subtitleContainer:{
  flexDirection: 'row', 
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'LatoBold',
    padding: 10,
    marginVertical: 10,
  },
  textContainer: {
    fontFamily: 'Lato',
    padding: 10,
    flex: 1,
    marginVertical: 10,
  },
});

