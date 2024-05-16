import { ScrollView, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react';
import { useState } from 'react';
import { Link } from 'expo-router';
import images from '../../constants/images';
import styles from '../../styles/auth';
import icons from '../../constants/icons.js';
import { router } from 'expo-router';

const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email:'',
    password:''
  })

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
              placeholder = 'NOMBRE DE USUARIO O EMAIL'
              value = { signIn.email }
              onChangeText = { (e) => setSignIn({ ...signIn, email: e }) }
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
          <TouchableOpacity style = { styles.signInAuthContainer }>
            <Text style = { styles.signInAuth } onPress={()=>router.push('/../(tabs)/posts')}>
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