import { StyleSheet, Text, Image, TouchableOpacity, View, TextInput,FlatList } from 'react-native'
import { React, useState, useEffect, useContext } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { SessionContext } from '../context/sessionContext'
import styles from '../styles/petCard'
import images from '../constants/images'
import PetCardSimple from './petCardSimple'

const CreatePost = ({params}) => {
  let currentPost = useLocalSearchParams();
  //console.log(currentPost);
  
  let id_type = Number(currentPost.type);

  // Acceder al usuario de la sesion
  const { usernameSession } = useContext(SessionContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://192.168.231.18:4000/api/users/${usernameSession}/petsByUserName`).then(
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
    <View style = {{ justifyContent: 'center', alignItems: 'center'}}>
       <Text style = { styles.myPetsTitle }>MIS MASCOTAS</Text>
       <FlatList
            /*data = {[
                { id_pet: 1, name: 'PEPITO uyihu jik huijok jumkl, jiok lfdghgfh drgh rdggthgfgjf retatsyt restyj', photo: images.img_default_2, description: 'Soy un perrito muy pequeñito perdido entre sddfghnjmnhbsvfvgfhgmjhngbfvsdghmjghngbdfvsdfghmjhghnfgdbfsvdcfghnfngdfgtfhyjgrfsergdthjukughfgfrsedasfrgtgjhugygrf ', type: 'ENCONTRADO', location: 'Calle 3, direccion sur' },
                { id_pet: 3, name: 'PEPITO PEPITO PEPito', photo: images.img_default_1, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'SE BUSCA', location: 'Calle 3, direccion sur' },
                { id_pet: 6, name: 'PEPITO', photo: images.img_default_1, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'SE BUSCA', location: 'Calle 3, direccion sur' }
            ]}
            keyExtractor = {(item) => item.id_pet}*/
            data = {data}
            keyExtractor = {(item) => item.id_pet}
            renderItem = {({item}) => (
                <PetCardSimple content = {item} typePost = { id_type }/>
            )}
        />
    </View>
  )
}

export default CreatePost