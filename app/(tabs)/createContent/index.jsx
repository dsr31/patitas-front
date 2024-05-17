import { TouchableOpacity, Image, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import 'react-native-reanimated';
import { router,Link,Redirect } from 'expo-router';
import images from '../../../constants/images';
import styles from '../../../styles/tabs';
import icons from '../../../constants/icons';
import CreateCard from '../../../components/createCard';

const CreateContent = () => {
  return (
    <>
      <SafeAreaView style = { styles.container }>
        <View style = { styles.header }>
          <Image
            source = { images.logov3 }
            style  = { styles.logoHeader }
          />        
          <View style={styles.spacer} />
        </View>
        <View style = { styles.titlePageSection }>
          <View style = { [ styles.lineSection, styles.lineSectionL ] }/>
          <Text style = { styles.titlePage } >PUBLICAR</Text>
          <View style = { [ styles.lineSection, styles.lineSectionR ]}/>
        </View>
        <View style = { styles.feed }>
          <View style = {{ marginTop: 50 }} />
          <View style = {{ height: '100%', backgroundColor: '#E2D8BE'}}>
            <FlatList
              data = {[
                {
                  id_type: 1, 
                },
                {
                  id_type: 2, 
                },
                {
                  id_type: 3, 
                },
                {
                  id_type: 4, 
                },
                {
                  id_type: 5, 
                },
                {
                  id_type: 6, 
                }
              ]}
              keyExtractor = {(item) => item.id_type}
              renderItem = {({item}) => (
                <CreateCard content = {item}/>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default CreateContent