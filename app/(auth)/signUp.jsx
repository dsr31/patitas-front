import { ScrollView, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react';
import { router,Link } from 'expo-router';
import { useState } from 'react';
import images from '../../constants/images';
import styles from '../../styles/auth';
import icons from '../../constants/icons.js';

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    name:'',
    user:'',
    email:'',
    phone:'',
    password:''
  })

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
          <TouchableOpacity style = { styles.signInAuthContainer }>
            <Text style = { styles.signUpAuth } onPress={()=>router.push('/signUpAditional')}>
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