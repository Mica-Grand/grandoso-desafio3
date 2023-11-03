import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./ProfileScreen.styles";
import { setCameraImage } from "../../features/auth/authSlice";
import { usePostProfileImageMutation } from "../../services/recipesApi";

const ProfileScreen = () => {
  const image = useSelector(state => state.auth.imageCamera)
  const { localId } = useSelector(state => state.auth)
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
  const dispatch = useDispatch()

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };
  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        );
      }
    }
  };

  const confirmImage = async () => {
    try {
      const result = await triggerSaveProfileImage({ image, localId }).unwrap();
      console.log('Resultado de la mutación:', result);
    } catch (error) {
      console.error('Error en la mutación:', error);
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Pressable style={styles.cameraButton} onPress={pickImage}>
        <Text style={styles.text}>Tomar foto de perfil</Text>
      </Pressable>
      <Pressable style={styles.cameraButton} onPress={confirmImage}>
        <Text style={styles.text}>Confirmar foto</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
