import React from 'react'
import { Stack } from 'expo-router'

const PostLayout = () => {
  return (
    <Stack>
        <Stack.Screen
            name = 'index'
            options = {{ headerShown: false }}
        />
        <Stack.Screen
            name = 'post/[data]'
        />
    </Stack>
  )
}

export default PostLayout