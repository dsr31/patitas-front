import { StyleSheet, Text, View } from 'react-native'
import { React, useEffect, useState, createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const SessionContext = createContext();

export const SessionProvider = ({children}) => {

  const [userError, setUserError] = useState('elefante');
  const [usernameSession, setusernameSession] = useState();

  const createSession = (param) => {
    setusernameSession(param);
    AsyncStorage.setItem('usernameSession', param);
  }
  const deleteSession = () => {
    setusernameSession(false);
    AsyncStorage.removeItem('usernameSession');
  }
  const isLogedIn = async () => {
    try {
        let username_aux = await AsyncStorage.getItem('usernameSession');
        setusernameSession(username_aux);
    }
    catch (error) {
        console.log("Error al comprobar la sesion del usuario.");
    }
  }

  useEffect(() => {
    isLogedIn();
  }, [])

  return (
    <SessionContext.Provider value = {{userError, usernameSession, createSession, deleteSession, isLogedIn}}>
        {children}
    </SessionContext.Provider>
  )
}