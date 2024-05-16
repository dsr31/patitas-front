import { TouchableOpacity, Image, ScrollView, StyleSheet, Text, View, FlatList, ProgressBarAndroidComponent } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import 'react-native-reanimated';
import { router,Link,Redirect } from 'expo-router';
import images from '../../constants/images';
import styles from '../../styles/tabs';
import icons from '../../constants/icons';
import ProfileTabs from '../../components/profileTabs';

const Profile = () => {
  return (
    <>
      <SafeAreaView style = { styles.container }>
        <View style = { styles.header }>
          <Image
            source = { images.logov3 }
            style  = { styles.logoHeader }
          />        
          <View style={styles.spacer} />
          <Image 
            source = { icons.bell }
            style  = { styles.iconHeader } 
          />
        </View>
        <View style = { styles.headerFixerProfile } />        
        <View style = {{ height: '100%', backgroundColor: '#E2D8BE'}}>
          <View style = { styles.userIDs }>
            <Image
              source = { images.img_default_4 }
              style  = { styles.logoProfile }
            />
            <View style = { styles.userIDsTextContainer }>
              <Text style = {{ color: 'grey' }}>@elarrobademiusuario</Text>
              <Text>Nombre Apellidos</Text>
            </View>
          </View>
          <View style = { styles.userDescriptionTextContainer }>
            <Text numberOfLines={6}>Descripcion del usuario, como máximo ocupará 3 lineas asi que hay que estar atento a toodo! jajajajajaj estoy locooooo jajaja repito locoooo</Text>
          </View>
          <View style = { styles.contactButtonsContainer }>
            <TouchableOpacity style = { [styles.contactButton, styles.contactButtonBordersLeft] }>
              <Image
                source = { icons.email }
                style = { styles.contactInfoIcon }
              />
              <Text style = { styles.contactInfoText }>
                jgonzalez83@gmail.com
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style = { [styles.contactButton, styles.contactButtonBordersRight] }>
              <Image
                source = { icons.phone }
                style = { styles.contactInfoIcon }
              />
              <Text style = { styles.contactInfoText }>
                655 39 20 56
              </Text>
            </TouchableOpacity>
          </View>
          <View style = { styles.actionButtonsProfileContainerFull }>
            <View style = { styles.actionButtonsProfileContainer }>
              <TouchableOpacity style = { styles.actionButtonProfile }>
                <Text style = { styles.actionButtonText }>
                  EDITAR PERFIL
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
          <ProfileTabs/>
        </View>        
      </SafeAreaView>
    </>
  )
}

export default Profile
