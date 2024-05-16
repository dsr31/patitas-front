import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from '../styles/forumCard'
import icons from '../constants/icons'

const ForumCardReply = ({ content:{ id, title, photo, text, id_reply, date_reply, author, username } }) => {
  let colorTypeforum = '#8D35E6';
  
  return (
    <View style = { styles.forumCard}>
      <View style = { [styles.titleforumCard, {backgroundColor: colorTypeforum}] }>
        {id_reply != 0 && (
            <Text numberOfLines={1} style = { styles.respondingText }>Respondiendo a: </Text>
        )}
        <Text numberOfLines={1} style = { styles.titleforumCardText }>{title}</Text>
      </View>
      <View style = { styles.forumContent }>
            <View style = { [styles.forumShadow, styles.forumContainerImage] }>
                {photo !== '' && (
                    <Image
                        source = { photo }
                        style = { styles.forumImage }
                    />
                )}
            </View>
            {photo !== '' ? (
                <View style = { [styles.forumInfo, styles.forumShadow] }>
                    <Text numberOfLines={5} style = { styles.forumDescription }>{text}</Text>
                    <View style = { styles.forumUser }>
                        <Image source={ icons.perfil } style = {{ width: 15, height: 15}} />
                        <Text numberOfLines={1} style = { styles.textUser }>{author} - @{username}</Text>
                    </View>
                </View>
            ):
                <View style = { [styles.forumInfo, styles.forumShadow, styles.forumInfoNoImage] }>
                    <Text numberOfLines={5} style = { styles.forumDescription }>{text}</Text>
                    <View style = { styles.forumUser }>
                        <Image source={ icons.perfil } style = {{ width: 15, height: 15}} />
                        <Text numberOfLines={1} style = { styles.textUser }>{author} - @{username}</Text>
                    </View>
                </View>
            }
      </View>
    </View>
  )
}

export default ForumCardReply