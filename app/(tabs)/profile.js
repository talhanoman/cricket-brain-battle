import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fontWeight600 } from '../styles/fontWeights';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons'

export default function profile() {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='bg-[#300073]'>
        <View style={{ height: 150 }} className='bg-[#300073] p-4'>
          <Text className="text-lg text-[#FFFFFF]" style={fontWeight600}>Profile</Text>
          {/* <Text className="text-base text-[#FFFFFF]" style={fontWeight600}>Explore all the live matches around the world!</Text> */}
          <View className='h-[50px] w-full bg-gray-100 my-auto rounded-md'>
            <Text className='text-center text-[#FFFFFF] my-auto'>Add Banner</Text>
          </View>
        </View>
        <View className='w-full flex flex-row justify-center items-center'>
          <View className='bg-[#FFFFFF] rounded-md w-[94%] flex flex-col items-center p-4'>
            <Image
              source={'https://cdn-icons-png.flaticon.com/512/166/166364.png'}
              className='h-12 w-12 rounded-full mt-6'
            />
            <Text style={fontWeight600} className='text-xl mt-2.5'>Talha Noman</Text>
            <Text style={fontWeight600} className='text-sm text-gray-500'>@talhanoman</Text>
            <Text style={fontWeight600} className='text-lg mt-1'>1225 Points</Text>
            <Text style={fontWeight600} className='text-sm text-gray-500'>Quiz Played: 52</Text>
          </View>
        </View>
        <View className='w-full flex flex-row justify-center items-center mt-2'>
          <View className='bg-[#FFFFFF] rounded-md w-[94%] flex flex-col items-center p-4'>
            <Pressable className="border-red-500 border-2 w-full rounded-lg p-3 active:bg-gray-100 flex flex-row justify-center items-center" >
              <Ionicons name='log-out-outline' size={24} color={'#EF4444'} />
              <Text className="text-red-500 text-center ml-1" style={fontWeight600}>
                Logout
              </Text>
            </Pressable>
            {/* <Text style={fontWeight600} className='text-xl mt-2.5'>Talha Noman</Text>
            <Text style={fontWeight600} className='text-lg mt-1'>1225 Points</Text> */}
          </View>
        </View>

        <StatusBar backgroundColor='#300073' style='light' />
      </ScrollView>
    </SafeAreaView>
  )
}

const { shadow } = StyleSheet.create({
  shadow: {
    elevation: 2
  }
})