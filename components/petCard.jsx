import { StyleSheet, Text, TouchableOpacity, View, ViewBase } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from '../styles/petCard'
import icons from '../constants/icons'

const PetCard = ({ content:{ id, name, photo, description, type, location } }) => {

  return (
    <View style = { [styles.petShadow, styles.petCard]}>
        <View style = { styles.upperSection }>
            <View style = {{width: '30%'}}>
                <Image
                    source = { photo }
                    style = { styles.createImage }
                />
            </View>
            <View style = {{width: '70%'}}>
                <TouchableOpacity style = { [styles.managePet, {backgroundColor: '#4082E4'}] }>
                    <Text style = { [styles.manageText, {width: '80%'}]}>VER POSTS</Text>
                    <Text style = { [styles.manageText, {width: '20%'}]}>{'>'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = { [styles.managePet, {backgroundColor: '#DE5858'}] }>
                    <Text style = { [styles.manageText, {width: '80%'}]}>BORRAR</Text>
                    <Text style = { [styles.manageText, {width: '20%'}]}>×</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style = { styles.bottomSection }>
            <View style = { styles.idSection }>
                <Text numberOfLines={1} style = { styles.idSectionName }>{name}</Text>
                <Text style = { styles.idSectionChip }>Sin chip /identificación</Text>
            </View>
            <View style = { styles.infoSection }>
                <View style = { styles.infoSectionLeft }>
                    <View style = { styles.infoSectionDisplay }>
                        <Text style = { styles.infoSectionDisplayTitle }>
                            ESPECIE:
                        </Text>
                        <Text style = { styles.infoSectionDisplayData }>
                            Perro
                        </Text>
                    </View>
                    <View style = { styles.infoSectionDisplay }>
                        <Text style = { styles.infoSectionDisplayTitle }>
                            RAZA:
                        </Text>
                        <Text style = { styles.infoSectionDisplayData }>
                            Cocker Spaniel
                        </Text>
                    </View>
                </View>
                <View style = { [styles.infoSectionRight,styles.infoSectionDisplay] }>
                    <Text style = { styles.infoSectionDisplayTitle }>
                        GÉNERO:
                    </Text>
                    <Text style = { styles.infoSectionDisplayData }>
                        HEMBRA
                    </Text>
                </View>
            </View>
            <Text numberOfLines = {3} style = { [styles.infoSectionDisplayData, styles.infoSectionDescription] }>
                Descripcionn Descripcionn Descripcionn Descripcionn Descripcionn Descripcionn v vDescripcionnDescripcionnDescripcionn DescripcionnDescripcionn 
            </Text>
        </View>
    </View>
  )
}

export default PetCard