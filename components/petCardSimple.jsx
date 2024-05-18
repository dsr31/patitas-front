import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import styles from '../styles/petCard'

const PetCardSimple = ({ content:{ id_pet , name, photo }, typePost }) => {
  const goToSecondStep = () => {(
    router.push({ pathname: `(tabs)/createContent/create/secondStep/secondStep`, params: { id_pet, typePost }})
  )}

  return (
    <View style = { styles.simpleCard }>
        <View style = { styles.simpleImageContainer }>
            <Image
                source = { photo }
                style = { styles.createImage }
            />
        </View>
        <View style = {{ justifyContent: 'space-between'}}>
            <View>
                <Text numberOfLines={1} style = { styles.simplePetName }>{name}</Text>
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