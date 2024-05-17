import { Text, Image, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import styles from '../styles/filterModal'
import { router } from 'expo-router'
import images from '../constants/images'

const CreateForum = () => {

  /*const goToCreate = () => {(
    //router.push({ pathname: `(tabs)/posts/post/${name}`, params: name })
  )}*/

  return (
    <View>
      <Text style = { [styles.searchFormTitle, styles.titleSpacing] }>TÍTULO DE FORO</Text>
      <TextInput style = { styles.searchFormInput } />
      <Text style = { [styles.searchFormTitle, styles.titleSpacing] }>FORO</Text>
      <TextInput style = { [styles.searchFormInput, {height: 250}] }  />
      <Text style = { [styles.searchFormTitle, styles.titleSpacing] }>AÑADIR FOTOS</Text>
      <View style = { styles.displayUploadPhotos }>
        <Image
          source = { images.img_default_0 }
          style  = { [styles.addImage, {marginRight: 8}] }
        />
        <Image
          source = { images.img_default_0 }
          style  = { [styles.addImage, {marginHorizontal: 8}] }
        />
        <Image
          source = { images.img_default_0 }
          style  = { [styles.addImage, {marginHorizontal: 8}] }
        />
        <Image
          source = { images.img_default_0 }
          style  = { [styles.addImage, {marginLeft: 8}] }
        />
      </View>
      <View style = { styles.searchButtonContainer }>
          <TouchableOpacity style = { [styles.searchButtonContainer, styles.searchButton ]}>
              <Text style = {{ fontFamily: 'Inter-Black', fontSize: 16 }}>PUBLICAR</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreateForum