import { ScrollView, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react';
import { router,Link } from 'expo-router';
import { useState, useContext } from 'react';
import images from '../../constants/images';
import styles from '../../styles/auth';
import icons from '../../constants/icons.js';
import { SessionContext } from '../../context/sessionContext.jsx';

const SignUp = () => {
  const { createSession } = useContext(SessionContext);
  const [userError, setUserError] = useState();

  const [signUp, setSignUp] = useState({
    name:'',
    user:'',
    email:'',
    phone:'',
    password:''
  })
  
  let url_request = "http://192.168.231.18:4000/api/users";

  const comprobarDisponibilidadUsuario = () => {
    
    fetch(`http://192.168.231.18:4000/api/users/comprobarDisponibilidadUsuario?email=${signUp.email}&username=${signUp.user}`).then(
      res => res.json()
    ).then(
      (resultado) => {
        if(!resultado.body[0]){
          regitrarUsuario();
          setUserError("");
        }
        else{
          setUserError("El nombre de usuario o email ya ha sido usado. Por favor, cambielo");
        }
      }, 
      (error) => {
        setLoading(true);
        console.warn("Houston tenemos un problema en la pagina de foro");
      }
    )
  }

  const regitrarUsuario = async () => {
    const emailAux = signUp.email.toLowerCase();
    const usernameAux = signUp.user.toLowerCase();
    const nameAux = signUp.name.toUpperCase();
    const ahora = new Date();

    let enviarFormulario = await fetch( url_request, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        "name" : nameAux, "description" : "", "email" : emailAux, "username" : usernameAux, "password" : signUp.password, "phone" : signUp.phone, "rating" : 0, "user_profile_image" : "", "date_add" : ahora
      })
    })
    enviarFormulario = await enviarFormulario.json();
    if(enviarFormulario){
      createSession(usernameAux)
      router.push('/signUpAditional');
    }
  }
 
  return (
    <SafeAreaView style = { styles.main }>
      <ScrollView contentContainerStyle={ styles.scrollViewContent }>
        <View style = { styles.container }>
          <Image
            source = { images.logov1 }
            style = { styles.logoSingUp }
          />
          <View style = { styles.form }>
            <TextInput 
              placeholder = 'NOMBRE'
              value = { signUp.name }
              onChangeText = { (e) => setSignUp({ ...signUp, name: e }) }
              style = { styles.customtextInput }
            />
          </View>
          <View style = { styles.form }>
            <TextInput 
              placeholder = 'USUARIO'
              value = { signUp.user }
              onChangeText = { (e) => setSignUp({ ...signUp, user: e }) }
              style = { styles.customtextInput }
            />
          </View>
          <View style = { styles.form }>
            <TextInput 
              placeholder = 'EMAIL'
              value = { signUp.email }
              onChangeText = { (e) => setSignUp({ ...signUp, email: e }) }
              style = { styles.customtextInput }
            />
          </View>
          <View style = { styles.form }>
            <TextInput 
              placeholder = 'TELÉFONO'
              value = { signUp.phone }
              onChangeText = { (e) => setSignUp({ ...signUp, phone: e }) }
              style = { styles.customtextInput }
            />
          </View>
          <View style = { styles.form }>
            <TextInput 
              placeholder = 'CONTRASEÑA'
              secureTextEntry = { true }
              value = { signUp.password }
              onChangeText = { (e) => setSignUp({ ...signUp, password: e }) }
              style = { styles.customtextInput }
            />
          </View>
          {userError ? (<Text>{userError}</Text>) : (<Text></Text>)}
          <TouchableOpacity style = { styles.signInAuthContainer }  onPress = { () => {comprobarDisponibilidadUsuario()} }>
            <Text style = { styles.signUpAuth }>
              REGISTRARSE
            </Text>
          </TouchableOpacity>
          <View style = { styles.changeAuthMethod }>
            <Text style = {{ fontFamily: 'Inter-Regular', fontSize: 10, paddingRight: 5 }}>
              ¿Ya tienes cuenta?
            </Text>
            <Link href={ '../signIn' } style = {{ fontFamily: 'Inter-Regular', fontSize: 10, textDecorationLine: 'underline' }}>
              Inicia sesión aquí.
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp