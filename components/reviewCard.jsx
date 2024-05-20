import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from '../styles/reviewCard'
import icons from '../constants/icons'

const ReviewCard = ({ content:{ id_rating, description, name, username, rating } }) => {
  //prueba
  return (
    <View style = { styles.reviewCard }>
        <View style = { styles.upperRow }>
            <View style = { styles.userInfo }>
                <Image source = { icons.perfil } style = { styles.icon }/>
                <Text numberOfLines={1} ellipsizeMode="tail" style = { [styles.userInfoText,{maxWidth: 150}] }>{name}</Text>
                <Text style = { styles.userInfoText }> - @</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style = { [styles.userInfoText,{flex: 1}] }>{username}</Text>
            </View>
            <View style = { styles.userRating }>
                <Text style = { styles.userInfoText }> {rating}</Text>
                <Text style = { styles.userInfoText }>/5</Text>
                <Image source = { icons.estrella } style = { styles.icon }/>
            </View>
        </View>
        <View  style = { styles.lowerRow }>
            <Text style = { styles.userRatingText }>
                {description} 
            </Text>
        </View>
    </View>
  )
}

export default ReviewCard