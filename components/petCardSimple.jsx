import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import styles from '../styles/petCard'
import images from '../constants/images'

const PetCardSimple = ({ content:{ id_pet , pet_name, pet_profile_image }, typePost }) => {
  const goToSecondStep = () => {(
    router.push({ pathname: `(tabs)/createContent/create/secondStep/secondStep`, params: { id_pet, typePost, pet_name, pet_profile_image }})
  )}

  return (
    <View style = { styles.simpleCard }>
        <View style = { styles.simpleImageContainer }>
            <Image
                source = { pet_profile_image != '' ? {uri:pet_profile_image} : images.img_default_2 }
                style = { styles.createImage }
            />
        </View>
        <View style = {{ justifyContent: 'space-between'}}>
            <View>
                <Text numberOfLines={1} style = { styles.simplePetName }>{pet_name}</Text>
            </View>
            <View>
                <TouchableOpacity style = { styles.simpleButtonSelectContainer } onPress = { goToSecondStep } >
                    <Text style = { styles.simpleButtonSelect }>ELEGIR</Text>
                    <Text style = { styles.simpleButtonSelect }>{'>'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default PetCardSimple