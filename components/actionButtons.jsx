import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from '../styles/dataForum'
import icons from '../constants/icons'

const ActionButtons = () => {
    return (
        <View style = { styles.forumActions }>
            <TouchableOpacity style = { styles.forumAction }>
            <Image
                source = { icons.responder }
                style  = { styles.iconsForum }
            />
            <Text style = { styles.actionsForum }>Responder</Text>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.forumAction }>
            <Image 
                source = { icons.prohibido }
                style  = { styles.iconsForum }
            />
            <Text style = { styles.actionsForum }>Reportar</Text>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.forumAction }>
            <Image
                source = { icons.compartir }
                style  = { styles.iconsForum }
            />
            <Text style = { styles.actionsForum }>Compartir</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ActionButtons