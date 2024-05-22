import { FlatList, View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import images from '../constants/images';
import styles from '../styles/reviewCard'
import ReviewCard from './reviewCard';
import { useState, useEffect } from 'react';

const MyReviewsTab = ({iduserProfile}) => {
    
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`http://192.168.1.66:4000/api/users/${iduserProfile}/reviews`).then(
        res => res.json()
      ).then(
        (resultado) => {
          setLoading(false);
          setData(resultado.body);
        }, 
        (error) => {
          setLoading(true);
          console.warn("Houston tenemos un problema en la tabs de mis valoraciones");
        }
      )
    }, [])

  return (
    <View style = {{ height: '100%', backgroundColor: '#D5C59B', paddingTop: 10}}>
      
      {data && data != '' && loading == false ? (
        <FlatList
          /*data = {[
          { id: 1, text:'Todo bien con este usuario.', author:'Lucia S.', username:'luciiiis', rating: 3.4 },
          { id: 2, text:'Muy amable, siempre resuelve mis dudas y da excelentes consejos.', author:'Elgu Sanillo', username:'elgusanillo105', rating: 5 },
          { id: 3, text:'Me adoptó un perrito hace tiempo. Buen trato, aunque algo escueto. Me adoptó un perrito hace tiempo. Buen trato, aunque algo escueto.', author:'Pedro Lópezzxdfg esrgdthyj rgethserfgdth wergthfy', username:'pedritolopez125467894567893', rating: 5 },
          { id: 4, text:'Me adoptó un perrito hace tiempo. Buen trato, aunque algo escueto. Me adoptó un perrito hace tiempo. Buen trato, aunque algo escueto.', author:'Pedro Lópezzxdfg esrgdthyj rgethserfgdth wergthfy', username:'pedritolopez125467894567893', rating: 3.8 },
          { id: 5, text:'Me adoptó un perrito hace tiempo. Buen trato, aunque algo escueto. Me adoptó un perrito hace tiempo. Buen trato, aunque algo escueto.', author:'Ben', username:'benitolopez89765467890125467894567893', rating: 4.5 },
          
          ]}
          keyExtractor = {(item) => item.id}*/
          data = {data}
          keyExtractor = {(item) => item.id_rating}
          renderItem = {({item}) => (
              <ReviewCard content = {item}/>
          )}
      />
      ) : loading ? (
        <ActivityIndicator size = "large" style ={{ marginTop: 250}}/>
      ) : (
        <Text style = { styles.withoutReviews }>Sin reseñas.</Text>
      )}
          
    </View>
  )
}

export default MyReviewsTab