import { FlatList, View, ActivityIndicator, Text } from 'react-native'
import React from 'react'
import images from '../constants/images';
import PetCard from './petCard';
import styles from '../styles/reviewCard'
import { useState, useEffect } from 'react';

const MyPetsTab = ({iduserProfile, deletable}) => {
    
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`http://192.168.166.18:4000/api/users/${iduserProfile}/pets`).then(
        res => res.json()
      ).then(
        (resultado) => {
          setLoading(false);
          setData(resultado.body);
          //console.log(resultado.body)
        }, 
        (error) => {
          setLoading(true);
          console.warn("Houston tenemos un problema en la tab de mis mascotas");
        }
      )
    }, [])

  return (
    <View style = {{ height: '100%', backgroundColor: '#D5C59B', paddingTop: 10}}>
      {data && data != '' && loading == false ? (
        <FlatList
            /*data = {[
                { id: 1, name: 'PEPITO uyihu jik huijok jumkl, jiok l', photo: images.img_default_2, description: 'Soy un perrito muy pequeñito perdido entre sddfghnjmnhbsvfvgfhgmjhngbfvsdghmjghngbdfvsdfghmjhghnfgdbfsvdcfghnfngdfgtfhyjgrfsergdthjukughfgfrsedasfrgtgjhugygrf ', type: 'ENCONTRADO', location: 'Calle 3, direccion sur' },
                { id: 3, name: 'PEPITO PEPITO PEPito', photo: images.img_default_1, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'SE BUSCA', location: 'Calle 3, direccion sur' },
                { id: 6, name: 'PEPITO', photo: images.img_default_1, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'SE BUSCA', location: 'Calle 3, direccion sur' }
            ]}
            keyExtractor = {(item) => item.id}*/
            data = {data}
            keyExtractor = {(item) => item.id_pet}
            renderItem = {({item}) => (
                <PetCard content = {item} deletable = {deletable}/>
            )}
        />
      ) : loading ? (
        <ActivityIndicator size = "large" style ={{ marginTop: 250}}/>
      ) : (
        <Text style = { styles.withoutReviews }>Aún no has añadido mascotas.</Text>
      )}
    </View>
  )
}

export default MyPetsTab