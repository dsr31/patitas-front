import React from 'react'
import { Stack } from 'expo-router'

const ForumLayout = () => {
  return (
    <Stack>
        <Stack.Screen
            name = 'index'
            options = {{ headerShown: false }}
        />
        <Stack.Screen
            name = 'forum/[data]'
        />
    </Stack>
  )
}

export default ForumLayout