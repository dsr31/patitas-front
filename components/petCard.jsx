import { StyleSheet, Text, TouchableOpacity, View, ViewBase } from 'react-native'
import {React, useState } from 'react'
import { Image } from 'react-native'
import styles from '../styles/petCard'
import icons from '../constants/icons'
import PetPostsModal from './petPostsModal'

const PetCard = ({ content:{ id_pet, pet_name, pet_profile_image, pet_description, chip_identifier, pet_genre, race_name, specie_name }, deletable }) => {

  let genre = 'DESCONOCIDO';

  if(pet_genre == 1){
    genre = 'MACHO';
  }
  else if(pet_genre == 2){
    genre = 'HEMBRA';
  } 
  let chip = 'Sin chip / identificación';
  if(chip_identifier != ''){
    chip = chip_identifier;
  }

  const [modalVisible, setModalVisible] = useState (false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style = { [styles.petShadow, styles.petCard]}>

        {modalVisible && <PetPostsModal id_pet={id_pet} visible = { modalVisible } closeModal = { closeModal }/>}

        <View style = { styles.upperSection }>
            <View style = {{width: '30%'}}>
                {/*<Image
                    source = { photo }
                    style = { styles.createImage }
  />*/}
            </View>
            <View style = {{width: '70%'}}>
                <TouchableOpacity style = { [styles.managePet, {backgroundColor: '#4082E4'}] }  onPress = {() => setModalVisible(true)} >
                    <Text style = { [styles.manageText, {width: '80%'}]}>VER POSTS</Text>
                    <Text style = { [styles.manageText, {width: '20%'}]}>{'>'}</Text>
                </TouchableOpacity>
                {deletable && (<TouchableOpacity style = { [styles.managePet, {backgroundColor: '#DE5858'}] }>
                    <Text style = { [styles.manageText, {width: '80%'}]}>BORRAR</Text>
                    <Text style = { [styles.manageText, {width: '20%'}]}>×</Text>
                </TouchableOpacity>)}
            </View>
        </View>
        <View style = { styles.bottomSection }>
            <View style = { styles.idSection }>
                <Text numberOfLines={1} style = { styles.idSectionName }>{pet_name}</Text>
                <Text style = { styles.idSectionChip }>{chip}</Text>
            </View>
            <View style = { styles.infoSection }>
                <View style = { styles.infoSectionLeft }>
                    <View style = { styles.infoSectionDisplay }>
                        <Text style = { styles.infoSectionDisplayTitle }>
                            ESPECIE:
                        </Text>
                        <Text style = { styles.infoSectionDisplayData }>
                            {specie_name}
                        </Text>
                    </View>
                    <View style = { styles.infoSectionDisplay }>
                        <Text style = { styles.infoSectionDisplayTitle }>
                            RAZA:
                        </Text>
                        <Text style = { styles.infoSectionDisplayData }>
                            {race_name}
                        </Text>
                    </View>
                </View>
                <View style = { [styles.infoSectionRight,styles.infoSectionDisplay] }>
                    <Text style = { styles.infoSectionDisplayTitle }>
                        GÉNERO:
                    </Text>
                    <Text style = { styles.infoSectionDisplayData }>
                        {genre}
                    </Text>
                </View>
            </View>
            <Text numberOfLines = {3} style = { [styles.infoSectionDisplayData, styles.infoSectionDescription] }>
                {pet_description}
            </Text>
        </View>
    </View>
  )
}

export default PetCard