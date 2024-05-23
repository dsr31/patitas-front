import { ScrollView, Text, View, TextInput, Image, SafeAreaView, TouchableOpacity, Modal, TouchableHighlight } from 'react-native'
import {React, useState} from 'react'
import { useLocalSearchParams, Stack } from 'expo-router'
import images from '../../../../../constants/images';
import styles from '../../../../../styles/secondStep';
import icons from '../../../../../constants/icons';
import ImageModal from '../../../../../components/imageModal';
import CreatePet from '../../../../../components/createPet';
import CreatePost from '../../../../../components/createPost';
import CreateForum from '../../../../../components/createForum';
import * as ImagePicker from "expo-image-picker";
import { router } from 'expo-router';

const SecondStep = ({params}) => {
  let currentPost = useLocalSearchParams();
  //console.log(currentPost);

    let id_type = currentPost.typePost;
    let real_type = id_type - 1;
    let id_pet = currentPost.id_pet;
    let pet_name = currentPost.pet_name;
    let pet_photo = currentPost.pet_profile_image;

  if(id_type == 2){
    colorTypePost = '#DE5858';
    name_type = 'SE BUSCA';
  }
  if(id_type == 3){
    colorTypePost = '#DBA10C';
    name_type = 'ENCONTRADO';
  }
  else if(id_type == 4){
    colorTypePost = '#DE58A0';
    name_type = 'BUSCANDO PAREJA';
  }
  else if(id_type == 5){
    colorTypePost = '#4886FF';
    name_type = 'ADÓPTAME';
  }
  else if(id_type == 6){
    colorTypePost = '#8D35E6';
    name_type = 'NUEVO FORO';
  }

  const petSelected = { id_pet }

  const [isModalVisible, setModalVisible] = useState(false);
  const [photoPost, setPhotoPost] = useState();
  const [textPost, setTextPost] = useState();
  const [locationPost, setLocationPost] = useState();

  const confirmation = () => {
    setModalVisible(true);
  }
  const modalClose = () => {
    setModalVisible(false);
  }
  const ModalConfirmacion = () => (
    <Modal transparent = { true } visible = { isModalVisible } animationType = "fade">
      <View style = { styles.modalStyle }>
        <View style = {{ width: '100%', paddingHorizontal: 30 }}>
          <View style = { styles.modalTitle }>
            <Text style = { styles.modalTitleText }>¿Estás seguro que quieres publicar este post?</Text>
          </View>
          <View style = { styles.modalButtons }>
            <TouchableOpacity onPress = { crearPublicacion } style = { styles.modalButton } >
              <Text style = { styles.modalButtonText }>Sí, publicar</Text>
            </TouchableOpacity>
            <View style = {{ height: '100%', width: 1, backgroundColor: '#000' }} />
            <TouchableOpacity onPress = { modalClose } style = { styles.modalButton }>
              <Text style = { styles.modalButtonText }>No, cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
  const crearPublicacion = async () => {
    let url_request = "http://192.168.166.18:4000/api/posts";
    let enviarFormulario = await fetch( url_request, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        "post_type" : real_type, "content" : textPost, "id_pet" : id_pet, "images": '', "status": 0, "address": locationPost, "date_add": '', "post_image_1": photoPost.uri, "post_image_2": '', "post_image_3": '',"post_image_4": ''                                                   
      })
    })
    enviarFormulario = await enviarFormulario.json();
    if(enviarFormulario){
      console.log(enviarFormulario)
      router.push('../../../profiles');
    }
  }
  const aux = async (photoSelected) => {
    try{
        setPhotoPost({uri: photoSelected});
    }
    catch(error){}
  }
  const cargarImagen = async () => {
    try {
        let response = await ImagePicker.requestMediaLibraryPermissionsAsync();
        response = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1
        });
        if(!response.canceled){
            await aux(response.assets[0].uri);
        }
    }
    catch(error){}
  }

  return (
    <SafeAreaView style = {{ width: '100%', height: '100%', backgroundColor: '#E2D8BE' }} >
        <ScrollView>
            <Stack.Screen options={{    
                headerTitle: "ATRÁS", 
                headerRight: () => (
                    <View style = {{ width: 200, backgroundColor: colorTypePost, alignItems: 'center'}}>
                        <Text style = { styles.headerType }>{name_type}</Text>
                    </View>
                ) }} 
            />
            <View style = {{ flex: 1, marginHorizontal: 10 }}>
                <View style = { styles.selectedPetCardContainer }>
                    <View style = { styles.selectedPetCard }>
                        <Image 
                            source = { pet_photo != '' ? {uri:pet_photo} : images.img_default_2 }
                            style  = { styles.imgPet }
                        />
                        <View style = {{ width: '65%' }}>
                            <Text style = { styles.selectedPetLabel }>MASCOTA ELEGIDA</Text>
                            <Text style = { styles.selectedPetName } numberOfLines={1}>{pet_name}</Text>
                        </View>
                    </View>
                </View>
                <View>
                <Text style = { [styles.searchFormTitle, styles.titleSpacing] }>AÑADIR FOTOS</Text>
                    <View style = { styles.displayUploadPhotos }>
                        <TouchableOpacity onPress = {()=> cargarImagen() }><Image
                        source = { photoPost ? photoPost : images.img_default_0 }
                        style  = { [styles.addImage, {marginRight: 8}] }
                        /></TouchableOpacity>
                        <Image
                        source = { images.img_default_0 }
                        style  = { [styles.addImage, {marginHorizontal: 8}] }
                        />
                        <Image
                        source = { images.img_default_0 }
                        style  = { [styles.addImage, {marginHorizontal: 8}] }
                        />
                        <Image
                        source = { images.img_default_0 }
                        style  = { [styles.addImage, {marginLeft: 8}] }
                        />
                    </View>
                    <Text style = { [styles.searchFormTitle, styles.titleSpacing] }>TEXTO</Text>
                    <TextInput style = { [styles.searchFormInput, {height: 100}] } onChangeText = {(e)=> setTextPost(e) } />
                    <Text style = { [styles.searchFormTitle, styles.titleSpacing] }>UBICACIÓN</Text>
                    <TextInput style = { styles.searchFormInput } onChangeText = {(e)=> setLocationPost(e) }  />
                    <Text style = { [styles.searchFormTitle, styles.titleSpacing] }>FECHA DEL SUCESO</Text>
                    <Text style = { [styles.searchFormDate, {paddingTop: 10}] }>24 / 05 / 2024</Text>
                    <View style = { styles.searchButtonContainer }>
                        <TouchableOpacity style = { [styles.searchButtonContainer, styles.searchButton ]} onPress = { confirmation }>
                            <Text style = {{ fontFamily: 'Inter-Black', fontSize: 16 }}>PUBLICAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ModalConfirmacion />
        </ScrollView>
    </SafeAreaView>
  )
}

export default SecondStep