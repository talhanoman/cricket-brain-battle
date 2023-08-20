import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { fontWeight500, fontWeight600 } from '../styles/fontWeights'

const Summary = () => {
    return (
        <View className='flex-1 gap-y-5'>
            <View className='border rounded-md border-gray-300 p-2 flex flex-row justify-between'>
                <View>
                    <Text className='text-xs' style={fontWeight500} >Player of the Match</Text>
                    <Text style={fontWeight600} >Shaheen Shah Afridi</Text>
                    <Text className='text-xs' style={fontWeight600} >3/31 (4)</Text>
                </View>
                <Image
                    source={'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'}
                    className=' rounded-full w-14 h-14'
                />
            </View>

            {/* Team 1 */}
            <View>
                <View className='flex flex-row items-center'>
                    <View className='flex-1 h-[1px] bg-gray-300' />
                    <Text style={fontWeight500} className='px-2 text-sm'>India : 151 / 7 (20)</Text>
                    <View className='flex-1 h-[1px] bg-gray-300' />
                </View>
                <View>
                    
                </View>
            </View>
        </View>
    )
}

export default Summary