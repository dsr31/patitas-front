import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from '../styles/forumCard'
import icons from '../constants/icons'
import { router } from 'expo-router'

const ForumCard = ({ content:{ id_forum, title, forum_image_1, content, name, username } }) => {
  let colorTypeforum = '#8D35E6';
  
  const goToTheForum = () => {(
    router.push({ pathname: `(tabs)/forums/forum/${id_forum}`, params: id_forum })
  )}

  return (
    <TouchableOpacity style = { styles.forumCard} onPress = { goToTheForum }>
      <View style = { [styles.titleforumCard, {backgroundColor: colorTypeforum}] }>
        <Text numberOfLines={2} style = { styles.titleforumCardText }>{title}</Text>
      </View>
      <View style = { styles.forumContent }>
            <View style = { [styles.forumShadow, styles.forumContainerImage] }>
                {forum_image_1 !== '' && (
                    <Image
                        source = { images }
                        style = { styles.forumImage }
                    />
                )}
            </View>
            {forum_image_1 !== '' ? (
                <View style = { [styles.forumInfo, styles.forumShadow] }>
                    <Text numberOfLines={5} style = { styles.forumDescription }>{content}</Text>
                    <View style = { styles.forumUser }>
                        <Image source={ icons.perfil } style = {{ width: 15, height: 15}} />
                        <Text numberOfLines={1} style = { styles.textUser }>{name} - @{username}</Text>
                    </View>
                </View>
            ):
                <View style = { [styles.forumInfo, styles.forumShadow, styles.forumInfoNoImage] }>
                    <Text numberOfLines={5} style = { styles.forumDescription }>{content}</Text>
                    <View style = { styles.forumUser }>
                        <Image source={ icons.perfil } style = {{ width: 15, height: 15}} />
                        <Text numberOfLines={1} style = { styles.textUser }>{name} - @{username}</Text>
                    </View>
                </View>
            }
      </View>
    </TouchableOpacity>
  )
}

export default ForumCard