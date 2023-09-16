import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 10, 
  },
  input: {
    color: colors.text,
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingVertical: 12, 
    paddingHorizontal: 16, 
    elevation: 2, 
    width: '80%',
    fontSize: 20,
  },
  placeholder: {
    color: colors.text, 
  },
  });
