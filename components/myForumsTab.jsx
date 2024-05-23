import { FlatList, View, ActivityIndicator, Text } from 'react-native'
import React from 'react'
import images from '../constants/images';
import ForumCardReply from './forumCardReply';
import styles from '../styles/reviewCard'
import { useState, useEffect } from 'react';

const MyForumsTab = ({iduserProfile}) => {
    
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`http://192.168.231.18:4000/api/users/${iduserProfile}/forums`).then(
        res => res.json()
      ).then(
        (resultado) => {
          setLoading(false);
          setData(resultado.body);
          //console.log(resultado.body)
        }, 
        (error) => {
          setLoading(true);
          console.warn("Houston tenemos un problema en la tab de mis foros");
        }
      )
    }, [])

  return (
    <View style = {{ height: '100%', backgroundColor: '#D5C59B', paddingTop: 10}}>
      {data && data != '' && loading == false ? (
        <FlatList
            /*data = {[
            { id: 1, title: 'Una preguntita aaaaaaaaaaaaaaa', photo: '', text: 'pues mira resolviendo tu duda, en este caso la respuesta seria aproximadamente asi de larga para poder comprobar la maquetacionpues mira resolviendo tu duda, en este caso la respuesta seria aproximadamente asi de larga para poder comprobar la maquetacionpues mira resolviendo tu duda, en este caso la respuesta seria aproximadamente asi de larga para poder comprobar la maquetacionpues mira resolviendo tu duda, en este caso la respuesta seria aproximadamente asi de larga para poder comprobar la maquetacion', id_reply: 10, date_reply: '', author: 'Pepe', username: 'erpepe' },
            { id: 2, title: 'pip i pipi aaaaaaaaaaaaa aaa sfg ggfdfg dgsdf ghadhh dfgsfhgh ', photo: images.img_default_2, text: 'cusha pisha una cosita que es que nostoy entendiendo sobre mi cachorro', id_reply: 0, date_reply: '', author: 'Pepe', username: 'erpepe' },
            { id: 3, title: 'Huevitos de cala ma aaa aaaaaaar aaaaaaaaaaaaaaaaaaa', photo: '', text: 'cusha pisha una cosita que es que nostoy entendiendo sobre mi cachorro', id_reply: '7', date_reply: '', author: 'Pepe', username: 'erpepe' },          
            ]}
            keyExtractor = {(item) => item.id}*/
            data = {data}
            keyExtractor = {(item) => item.id_forum}
            renderItem = {({item}) => (
                <ForumCardReply content = {item}/>
            )}
        />
      ) : loading ? (
        <ActivityIndicator size = "large" style ={{ marginTop: 250}}/>
      ) : (
        <Text style = { styles.withoutReviews }>No tienes foros por el momento.</Text>
      )}
    </View>
  )
}

export default MyForumsTab