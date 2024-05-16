import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from '../styles/postCard'
import icons from '../constants/icons'
import { router } from 'expo-router'

const PostCard = ({ content:{ id, name, photo, description, type, location } }) => {
  let colorTypePost = '#E44040';

  if(type == 'ENCONTRADO'){
    colorTypePost = '#DBA10C';
  }
  else if(type == 'BUSCANDO PAREJA'){
    colorTypePost = '#DE58A0'
  }
  else if(type == 'ADÓPTAME'){
    colorTypePost = '#4082E4';
  }

  const goToThePost = () => {(
    router.push({ pathname: `./posts/post/${name}`, params: name })
  )}

  return (
    <TouchableOpacity style = { styles.postCard} onPress = { goToThePost }>
      <View style = { [styles.typePostCard, {backgroundColor: colorTypePost}] }>
        <Text style = { styles.typePostCardText }>{type}</Text>
      </View>
      <View style = { styles.postContent }>
            <View style = { [styles.postShadow, styles.postContainerImage] }>
                <Image
                    source = { photo }
                    style = { styles.postImage }
                />
            </View>
            <View style = { [styles.postInfo, styles.postShadow] }>
                <Text numberOfLines={1} style = { styles.postName }>{name}</Text>
                <Text numberOfLines={3} style = { styles.postDescription }>{description}</Text>
                <View style = { styles.postLocation }>
                    <Image source={ icons.location } style = {{ width: 15, height: 15}} />
                    <Text numberOfLines={1} style = { styles.textLocation }>{location}</Text>
                </View>
            </View>
      </View>
    </TouchableOpacity>
  )
}

export default PostCard