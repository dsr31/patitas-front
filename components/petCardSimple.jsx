import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from '../styles/petCard'

const PetCardSimple = ({ content:{ id, name, photo } }) => {

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
                <TouchableOpacity style = { styles.simpleButtonSelectContainer }>
                    <Text style = { styles.simpleButtonSelect }>ELEGIR</Text>
                    <Text style = { styles.simpleButtonSelect }>{'>'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default PetCardSimple