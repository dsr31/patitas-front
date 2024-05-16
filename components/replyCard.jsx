import { Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from '../styles/dataForum'

const ReplyCard = ({ reply, actionButtons }) => {

  return (
    <View key = { reply.id } style={{ marginVertical: 5 }}>
        <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
                source = { reply.profile_pic }
                style  = { styles.replyProfilePic }
            />
            <Text style = {{ fontFamily: 'Inter-Bold', marginRight: 10 }}>{reply.author}</Text>
            <Text style = { styles.usernameStyle }>@{reply.username}</Text>
        </View>
        <View style = {{ borderLeftWidth: 1, borderLeftColor: '#000', marginLeft: 20, marginTop: 5, paddingLeft: 10 }}>
            <Text style = { styles.contentForum }>
                {reply.content}
            </Text>
            {actionButtons}
        </View>
    </View>
  )
}

export default ReplyCard