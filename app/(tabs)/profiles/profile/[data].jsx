import { TouchableOpacity, Image, Text, View, Linking, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { React, useState, useEffect, useContext } from 'react'
import 'react-native-reanimated';
import { router,useLocalSearchParams } from 'expo-router';
import images from '../../../../constants/images'
import styles from '../../../../styles/tabs';
import icons from '../../../../constants/icons';
import ProfileTabs from '../../../../components/profileTabs';
import { SessionContext } from '../../../../context/sessionContext';
import { FlipInEasyX } from 'react-native-reanimated';

const DataProfile = ({params}) => {
  let currentProfile = useLocalSearchParams();
  let profile_selected = currentProfile.data;
  //let iduserProfile = 1;

  const [loading, setLoading] = useState(true);

  // Acceder al usuario de la sesion
  const { usernameSession } = useContext(SessionContext);

  const [id_user, setid_user] = useState();
  const [name, setname] = useState();
  const [description, setdescription] = useState();
  const [email, setemail] = useState();
  const [username, setusername] = useState();
  const [phone, setphone] = useState();
  const [rating, setrating] = useState();
  const [user_profile_image, setuser_profile_image] = useState();

  useEffect(() => {
    if(profile_selected == usernameSession){
      router.push('/../(tabs)/profiles');
    }
    fetch(`http://192.168.231.18:4000/api/users/${profile_selected}`).then(
      res => res.json()
    ).then(
      (resultado) => {
        setid_user(resultado.body[0].id_user);
        setname(resultado.body[0].name);
        setdescription(resultado.body[0].description);
        setemail(resultado.body[0].email);
        setusername(resultado.body[0].username);
        setphone(resultado.body[0].phone);
        setrating(resultado.body[0].rating);
        setuser_profile_image(resultado.body[0].user_profile_image);
        setLoading(false);
        //console.log(resultado.body)
      }, 
      (error) => {
        setLoading(true);
        console.warn("Houston tenemos un problema en la pagina de foro");
      }
    )
  }, [])

  const enviarMail = () => {
    Linking.openURL(`mailto:${email}`);
  }
  const llamar = () => {
    Linking.openURL(`tel:${phone}`);
  }
  
  return (
    <>
      <SafeAreaView style = { styles.container }>
        {loading ? (
          <ActivityIndicator size = "large"/>
        ) : (
          <>
            <View style = { styles.headerFixerProfile } />        
            <View style = {{ height: '100%', backgroundColor: '#E2D8BE'}}>
              <View style = { styles.userIDs }>
                <Image
                  source = { images.img_default_4 }
                  style  = { styles.logoProfile }
                />
                <View style = { styles.userIDsTextContainer }>
                  <Text style = {{ color: 'grey' }}>@{username}</Text>
                  <Text>{name}</Text>
                </View>
              </View>
              <View style = { styles.userDescriptionTextContainer }>
                <Text numberOfLines={6}>{description}</Text>
              </View>
              <View style = { styles.contactButtonsContainer }>
                <TouchableOpacity style = { [styles.contactButton, styles.contactButtonBordersLeft] } onPress = { enviarMail }>
                  <Image
                    source = { icons.email }
                    style = { styles.contactInfoIcon }
                  />
                  <Text style = { styles.contactInfoText }>
                    {email}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style = { [styles.contactButton, styles.contactButtonBordersRight] } onPress = { llamar }>
                  <Image
                    source = { icons.phone }
                    style = { styles.contactInfoIcon }
                  />
                  <Text style = { styles.contactInfoText }>
                    {phone}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style = { styles.actionButtonsProfileContainerFull }>
                <View style = { styles.actionButtonsProfileContainer }>
                  <TouchableOpacity style = { styles.actionButtonProfile }>
                    <Text style = { styles.actionButtonText }>
                      VALORAR PERFIL
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style = { styles.actionButtonsProfileContainer }>
                  <TouchableOpacity style = { styles.actionButtonProfile }>
                    <Text style = { styles.actionButtonText }>
                      COMPARTIR PERFIL
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <ProfileTabs idUser = { id_user } ratingUser = { rating } styleFix = { 290 } deletable = {false} />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  )
}

export default DataProfile
