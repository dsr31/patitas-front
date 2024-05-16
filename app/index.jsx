//import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { TouchableOpacity, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router,Link,Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images';
import styles from '../styles/auth';


export default function App() {
  return (
    <SafeAreaView style={ styles.main }>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style = { styles.container }>
          <Image
            source = { images.logov1 }
            style = { styles.logo }
          />
          <TouchableOpacity style={ styles.loginButton } onPress={()=>router.push('/signIn')}>
            <Text style = { styles.buttonText }>INICIAR SESIÓN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.registerButton } onPress={()=>router.push('/signUp')}>
            <Text style = { styles.buttonText }>REGISTRARSE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}