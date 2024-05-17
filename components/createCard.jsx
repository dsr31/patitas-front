import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from '../styles/createCard'
import icons from '../constants/icons'
import { router } from 'expo-router'

const CreateCard = ({ content:{ id_type } }) => {
  let colorPrimaryCreate = '#58CF72';
  let colorSecondaryCreate = '#92FBAA';
  let imageCreate = icons.crearMascota;
  let nameCreate  = 'AÑADIR UNA NUEVA MASCOTA';
  let redirectRoute = '';

  if(id_type == 2){
    colorPrimaryCreate = '#DE5858';
    colorSecondaryCreate = '#FFB2B2';
    imageCreate = icons.crearSeBusca;
    nameCreate  = 'PUBLICAR "SE BUSCA"';
  }
  else if(id_type == 3){
    colorPrimaryCreate = '#DBA10C';
    colorSecondaryCreate = '#FCCC50';
    imageCreate = icons.crearEncontrado;
    nameCreate  = 'PUBLICAR "ENCONTRADO"';
  }
  else if(id_type == 4){
    colorPrimaryCreate = '#DE58A0';
    colorSecondaryCreate = '#FFC8E5';
    imageCreate = icons.crearBuscandoPareja;
    nameCreate  = 'PUBLICAR "BUSCANDO PAREJA"';
  }
  else if(id_type == 5){
    colorPrimaryCreate = '#4886FF';
    colorSecondaryCreate = '#B8D0FF';
    imageCreate = icons.crearAdoptame;
    nameCreate  = 'PUBLICAR "ADÓPTAME"';
  }
  else if(id_type == 6){
    colorPrimaryCreate = '#8D35E6';
    colorSecondaryCreate = '#CD9BFF';
    imageCreate = icons.crearForo;
    nameCreate  = 'PUBLICAR UN FORO';
  }

  const goToCreate = () => {(
    //router.push({ pathname: `(tabs)/posts/post/${name}`, params: name })
    router.push({ pathname: `./createContent/create/${id_type}`, params: id_type}) 
  )}

  return (
    <TouchableOpacity style = { [styles.postShadow, styles.postCard, {backgroundColor: colorPrimaryCreate}]} onPress = { goToCreate } >
        <View style = { [styles.imageContainer, {backgroundColor: colorSecondaryCreate}] }>
            <Image
                source = { imageCreate }
                style = { styles.createImage }
            />
        </View>
        <Text numberOfLines={1} style = { styles.createTitle }>{nameCreate}</Text>
    </TouchableOpacity>
  )
}

export default CreateCard