import { Text, Image, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import {React, useState, useEffect, useContext} from 'react'
import styles from '../styles/filterModal'
import { router } from 'expo-router'
import images from '../constants/images'
import { Picker } from '@react-native-picker/picker'
import { SessionContext } from '../context/sessionContext'
import * as ImagePicker from "expo-image-picker";

const CreatePet = () => {

  /*const goToCreate = () => {(
    //router.push({ pathname: `(tabs)/posts/post/${name}`, params: name })
  )}*/

  // Acceder al usuario de la sesion
  const { usernameSession } = useContext(SessionContext);

  const [genredefault, setgenredefault] = useState();
  const [speciedefault, setspeciedefault] = useState();
  const [racedefault, setracedefault] = useState();
  const [registerPet, setregisterPet] = useState({
    photo: '',
    user: '',
    name:'',
    description:'',
    chip: ''
  })
  
 //Conexion base de datos
 const [data, setData] = useState();
 useEffect(() => {
   fetch(`http://192.168.166.18:4000/api/users/${usernameSession}`).then(
     res => res.json()
   ).then(
     (resultado) => {
       //setData(resultado.body);
       //console.log(resultado.body)
       setregisterPet({...registerPet, user:resultado.body[0].id_user});
     }, 
     (error) => {
       console.warn("Houston tenemos un problema en obtencion de razas");
     }
   )
 }, [])

 const crearMascota = async () => {
    let url_request = "http://192.168.166.18:4000/api/pets";
    let enviarFormulario = await fetch( url_request, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        "pet_name" : registerPet.name, "pet_description" : registerPet.description, "chip_identifier" : registerPet.chip, "pet_genre" : genredefault, "pet_date_add" : '', "pet_id_race" : racedefault, "pet_id_user": registerPet.user, "pet_profile_image": registerPet.photo.uri
      })
    })
    enviarFormulario = await enviarFormulario.json();
    if(enviarFormulario){
        console.log(enviarFormulario)
      router.push('../../profiles');
    }
  }
  const aux = async (photoSelected) => {
    try{
        setregisterPet({...registerPet, photo: {uri: photoSelected}});
    }
    catch(error){

    }
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
    catch(error){
        
    }
  }

  return (
    <ScrollView>
        <View style = { styles.addPhotoSection }>
            <Text style = { styles.addPhotoText }>FOTO DE PERFIL</Text>
            <TouchableOpacity onPress = {()=> cargarImagen() }>
                <Image
                    source = { registerPet.photo ? registerPet.photo : images.img_default_0 }
                    style = {{ width: 110, height: 110, resizeMode: 'contain'}}
                />
            </TouchableOpacity>
        </View>
        <View style = { styles.dividerLine } />
        <View>
            <View style = { styles.searchFormsDouble }>
                <View style = { styles.searchFormComponent }>
                    <Text style = { styles.searchFormTitle }>NOMBRE</Text>
                    <TextInput style = { styles.searchFormInput } onChangeText = { (e) => setregisterPet({ ...registerPet, name: e }) }/>
                </View>
                <View style = {{ width: '10%' }} />
                <View style = { styles.searchFormComponent }>
                    <Text style = { styles.searchFormTitle }>GÉNERO</Text>
                    <Picker style = { styles.searchFormInput } 
                        selectedValue = { genredefault }
                        onValueChange = {(item)=>{
                            setgenredefault(item);
                        }}
                    >
                        <Picker.Item label = 'DESCONOCIDO' value = '0' />
                        <Picker.Item label = 'MACHO' value = '1' />
                        <Picker.Item label = 'HEMBRA' value = '2' />
                    </Picker>
                </View>
            </View>
        </View>
        <View>
            <View style = { styles.searchFormsDouble }>
                <View style = { styles.searchFormComponent }>
                    <Text style = { styles.searchFormTitle }>ESPECIE</Text>
                    <Picker style = { styles.searchFormInput } 
                        selectedValue = { speciedefault }
                        onValueChange = {(item)=>{
                            setspeciedefault(item);
                        }}
                    >
                        <Picker.Item label = 'PERRO' value = '1' />
                        <Picker.Item label = 'PEZ' value = '2' />
                        <Picker.Item label = 'GATO' value = '3' />
                        <Picker.Item label = 'AVE' value = '4' />
                        <Picker.Item label = 'REPTIL' value = '5' />
                        <Picker.Item label = 'AMFIBIO' value = '6' />
                        <Picker.Item label = 'ROEDOR' value = '7' />
                        <Picker.Item label = 'CABALLO' value = '8' />
                        <Picker.Item label = 'OTRO' value = '9' />
                    </Picker>
                </View>
                <View style = {{ width: '10%' }} />
                <View style = { styles.searchFormComponent }>
                    <Text style = { styles.searchFormTitle }>RAZA</Text>
                    <Picker style = { styles.searchFormInput } 
                        selectedValue = { racedefault }
                        onValueChange = {(item)=>{
                            setracedefault(item);
                        }}
                    >
                                <Picker.Item label = 'CHIHUAHUA' value = '1' />
                                <Picker.Item label = 'PASTOR ALEMÁN' value = '2' />
                                <Picker.Item label = 'DOBERMAN' value = '3' />
                                <Picker.Item label = 'GOLDEN RETRIEVER' value = '4' />
                                <Picker.Item label = 'LABRADOR' value = '5' />
                                <Picker.Item label = 'COCKER SPANIEL' value = '6' />
                                <Picker.Item label = 'SAN BERNARDO' value = '7' />

                                {/*<Picker.Item label = 'PERIQUITO' value = '22' />
                                <Picker.Item label = 'AGAPORNI/NINFA' value = '23' />
                                <Picker.Item label = 'JILGUERO' value = '24' />
                                <Picker.Item label = 'CANARIO' value = '25' />
                                <Picker.Item label = 'GALLO/GALLINA' value = '26' />
                                <Picker.Item label = 'PATO' value = '27' />
                                <Picker.Item label = 'PALOMA' value = '28' />*/}
                    </Picker>
                </View>
            </View>
        </View>
        <View style = { styles.searchFormsSingle }>
            <Text style = { styles.searchFormTitle }>DESCRIPCIÓN</Text>
            <TextInput style = { [styles.searchFormInput, {height: 100}] } onChangeText = { (e) => setregisterPet({ ...registerPet, description: e }) }/>
        </View>
        <View style = { styles.searchFormsSingle }>
            <Text style = { styles.searchFormTitle }>NÚMERO DE IDENTIFICACIÓN / CHIP</Text>
            <TextInput style = { styles.searchFormInput } onChangeText = { (e) => setregisterPet({ ...registerPet, chip: e }) }/>
        </View>
        <View style = { styles.searchButtonContainer }>
            <TouchableOpacity style = { [styles.searchButtonContainer, styles.searchButton ]} onPress={() => crearMascota()}>
                <Text style = {{ fontFamily: 'Inter-Black', fontSize: 16 }}>AÑADIR</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default CreatePet