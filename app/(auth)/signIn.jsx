import { ScrollView, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'expo-router';
import images from '../../constants/images';
import styles from '../../styles/auth';
import icons from '../../constants/icons.js';
import { router } from 'expo-router';
import { SessionContext } from '../../context/sessionContext.jsx';

const SignIn = () => {
  const [userError, setUserError] = useState();

  const [signIn, setSignIn] = useState({
    username:'',
    password:''
  })

  const { createSession } = useContext(SessionContext);

  const iniciarSesion = () => {
    fetch(`http://192.168.166.18:4000/api/users/comprobarInicioSesion?username=${signIn.username}`).then(
      res => res.json()
    ).then(
      (resultado) => {
        if(resultado.body[0]){
          if(resultado.body[0].password == signIn.password){
            createSession(resultado.body[0].username)
            router.push('/../(tabs)/posts');
          } 
          else{
            setUserError("Contraseña incorrecta.");
          }
        }
        else{
          setUserError("El usuario no existe. Inténtelo de nuevo.");
        }
      }, 
      (error) => {
        console.warn("Houston tenemos un problema en la pagina de foro");
      }
    )
  }
  

  return (
    <SafeAreaView style = { styles.main }>
      <ScrollView contentContainerStyle={ styles.scrollViewContent }>
        <View style = { styles.container }>
          <Image
            source = { images.logov1 }
            style = { styles.logo }
          />
          <View style = { styles.form }>
            <TextInput 
              placeholder = 'NOMBRE DE USUARIO'
              value = { signIn.email }
              onChangeText = { (e) => setSignIn({ ...signIn, username: e }) }
              style = { styles.customtextInput }
            />
            <Image 
              source = {icons.usuario}
              resizeMode = "contain" 
              style = {{ height: 24, width: 24}}
            />
          </View>
          <View style = { styles.form }>
            <TextInput 
              placeholder = 'CONTRASEÑA'
              secureTextEntry = { true }
              value = { signIn.password }
              onChangeText = { (e) => setSignIn({ ...signIn, password: e }) }
              style = { styles.customtextInput }
            />
            <Image 
              source = {icons.contrasena}
              resizeMode = "contain" 
              style = {{ height: 24, width: 24}}
            />
          </View>
          <Text style = {{ fontFamily: 'Inter-Regular', fontSize: 10, width: '65%', display: 'flex', textAlign: 'right' }} >
            ¿Olvidaste la contraseña?
          </Text>
          {userError ? (<Text style = {{marginTop: 20, color: 'red'}}>{userError}</Text>) : (<Text></Text>)}
          <TouchableOpacity style = { styles.signInAuthContainer }  onPress={() => {iniciarSesion()}}>
            <Text style = { styles.signInAuth } /*onPress={()=>router.push('/../(tabs)/posts')}*/>
              INICIAR SESIÓN
            </Text>
          </TouchableOpacity>
          <View style = { styles.changeAuthMethod }>
            <Text style = {{ fontFamily: 'Inter-Regular', fontSize: 10, paddingRight: 5 }}>
              ¿Sin cuenta aún?
            </Text>
            <Link href={ '../signUp' } style = {{ fontFamily: 'Inter-Regular', fontSize: 10, textDecorationLine: 'underline' }}>
              Regístrate aquí.
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn