import { ScrollView, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react';
import { useState } from 'react';
import { router,Link } from 'expo-router';
import images from '../../constants/images';
import styles from '../../styles/auth';
import icons from '../../constants/icons.js';

const SignUpAditional = () => {
   const [signUpAditional, setsignUpAditional] = useState({
    photo:'',
    description:''
  })

  return (
    <SafeAreaView style = { styles.main }>
      <ScrollView contentContainerStyle={ styles.scrollViewContent }>
        <View style = { styles.container }>
          <Image
            source = { images.logov2 }
            style = { styles.logov2 }
          />
          <View style = {{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 10}}>
            <Text style = {{ fontFamily: 'Inter-Black', marginBottom: 7 }}>
                FOTO DE PERFIL
            </Text>
            <Image 
              source = {icons.usuario}
              resizeMode = "contain" 
              style = {{ height: 150, width: 150}}
            />
          </View>
          <View style = { styles.formDescription }>
            <Text style = {{ fontFamily: 'Inter-Black', marginBottom: 7 }}>
                DESCRIPCIÓN
            </Text>
            <TextInput 
              value = { signUpAditional.description }
              onChangeText = { (e) => setsignUpAditional({ ...signUpAditional, description: e }) }
              style = { styles.inputDescription }
              multiline
              numberOfLines={4}
            />
          </View>
          <TouchableOpacity style = { styles.signInAuthContainer }>
            <Text style = { styles.signInAuth } onPress={()=>router.push('/../(tabs)/posts')}>
              SIGUIENTE
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpAditional