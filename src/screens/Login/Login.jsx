import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from "../Login/Login.style"
import { useState } from 'react'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { insertSession } from '../../db'

const Login = ({navigation}) => {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [triggerLogin] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    // console.log(email, password)
    triggerLogin({
      email,
      password
    })
      .unwrap()
      .then(result => {
        dispatch(setUser(result))
        insertSession({
          localId: result.localId,
          email: result.email,
          token: result.idToken,
        })
          .then(result => console.log(result))
          .catch(error => console.log(error.message))
      })
  }

  return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <Text style={styles.title}>Accede a tu cuenta</Text>
            <TextInput style={styles.inputLogin} placeholder="Ingresa tu correo electrónico"value= {email}onChangeText={setEmail}/>
            <TextInput style={styles.inputLogin} placeholder="Ingresa tu contraseña"value= {password}onChangeText={setPassword}/>
            <Pressable style={styles.loginButton} onPress={onSubmit}>
                <Text style={styles.buttonText}>Acceder</Text>
            </Pressable>
            <Text style={styles.title}>¿No tenés cuenta? </Text>
            <Pressable style={styles.loginButton}
                        onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.buttonText}>Registrarme</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Login