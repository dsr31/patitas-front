import { TouchableOpacity, Image, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import 'react-native-reanimated';
import { router,Link,Redirect } from 'expo-router';
import images from '../../../constants/images';
import styles from '../../../styles/tabs';
import icons from '../../../constants/icons';
import PostCard from '../../../components/postCard';

const Posts = () => {
  return (
    <>
      <SafeAreaView style = { styles.container }>
        <View style = { styles.header }>
          <Image
            source = { images.logov3 }
            style  = { styles.logoHeader }
          />        
          <View style={styles.spacer} />
          <Image 
            source = { icons.filter }
            style  = { styles.iconHeader } 
          />
        </View>
        <View style = { styles.titlePageSection }>
          <View style = { [ styles.lineSection, styles.lineSectionL ] }/>
          <Text style = { styles.titlePage } >TABLÓN DE ANUNCIOS</Text>
          <View style = { [ styles.lineSection, styles.lineSectionR ]}/>
        </View>
        <View style = { styles.feed }>
          <View style = {{ marginTop: 50 }} />
          <View style = {{ height: '100%', backgroundColor: '#E2D8BE'}}>
            <FlatList
              data = {[
                { id: 1, name: 'PEPITO uyihu jik huijok jumkl, jiok l', photo: images.img_default_2, description: 'Soy un perrito muy pequeñito perdido entre sddfghnjmnhbsvfvgfhgmjhngbfvsdghmjghngbdfvsdfghmjhghnfgdbfsvdcfghnfngdfgtfhyjgrfsergdthjukughfgfrsedasfrgtgjhugygrf ', type: 'ENCONTRADO', location: 'Calle 3, direccion sur' },
                { id: 2, name: 'PEPITO', photo: images.img_default_1, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'SE BUSCA', location: 'Calle 3, direccion sur' },
                { id: 3, name: 'PEPITO', photo: images.img_default_3, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'ADÓPTAME', location: 'Calle 3, direccion sur rtghgrwfer gthyg wrgethnrgbgrfrgt hegrwfgetgnh rheg wergdtfhfedwfrgtfh rfefrgtghgrfe rgth' },
                { id: 4, name: 'PEPITO', photo: images.img_default_1, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'BUSCANDO PAREJA', location: 'Calle 3, direccion sur' },
                { id: 5, name: 'PEPITO', photo: images.img_default_1, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'CACA', location: 'Calle 3, direccion sur' },
                { id: 6, name: 'PEPITO', photo: images.img_default_1, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'SE BUSCA', location: 'Calle 3, direccion sur' }
              ]}
              keyExtractor = {(item) => item.id}
              renderItem = {({item}) => (
                <PostCard content = {item}/>
              )}
            />
          </View>
          </View>
      </SafeAreaView>
    </>
  )
}

export default Posts