import { StyleSheet, Text, Image, FlatList, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/profileTabs';
import icons from '../constants/icons';
import images from '../constants/images';
import PetCard from './petCard';
import ForumCardReply from './forumCardReply';
import ReviewCard from './reviewCard';
import MyPetsTab from './myPetsTab';
import MyForumsTab from './myForumsTab';
import MyReviewsTab from './myReviewsTab';
/*
const [id_pet, setid_pet] = useState();
const [profileImage, setprofileImage] = useState();
const [pet_name, setpet_name] = useState();
const [pet_description, setpet_description] = useState();
const [chip_identifier, setchip_identifier] = useState();
const [pet_genre, setpet_genre] = useState();
const [pet_profile_image, setpet_profile_image] = useState();
const [race_name, setrace_name] = useState();
const [specie_name, setspecie_name] = useState();

useEffect(() => {
  fetch(`http://192.168.1.66:4000/api/users/1/pets`).then(
    res => res.json()
  ).then(
    (resultado) => {
      //setLoading(false);
      setid_pet(resultado.body[0].id_pet);
      setpet_name(resultado.body[0].pet_name);
      setpet_description(resultado.body[0].pet_description);
      setchip_identifier(resultado.body[0].chip_identifier);
      setpet_genre(resultado.body[0].pet_genre);
      setpet_profile_image(resultado.body[0].pet_profile_image);
      setrace_name(resultado.body[0].race_name);
      setspecie_name(resultado.body[0].specie_name);
      //setreplies(resultado.body[0].replies);

      console.log(resultado.body[0])
    }, 
    (error) => {
      setLoading(true);
      console.warn("Houston tenemos un problema en la pagina de foro");
    }
  )
}, [])
*/



const ProfileTabs = ({idUser, ratingUser, styleFix, deletable}) => {
  const [profileTab, setProfileTab] = useState('tabUno'); 
  const [userProfile, setuserProfile] = useState(idUser); 

  const controladorTab = (tab) =>{
    setProfileTab(tab);
  }

  let totalRating = '';

  if(ratingUser != 0){
    totalRating = ratingUser + '/5';
  }

  return (
    <View style = {{marginBottom: styleFix}}>
        <View style = { styles.tabsBarContainer }>
            <TouchableOpacity onPress = {() => controladorTab('tabUno')} style = { [styles.tabBar, profileTab === 'tabUno' && styles.activeTab] }>
                <Image 
                    source = { icons.huellas }
                    style  = {{ width: 35, height: 35, resizeMode: 'contain' }} 
                />
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => controladorTab('tabDos')} style = { [styles.tabBar,styles.middleTabIcon, profileTab === 'tabDos' && styles.activeTab] }>
                <Image 
                    source = { icons.foro }
                    style  = { styles.profileTabIcon } 
                />
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => controladorTab('tabTres')} style = { [styles.tabBar, profileTab === 'tabTres' && styles.activeTab] }>
                <Text style = {{ paddingRight: 5, fontSize: 16 }}>{totalRating}</Text>
                <Image 
                    source = { icons.estrella }
                    style  = { styles.profileTabIcon } 
                />
            </TouchableOpacity>
        </View>
        
      {profileTab === 'tabUno' && (
        <View>
          <MyPetsTab iduserProfile = {userProfile} deletable = {deletable} />
        </View>
      )}
      {profileTab === 'tabDos' && (
        <View>
          <MyForumsTab iduserProfile = {userProfile}/>
        </View>
      )}
      {profileTab === 'tabTres' && (
        <View>
          <MyReviewsTab iduserProfile = {userProfile}/>
        </View>
      )}
    </View>
  )
}

export default ProfileTabs