import { StyleSheet, Text, Image, FlatList, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/profileTabs';
import icons from '../constants/icons';
import images from '../constants/images';
import PetCard from './petCard';
import ForumCardReply from './forumCardReply';
import ReviewCard from './reviewCard';


const ProfileTabs = () => {
  const [profileTab, setProfileTab] = useState('tabUno'); 

  const controladorTab = (tab) =>{
    setProfileTab(tab);
  }

  return (
    <View style = {{marginBottom: 390}}>
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
                <Text style = {{ paddingRight: 5, fontSize: 16 }}>3.8/5</Text>
                <Image 
                    source = { icons.estrella }
                    style  = { styles.profileTabIcon } 
                />
            </TouchableOpacity>
        </View>
        
      {profileTab === 'tabUno' && (
        <View style = {{ height: '100%', backgroundColor: '#D5C59B', paddingTop: 10}}>
            <FlatList
                data = {[
                    { id: 1, name: 'PEPITO uyihu jik huijok jumkl, jiok l', photo: images.img_default_2, description: 'Soy un perrito muy pequeñito perdido entre sddfghnjmnhbsvfvgfhgmjhngbfvsdghmjghngbdfvsdfghmjhghnfgdbfsvdcfghnfngdfgtfhyjgrfsergdthjukughfgfrsedasfrgtgjhugygrf ', type: 'ENCONTRADO', location: 'Calle 3, direccion sur' },
                    { id: 3, name: 'PEPITO PEPITO PEPito', photo: images.img_default_1, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'SE BUSCA', location: 'Calle 3, direccion sur' },
                    { id: 6, name: 'PEPITO', photo: images.img_default_1, description: 'Soy un perrito muy pequeñito perdido entre ', type: 'SE BUSCA', location: 'Calle 3, direccion sur' }
                ]}
                keyExtractor = {(item) => item.id}
                renderItem = {({item}) => (
                    <PetCard content = {item}/>
                )}
            />
        </View>
      )}
      {profileTab === 'tabDos' && (
        <View style = {{ height: '100%', backgroundColor: '#D5C59B', paddingTop: 10}}>
          <FlatList
              data = {[
                { id: 1, title: 'Una preguntita aaaaaaaaaaaaaaa', photo: '', text: 'cusha pisha una cosita que es que nostoy entendiendo sobre mi cachorro', id_reply: 10, date_reply: '', author: 'Pepe', username: 'erpepe' },
                { id: 2, title: 'pip i pipi aaaaaaaaaaaaa aaa sfg ggfdfg dgsdf ghadhh dfgsfhgh ', photo: images.img_default_2, text: 'cusha pisha una cosita que es que nostoy entendiendo sobre mi cachorro', id_reply: 0, date_reply: '', author: 'Pepe', username: 'erpepe' },
                { id: 3, title: 'Huevitos de cala ma aaa aaaaaaar aaaaaaaaaaaaaaaaaaa', photo: '', text: 'cusha pisha una cosita que es que nostoy entendiendo sobre mi cachorro', id_reply: '7', date_reply: '', author: 'Pepe', username: 'erpepe' },          
              ]}
              keyExtractor = {(item) => item.id}
              renderItem = {({item}) => (
                  <ForumCardReply content = {item}/>
              )}
          />
        </View>
      )}
      {profileTab === 'tabTres' && (
        <View style = {{ height: '100%', backgroundColor: '#D5C59B', paddingTop: 10}}>
          <FlatList
              data = {[
                { id: 1, text:'Todo bien con este usuario.', author:'Lucia S.', username:'luciiiis', rating: 3.4 },
                { id: 2, text:'Muy amable, siempre resuelve mis dudas y da excelentes consejos.', author:'Elgu Sanillo', username:'elgusanillo105', rating: 5 },
                { id: 3, text:'Me adoptó un perrito hace tiempo. Buen trato, aunque algo escueto. Me adoptó un perrito hace tiempo. Buen trato, aunque algo escueto.', author:'Pedro Lópezzxdfg esrgdthyj rgethserfgdth wergthfy', username:'pedritolopez125467894567893', rating: 5 },
                { id: 4, text:'Me adoptó un perrito hace tiempo. Buen trato, aunque algo escueto. Me adoptó un perrito hace tiempo. Buen trato, aunque algo escueto.', author:'Pedro Lópezzxdfg esrgdthyj rgethserfgdth wergthfy', username:'pedritolopez125467894567893', rating: 3.8 },
                { id: 5, text:'Me adoptó un perrito hace tiempo. Buen trato, aunque algo escueto. Me adoptó un perrito hace tiempo. Buen trato, aunque algo escueto.', author:'Ben', username:'benitolopez89765467890125467894567893', rating: 4.5 },
              
              ]}
              keyExtractor = {(item) => item.id}
              renderItem = {({item}) => (
                  <ReviewCard content = {item}/>
              )}
          />
        </View>
      )}
    </View>
  )
}

export default ProfileTabs