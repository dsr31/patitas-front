import { FlatList, View, Dimensions, Modal, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import images from '../constants/images';
import { useState, useEffect } from 'react';
import styles from '../styles/filterModal'
import icons from '../constants/icons';
import PostCard from './postCard';

const PetPostsModal = ({id_pet, visible, closeModal}) => {
    const { width: screenWidth } = Dimensions.get('window');
    const imageHeight = screenWidth;
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`http://192.168.166.18:4000/api/pets/${id_pet}/posts`).then(
        res => res.json()
      ).then(
        (resultado) => {
          setLoading(false);
          setData(resultado.body);
          //console.log(resultado.body)
        }, 
        (error) => {
          setLoading(true);
          console.warn("Houston tenemos un problema en los posts de mi mascota");
        }
      )
    }, [])

  return (
    <Modal visible = { visible } transparent = { false } animationType = "fade" onRequestClose = { closeModal }>
        <View style = { styles.header }>
            <Image
                source = { images.logov3 }
                style  = { styles.logoHeader }
            />        
            <View style={styles.spacer} />
            <TouchableOpacity onPress = { closeModal }>
                <Image 
                    source = { icons.cerrar }
                    style  = { styles.iconHeader } 
                />
            </TouchableOpacity>
        </View>
        <View style = {{ width: '100%', height: '100%', backgroundColor: '#D5C59B', position: 'absolute' }}>
          {data && data != '' && loading == false ? (
            <FlatList
                style = {{marginTop: 100}}
                data = {data}
                keyExtractor = {(item) => item.id_post}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress = { closeModal }><PostCard content = {item}/></TouchableOpacity>
                )}
            />
          ) : loading ? (
            <ActivityIndicator size = "large" style ={{ marginTop: 250}}/>
          ) : (
            <Text style = { { marginTop: 100, textAlign: 'center', fontFamily: 'Inter-Regular'} }>Sin publicaciones asociadas aún.</Text>
          )}
        </View>
    </Modal>
  )
}

export default PetPostsModal