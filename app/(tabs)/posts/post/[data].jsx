import { ActivityIndicator, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity, Linking } from 'react-native'
import {React, useState, useEffect, useContext} from 'react'
import { useLocalSearchParams, Stack, router } from 'expo-router'
import images from '../../../../constants/images';
import styles from '../../../../styles/dataPost';
import icons from '../../../../constants/icons';
import ImageModal from '../../../../components/imageModal';
import { SessionContext } from '../../../../context/sessionContext';

const DataPost = ({params}) => {
  let currentPost = useLocalSearchParams();
  let id_post = currentPost.data;

  // Acceder al usuario de la sesion
  const { usernameSession } = useContext(SessionContext);

  /*
  const typePost = 'SE BUSCA';
  const statusPost = '';
  const name = 'MANCHITAS';
  const imagesPost = [images.img_default_1, images.img_default_2, images.img_default_2, images.img_default_2];
  const postDescription = 'Mi perro se perdió anoche en la madrugada. Nos dejamos la puerta abierta del recinto y esta mañana no estaba. Estamos muy preocupados ya que es muy travieso y debió haberse ido a perseguir algún gato. ¡Agradecemos difusión!';
  const specie = 'PERRO';
  const race = 'COCKER SPANIEL';
  const genre = 'MACHO';
  const dateAdd = '12/03/2023';
  const petDescription = 'Muy travieso, de unos 2 años de edad.';
  const location = 'Calle Pruebas, Pruebalandia, 03330, Alicante';
  const profileImage = images.img_default_4;
  const author = 'Miriam Ramirez';
  const username = 'miriamramirez13';
  const email = 'miriamcontact9@gmail.com';
  const phone = '986 45 45 34';
  */
  const [typePost, settypePost] = useState();
  const [statusPost, setstatusPost ] = useState();
  const [name, setpetname ] = useState();
  const [imagesPost, setimagesPost] = useState([]);
  const [postDescription, setpostDescription] = useState();
  const [specie, setspecie] = useState();
  const [race, setrace] = useState();
  const [genre, setgenre] = useState();
  const [dateAdd, setdateAdd] = useState();
  const [petDescription, setpetDescription] = useState();
  const [location, setlocation] = useState();
  const [profileImage, setprofileImage] = useState();
  const [author, setauthor] = useState();
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [status, setstatus] = useState();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://192.168.231.18:4000/api/posts/${id_post}`).then(
      res => res.json()
    ).then(
      (resultado) => {
        //console.log(resultado)
        setLoading(false);
        if(resultado.body[0].status == 1){
            settypePost('RESUELTO');
        }
        else if(resultado.body[0].post_type == 1){
            settypePost('SE BUSCA');
        }
        else if(resultado.body[0].post_type == 2){
            settypePost('ENCONTRADO');
        }
        else if(resultado.body[0].post_type == 3){
            settypePost('BUSCANDO PAREJA');
        }
        else{
            settypePost('ADÓPTAME');
        }
        setstatusPost(resultado.body[0].status);
        setpetname(resultado.body[0].pet_name);
        setimagesPost([resultado.body[0].post_image_1,resultado.body[0].post_image_2, resultado.body[0].post_image_3] );
        setpostDescription(resultado.body[0].content);
        setspecie(resultado.body[0].specie_name);
        setrace(resultado.body[0].race_name);
        setstatus(resultado.body[0].status);
        if(resultado.body[0].pet_genre == 1){
            setgenre('MACHO');
        }
        else if(resultado.body[0].pet_genre == 2){
            setgenre('HEMBRA');
        }
        else{
            setgenre('DESCONOCIDO'); 
        }
        setdateAdd(resultado.body[0].date_add.substring(0, 10));
        setpetDescription(resultado.body[0].pet_description);
        setlocation(resultado.body[0].address);
        //setprofileImage(resultado.body[0].);
        setauthor(resultado.body[0].name);
        setusername(resultado.body[0].username);
        setemail(resultado.body[0].email);
        setphone(resultado.body[0].phone);
      }, 
      (error) => {
        //console.log(error)
        setLoading(true);
        console.warn("Houston tenemos un problema");
      }
    )
  }, [])

  const verPerfilUsuario = () => {
    router.push({ pathname: `./../../profiles/profile/${username}`, params: username}) 
  }

  const enviarMail = () => {
    Linking.openURL(`mailto:${email}`);
  }
  const llamar = () => {
    Linking.openURL(`tel:${phone}`);
  }

  let colorTypePost = '#E44040';
  //let imagesPost = [images.img_default_1];
  if(typePost == 'ENCONTRADO'){
    colorTypePost = '#DBA10C';
  }
  else if(typePost == 'BUSCANDO PAREJA'){
    colorTypePost = '#DE58A0'
  }
  else if(typePost == 'ADÓPTAME'){
    colorTypePost = '#4082E4';
  }
  else if(typePost == 'RESUELTO'){
    colorTypePost = '#62D458';
  }

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
        {loading ? (
            <ActivityIndicator size = "large" style ={{ marginTop: 250}}/>
        ) : (
            <>
                <Stack.Screen options={{    
                    headerTitle: "ATRÁS", 
                    headerRight: () => (
                        <View style = {{ width: 200, backgroundColor: colorTypePost, alignItems: 'center'}}>
                            <Text style = {{ fontFamily: 'Inter-Black', fontSize: 16, color: '#fff' }}>{typePost}</Text>
                        </View>
                    ) }} 
                />
                <ScrollView style = {{ flex: 1, marginHorizontal: 10 }}>
                    <ScrollView horizontal>
                        {imagesPost.map((image, index) => (
                            <TouchableOpacity key = { index } onPress = {() => pressedImageController(image)}>
                                {/*<Image key = { index } source = { image } style = { styles.imagePost } />*/}
                                <Image key = { index } source = { image != '' && {uri:image} } style = { styles.imagePost } />
                                {/*pet_photo != '' ? {uri:pet_photo} : images.img_default_2*/}
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <Text style = { styles.petName }>{name}</Text>
                    <Text style = { styles.longText }>{postDescription}</Text>
                    <View style = { styles.dividerLine } />
                    <View>
                        <View style = { styles.containerProperty1 }>
                            <View style = { styles.containerTitleProperty }><Text style = { styles.titleProperty }>ESPECIE:</Text><Text>{specie}</Text></View>
                            <View style = { styles.containerTitleProperty }><Text style = { styles.titleProperty }>GÉNERO:</Text><Text>{genre}</Text></View>
                        </View>
                        <View  style = { styles.containerProperty1 }>
                            <View style = { styles.containerTitleProperty }><Text style = { styles.titleProperty }>RAZA:</Text><Text>{race}</Text></View>
                            <View style = {{ borderWidth: 1, borderColor: 'black', borderRadius: 15, paddingHorizontal: 35, paddingVertical: 10 }}><Text>{dateAdd}</Text></View>
                        </View>
                    </View>
                    <View style = {{ marginBottom: 10 }}>
                        <Text style = { styles.titleProperty }>DESCRIPCIÓN:</Text>
                        <Text style = { styles.longText }>{petDescription}</Text>
                    </View>
                    <View style = {{ marginBottom: 10 }}>
                        <Text style = { styles.titleProperty }>UBICACIÓN:</Text>
                        <Text style = { styles.longText }>{location}</Text>
                    </View>
                    <View style = { styles.dividerLine } />
                    <TouchableOpacity style = {{ flexDirection: 'row', marginBottom: 12 }} onPress = {() => {verPerfilUsuario()}}>
                        <Image 
                            source = { profileImage }
                            style = { styles.profileImage }
                        />
                        <View>
                            <Text style = {{ fontFamily: 'Inter-Black', fontSize: 17, marginTop: 5 }}>
                                {author}
                            </Text>
                            <Text style = {{ fontFamily: 'Inter-Regular', fontSize: 15, color: 'gray' }}>
                                @{username}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style = { styles.contactContainer }>
                        <View style = {{ flexDirection: 'row'}}>
                            <Image source = { icons.email } style = { styles.contactIcons }/>
                            <TouchableOpacity onPress = { enviarMail }>
                                <Text>{email}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {{ flexDirection: 'row'}}>
                            <Image source = { icons.phone } style = { styles.contactIcons }/>
                            <TouchableOpacity onPress = { llamar }>
                                <Text>{phone}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = { styles.footerButtons }>
                        <TouchableOpacity style = { [styles.footerButton, { borderRightColor: 'black', borderRightWidth: 0.5 }] }>
                            <Image source = { icons.compartir } style = { styles.contactIcons }/>
                            <Text>Compartir Post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = { [styles.footerButton, { borderLeftColor: 'black', borderLeftWidth: 0.5 }] }>
                            {/*<Image source = { icons.prohibido } style = { styles.contactIcons }/>*/}
                            <Text style = {{ fontFamily:'Inter-Black', textAlign: 'center' }}>MARCAR COMO RESUELTO</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                    {usernameSession == username && (<TouchableOpacity style = { styles.deleteButtonPost }>
                        <Text style = { styles.deleteButtonPostText }>BORRAR POST</Text>
                    </TouchableOpacity>)}
                    </View>
                    {selectedImage && (
                        <ImageModal image = { selectedImage } visible = { modalVisible } closeImageModal = { closeModal } />
                    )}
                </ScrollView>
            </>
        )}
    </SafeAreaView>
  )
}

export default DataPost