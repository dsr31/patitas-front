//import 'react-native-reanimated';
import { StyleSheet, Text, View, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'; 
import React from 'react';
import icons from '../../constants/icons.js';

const TabIcon = ({ icon, color, name, focused }) => {
  const colorPredeterminado     = focused ? color : '#000000';
  const colorBarraSeleccionado  = focused ? 'white' : '#C1AB73';

  return (
    <>
      <View style = {{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Image 
          source = {icon}
          resizeMode = "contain" 
          tintColor = { colorPredeterminado }
          style = {{ height: 35, width: 35, contain: 'resize' }}
        />
      </View>    
      <View style={{ height: 10, width: 50, backgroundColor: colorBarraSeleccionado, marginTop: 15 }} />
    </>
  )
} 
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#ffffff',
          tabBarStyle: {
            backgroundColor: '#C1AB73',
            borderTopWidth: 1,
            //borderTopColor: '#0000000',
            height: 80,
          }
        }}
      >
        <Tabs.Screen 
          name="posts"
          options={{
            title: 'posts',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
              icon = {icons.huella}
              color = { color }
              //name = "posts"
              focused = {focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="createContent"
          options={{
            title: 'createContent',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
              icon = {icons.mas}
              color = { color }
              //name = "createContent"
              focused = {focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="forums"
          options={{
            title: 'forums',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
              icon = {icons.foro}
              color = { color }
              //name = "forum"
              focused = {focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="profiles"
          options={{
            title: 'profiles',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
              icon = {icons.perfil}
              color = { color }
              //name = "profile"
              focused = {focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})