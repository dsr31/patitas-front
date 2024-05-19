import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from '../styles/postCard'
import icons from '../constants/icons'
import { router } from 'expo-router'
import images from '../constants/images'

const PostCard = ({ content:{ id_post, post_type, pet_name, photo, content, address } }) => {
  
  const photo_estatica = images.img_default_1;

  let post_name = 'SE BUSCA';
  let colorTypePost = '#DE5858';

  if(post_type == 2){
    post_name = 'ENCONTRADO';
    colorTypePost = '#DBA10C';
  }
  else if(post_type == 3){
    post_name = 'BUSCANDO PAREJA';
    colorTypePost = '#DE58A0'
  }
  else if(post_type == 4){
    post_name = 'ADOPTAME';
    colorTypePost = '#4082E4';
  }

  const goToThePost = () => {(
    router.push({ pathname: `(tabs)/posts/post/${id_post}`, params: id_post })
  )}

  return (
    <TouchableOpacity style = { styles.postCard} onPress = { goToThePost }>
      <View style = { [styles.typePostCard, {backgroundColor: colorTypePost}] }>
        <Text style = { styles.typePostCardText }>{post_name}</Text>
      </View>
      <View style = { styles.postContent }>
            <View style = { [styles.postShadow, styles.postContainerImage] }>
                <Image
                    source = { photo_estatica }
                    style = { styles.postImage }
                />
            </View>
            <View style = { [styles.postInfo, styles.postShadow] }>
                <Text numberOfLines={1} style = { styles.postName }>{pet_name}</Text>
                <Text numberOfLines={3} style = { styles.postDescription }>{content}</Text>
                <View style = { styles.postLocation }>
                    <Image source={ icons.location } style = {{ width: 15, height: 15}} />
                    <Text numberOfLines={1} style = { styles.textLocation }>{address}</Text>
                </View>
            </View>
      </View>
    </TouchableOpacity>
  )
}

export default PostCard