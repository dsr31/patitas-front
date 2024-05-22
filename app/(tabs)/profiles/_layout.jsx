import React from 'react'
import { Stack } from 'expo-router'

const ProfileLayout = () => {
  return (
    <Stack>
        <Stack.Screen
            name = 'index'
            options = {{ headerShown: false }}
        />
        <Stack.Screen
            name = 'profile/[data]'
            options = {{ headerTitle: "ATRÁS" }}
        />
    </Stack>
  )
}

export default ProfileLayout