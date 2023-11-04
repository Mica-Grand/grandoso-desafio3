import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    message: {
      fontSize: 16,
      color: colors.text
    },
  });