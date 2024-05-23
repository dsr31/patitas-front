import { TouchableOpacity, Text, View } from 'react-native'
import { React, useContext } from 'react'
import { Image } from 'react-native'
import styles from '../styles/forumCard'
import icons from '../constants/icons'
import { router } from 'expo-router'
import { SessionContext } from '../context/sessionContext'

const ForumCardReply = ({ content:{ id_forum, title, content, forum_image_1, id_reply, id_user, name, username } }) => {
  let colorTypeforum = '#8D35E6';
  let photo = '';

  // Acceder al usuario de la sesion
  const { usernameSession } = useContext(SessionContext);

  const redirigirAForum = () => {
    let destino = id_forum;
    if(id_reply != 0){
        destino = id_reply;
    }
    //console.log(destino);
    if(usernameSession == username){
        router.push({ pathname: `./../forums/forum/${destino}`, params: destino}) 
    }
    else{
        router.push({ pathname: `./../../forums/forum/${destino}`, params: destino}) 
    }
    
  }

  return (
    <TouchableOpacity style = { styles.forumCard} onPress={() => {redirigirAForum()}}>
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

export default ForumCardReply