import { Text, Image, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import React from 'react'
import styles from '../styles/filterModal'
import { router } from 'expo-router'
import images from '../constants/images'

const CreatePet = () => {

  /*const goToCreate = () => {(
    //router.push({ pathname: `(tabs)/posts/post/${name}`, params: name })
  )}*/

  return (
    <ScrollView>
        <View style = { styles.addPhotoSection }>
            <Text style = { styles.addPhotoText }>FOTO DE PERFIL</Text>
            <Image
                source = { images.img_default_0 }
                style = {{ width: 110, height: 110, resizeMode: 'contain'}}
            />
        </View>
        <View style = { styles.dividerLine } />
        <View>
            <View style = { styles.searchFormsDouble }>
                <View style = { styles.searchFormComponent }>
                    <Text style = { styles.searchFormTitle }>NOMBRE</Text>
                    <TextInput style = { styles.searchFormInput } />
                </View>
                <View style = {{ width: '10%' }} />
                <View style = { styles.searchFormComponent }>
                    <Text style = { styles.searchFormTitle }>GÉNERO</Text>
                    <TextInput style = { styles.searchFormInput } />
                </View>
            </View>
        </View>
        <View>
            <View style = { styles.searchFormsDouble }>
                <View style = { styles.searchFormComponent }>
                    <Text style = { styles.searchFormTitle }>ESPECIE</Text>
                    <TextInput style = { styles.searchFormInput } />
                </View>
                <View style = {{ width: '10%' }} />
                <View style = { styles.searchFormComponent }>
                    <Text style = { styles.searchFormTitle }>RAZA</Text>
                    <TextInput style = { styles.searchFormInput } />
                </View>
            </View>
        </View>
        <View style = { styles.searchFormsSingle }>
            <Text style = { styles.searchFormTitle }>DESCRIPCIÓN</Text>
            <TextInput style = { [styles.searchFormInput, {height: 100}] }/>
        </View>
        <View style = { styles.searchFormsSingle }>
            <Text style = { styles.searchFormTitle }>NÚMERO DE IDENTIFICACIÓN / CHIP</Text>
            <TextInput style = { styles.searchFormInput }/>
        </View>
        <View style = { styles.searchButtonContainer }>
            <TouchableOpacity style = { [styles.searchButtonContainer, styles.searchButton ]}>
                <Text style = {{ fontFamily: 'Inter-Black', fontSize: 16 }}>AÑADIR</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default CreatePet