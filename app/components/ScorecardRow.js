import { View, Text } from 'react-native'
import { Image } from 'expo-image'
import React from 'react'
import { fontWeight400, fontWeight500 } from '../styles/fontWeights'

const ScorecardRow = () => {
    return (
        <View className='flex flex-row justify-between mt-4'>
            <View className='flex flex-row w-1/2 justify-start items-center'>
                <Image
                    source={'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'}
                    className=' rounded-full w-10 h-10'
                />
                <View className='flex flex-col'>
                    <Text style={fontWeight500} className='px-2 text-xs'>Virat Kohli</Text>
                    <Text style={fontWeight400} className='px-2 text-xs'>57 (49)</Text>
                </View>
            </View>
            {/* Second Half */}
            <View className='flex flex-row items-center w-1/2 justify-end'>
                <Image
                    source={'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'}
                    className=' rounded-full w-10 h-10'
                />
                <View className='flex flex-col'>
                    <Text style={fontWeight500} className='px-2 text-xs'>Shaheen Afridi</Text>
                    <Text style={fontWeight400} className='px-2 text-xs'>3/31 (4)</Text>
                </View>

            </View>
        </View>
    )
}

export default ScorecardRow