import { FlatList, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import {React, useState} from 'react'
import { useLocalSearchParams, Stack } from 'expo-router'
import images from '../../../../constants/images';
import styles from '../../../../styles/dataForum';
import icons from '../../../../constants/icons';
import ReplyCard from '../../../../components/replyCard';
import ActionButtons from '../../../../components/actionButtons';
import ImageModal from '../../../../components/imageModal';

const ForumPost = () => {

  const profileImage = images.img_default_4;
  const author = 'Miriam Ramiress njihu uiji iojk jim ewsfega phy u gtfr';
  const username = 'miriamramirez13';
  const title = 'CAÍDA DE PELO GATITOS';
  const content = 'A mi gatito últimamente se le está cayendo de manera anormal el pelo del vientre. Adjunto fotos para que apreciéis el grado de caída capilar, espero que se aprecie lo suficiente.... ¿alguien sabe por qué le está pasando esto?¿es cosa de la edad o algo de la alimentación? \n \nCualquier aporte es bienvenido, ¡¡gracias!!';
  const imagesPost = [images.img_default_1, images.img_default_2, images.img_default_2, images.img_default_2];
  const replies2 = []; // este vacio
  const replies = [
    // id, author, username, content
    { id: 1, profile_pic: images.img_default_1, author: 'Esther', username: 'esther50', content: 'yooo, hablame al privado y te digo...'},
    { id: 2, profile_pic: images.img_default_3, author: 'Juan Manuel', username: 'jasper2000.j', content: '¿tienes epatulosca promodae cerca de casa? probablemente sus semillas le estén provocando urticaria'},
  ];

  // Variables para el modal
  const [modalVisible, setModalVisible] = useState (false);
  const [selectedImage, setSelectedImage] = useState (null);

  const pressedImageController = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };
  //////////////////////////
  
  return (
    <SafeAreaView style = {{ width: '100%', height: '100%' }} >
      <Stack.Screen options={{    
          headerTitle: "ATRÁS", 
          headerRight: () => (
              <View style = {{ width: 200, backgroundColor: '#8D35E6', alignItems: 'center' }}>
                  <Text style = {{ fontFamily: 'Inter-Black', fontSize: 16, color: '#fff' }}>FORO</Text>
              </View>
          ) }} 
      />
      <ScrollView style = {{ flex: 1, marginHorizontal: 10 }}>
        <View style = {{ flexDirection: 'row', marginTop: 10 }}>
          <Image 
            source = { profileImage }
            style = { styles.profileImage }
          />
          <View style = { styles.userIDs }>
            <Text numberOfLines={1} style = { styles.userIDsText }>{author}</Text>
            <Text numberOfLines={1} style = { styles.usernameStyle }>@{username}</Text>
          </View>
        </View>
        <Text style = { styles.forumTitle }>
          {title}
        </Text>
        <Text style = { styles.contentForum }>
          {content}
        </Text>
        <ScrollView horizontal>
            {imagesPost.map((image, index) => (
              <TouchableOpacity key = { index } onPress = {() => pressedImageController(image)}>
                <Image key = { index } source = { image } style = { styles.imageForum } />
              </TouchableOpacity>
            ))}
        </ScrollView>
        <View style = { styles.line } />
        <ActionButtons />
        <View style = { styles.line } />
        {replies.length > 0 ? (
          replies.map((reply) => (
            <ReplyCard  key={reply.id} reply={reply} actionButtons={<ActionButtons />} />
          ))
        ) : (
          <View style = { styles.noRepliesContainer }>
            <Text style = { styles.usernameStyle }>Sin respuestas.</Text>
          </View>
        )}
        {selectedImage && (
          <ImageModal image = { selectedImage } visible = { modalVisible } closeImageModal = { closeModal } />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForumPost