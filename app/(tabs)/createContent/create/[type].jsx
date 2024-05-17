import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import {React, useState} from 'react'
import { useLocalSearchParams, Stack } from 'expo-router'
import images from '../../../../constants/images';
import styles from '../../../../styles/dataPost';
import icons from '../../../../constants/icons';
import ImageModal from '../../../../components/imageModal';
import CreatePet from '../../../../components/createPet';
import CreatePost from '../../../../components/createPost';
import CreateForum from '../../../../components/createForum';

const CreateContentType = ({params}) => {
  let currentPost = useLocalSearchParams();
  //console.log(currentPost);

  let id_type = Number(currentPost.type);
  let name_type = 'NUEVA MASCOTA';
  let colorTypePost = '#58CF72';
  let CreationComponent = CreatePet;

  if(id_type == 2){
    colorTypePost = '#DE5858';
    name_type = 'SE BUSCA';
    CreationComponent = () => <CreatePost type = { currentPost.type } />;
  }
  if(id_type == 3){
    colorTypePost = '#DBA10C';
    name_type = 'ENCONTRADO';
    CreationComponent = () => <CreatePost type = { currentPost.type } />
  }
  else if(id_type == 4){
    colorTypePost = '#DE58A0';
    name_type = 'BUSCANDO PAREJA';
    CreationComponent = () => <CreatePost type = { currentPost.type } />
  }
  else if(id_type == 5){
    colorTypePost = '#4886FF';
    name_type = 'ADÓPTAME';
    CreationComponent = () => <CreatePost type = { currentPost.type } />
  }
  else if(id_type == 6){
    colorTypePost = '#8D35E6';
    name_type = 'NUEVO FORO';
    CreationComponent = CreateForum;
  }

  return (
    <SafeAreaView style = {{ width: '100%', height: '100%', backgroundColor: '#E2D8BE' }} >
        <Stack.Screen options={{    
            headerTitle: "ATRÁS", 
            headerRight: () => (
                <View style = {{ width: 200, backgroundColor: colorTypePost, alignItems: 'center'}}>
                    <Text style = {{ fontFamily: 'Inter-Black', fontSize: 16, color: '#fff' }}>{name_type}</Text>
                </View>
            ) }} 
        />
        <View style = {{ flex: 1, marginHorizontal: 10 }}>
            <CreationComponent />
        </View>
    </SafeAreaView>
  )
}

export default CreateContentType