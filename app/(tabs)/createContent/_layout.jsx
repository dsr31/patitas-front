import React from 'react'
import { Stack } from 'expo-router'

const CreateContentLayout = () => {
  return (
    <Stack>
        <Stack.Screen
            name = 'index'
            options = {{ headerShown: false }}
        />
        <Stack.Screen
            name = 'create/[type]'
        />
    </Stack>
  )
}

export default CreateContentLayout