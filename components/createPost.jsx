import { StyleSheet, Text, Image, TouchableOpacity, View, TextInput,FlatList } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'

import styles from '../styles/petCard'
import images from '../constants/images'
import PetCardSimple from './petCardSimple'

const CreatePost = ({params}) => {
  let currentPost = useLocalSearchParams();
  //console.log(currentPost);
  
  let id_type = Number(currentPost.type);
  /*const goToCreate = () => {(
    //router.push({ pathname: `(tabs)/posts/post/${name}`, params: name })
  )}*/

  return (
    <View style = {{ justifyContent: 'center', alignItems: 'center'}}>
       <Text style = { styles.myPetsTitle }>MIS MASCOTAS</Text>
       <FlatList
            data = {[
                { id_pet: 1, name: 'PEPITO uyihu jik huijok jumkl, jiok lfdghgfh drgh rdggthgfgjf retatsyt restyj', photo: images.img_default_2, description: 'Soy un perrito muy pequeñito perdido entre sddfghnjmnhbsvfvgfhgmjhngbfvsdghmjghngbdfvsdfghmjhghnfgdbfsvdcfghnfngdfgtfhyjgrfsergdthjukughfgfrsedasfrgtgjhugygrf ', type: 'ENCONTRADO', location: 'Calle 3, direccion sur' },
                { id_pet: 3, name: 'PEPITO PEPITO PEPito', photo: images.img_default_1, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'SE BUSCA', location: 'Calle 3, direccion sur' },
                { id_pet: 6, name: 'PEPITO', photo: images.img_default_1, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'SE BUSCA', location: 'Calle 3, direccion sur' }
            ]}
            keyExtractor = {(item) => item.id_pet}
            renderItem = {({item}) => (
                <PetCardSimple content = {item} typePost = { id_type }/>
            )}
        />
    </View>
  )
}

export default CreatePost