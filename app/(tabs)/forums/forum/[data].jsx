import { FlatList, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native'
import {React, useState, useEffect } from 'react'
import { useLocalSearchParams, Stack } from 'expo-router'
import images from '../../../../constants/images';
import styles from '../../../../styles/dataForum';
import icons from '../../../../constants/icons';
import ReplyCard from '../../../../components/replyCard';
import ActionButtons from '../../../../components/actionButtons';
import ImageModal from '../../../../components/imageModal';

const ForumPost = ({params}) => {
  let currentForum = useLocalSearchParams();
  let id_forum = currentForum.data;

  const [profileImage, setprofileImage] = useState();
  const [name, setname] = useState();
  const [username, setusername] = useState();
  const [title, settitle] = useState();
  const [content, setcontent] = useState();
  const [imagesPost, setimagesPost] = useState();
  const [replies, setreplies] = useState();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://192.168.166.18:4000/api/forums/${id_forum}`).then(
      res => res.json()
    ).then(
      (resultado) => {
        setLoading(false);
        setprofileImage(resultado.body[0].profileImage);
        setname(resultado.body[0].name);
        setusername(resultado.body[0].username);
        settitle(resultado.body[0].title);
        setcontent(resultado.body[0].content);
        setimagesPost(resultado.body[0].imagesPost);
        //setreplies(resultado.body[0].replies);

        //console.log(resultado.body[0])
      }, 
      (error) => {
        setLoading(true);
        console.warn("Houston tenemos un problema en la pagina de foro");
      }
    )
  }, [])

  useEffect(() => {
    fetch(`http://192.168.166.18:4000/api/forums/${id_forum}/replies`).then(
      res => res.json()
    ).then(
      (resultado) => {
        setreplies(resultado.body)
        //console.log(resultado.body)
      }, 
      (error) => {
        setLoading(true);
        console.warn("Houston tenemos un problema obteniendo las respuestas del foro");
      }
    )
  }, [])

  const profileImageStatic = images.img_default_4;
  /*
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
  */
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
            source = { profileImageStatic }
            style = { styles.profileImage }
          />
          <View style = { styles.userIDs }>
            <Text numberOfLines={1} style = { styles.userIDsText }>{name}</Text>
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
            {/*imagesPost.map((image, index) => (
              <TouchableOpacity key = { index } onPress = {() => pressedImageController(image)}>
                <Image key = { index } source = { image } style = { styles.imageForum } />
              </TouchableOpacity>
            ))*/}
        </ScrollView>
        <View style = { styles.line } />
        <ActionButtons />
        <View style = { styles.line } />
        {replies && replies != '' ? (
          replies.map((reply) => (
            <ReplyCard  key={reply.id_forum} reply={reply} actionButtons={<ActionButtons />} />
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