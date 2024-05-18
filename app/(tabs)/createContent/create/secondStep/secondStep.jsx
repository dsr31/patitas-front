import { ScrollView, Text, View, TextInput, Image, SafeAreaView, TouchableOpacity, Modal } from 'react-native'
import {React, useState} from 'react'
import { useLocalSearchParams, Stack } from 'expo-router'
import images from '../../../../../constants/images';
import styles from '../../../../../styles/secondStep';
import icons from '../../../../../constants/icons';
import ImageModal from '../../../../../components/imageModal';
import CreatePet from '../../../../../components/createPet';
import CreatePost from '../../../../../components/createPost';
import CreateForum from '../../../../../components/createForum';

const SecondStep = ({params}) => {
  let currentPost = useLocalSearchParams();
  //console.log(currentPost);

    let id_type = currentPost.typePost;
    let id_pet = currentPost.id_pet;

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

  const petSelected = { name: 'PANCHITOtttttttttthhhhhhhhhh' }

  const [isModalVisible, setModalVisible] = useState(false);
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
            <TouchableOpacity onPress = { modalClose } style = { styles.modalButton } >
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
                            source = { images.img_default_3 }
                            style  = { styles.imgPet }
                        />
                        <View style = {{ width: '65%' }}>
                            <Text style = { styles.selectedPetLabel }>MASCOTA ELEGIDA</Text>
                            <Text style = { styles.selectedPetName } numberOfLines={1}>{petSelected.name}</Text>
                        </View>
                    </View>
                </View>
                <View>
                <Text style = { [styles.searchFormTitle, styles.titleSpacing] }>AÑADIR FOTOS</Text>
                    <View style = { styles.displayUploadPhotos }>
                        <Image
                        source = { images.img_default_0 }
                        style  = { [styles.addImage, {marginRight: 8}] }
                        />
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
                    <TextInput style = { [styles.searchFormInput, {height: 100}] }  />
                    <Text style = { [styles.searchFormTitle, styles.titleSpacing] }>UBICACIÓN</Text>
                    <TextInput style = { styles.searchFormInput } />
                    <Text style = { [styles.searchFormTitle, styles.titleSpacing] }>FECHA DEL SUCESO</Text>
                    <TextInput style = { styles.searchFormDate } />
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