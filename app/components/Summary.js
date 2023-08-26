import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { fontWeight500, fontWeight600 } from '../styles/fontWeights'
import ScorecardRow from './ScorecardRow'

const Summary = () => {
    return (
        <View className='flex-1 gap-y-5'>
            <View className='border rounded-md border-gray-300 p-2 flex flex-row justify-between bg-[#300073]'>
                <View>
                    <Text className='text-xs text-[#FFFFFF]' style={fontWeight500} >Player of the Match</Text>
                    <Text className='text-[#FFFFFF]' style={fontWeight600} >Shaheen Shah Afridi</Text>
                    <Text className='text-xs text-[#FFFFFF]' style={fontWeight600} >3/31 (4)</Text>
                </View>
                <Image
                    source={'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'}
                    className=' rounded-full w-14 h-14 border-2 border-[#FFFFFF]'
                />
            </View>

            {/* Team 1 */}
            <View>
                <View className='flex flex-row items-center'>
                    <View className='flex-1 h-[1px] bg-gray-300' />
                    <Text style={fontWeight500} className='px-2 text-sm'>India : 151 / 7 (20)</Text>
                    <View className='flex-1 h-[1px] bg-gray-300' />
                </View>
                {/* Row 1 */}
                <ScorecardRow />
                {/* Row 2 */}
                <ScorecardRow />
                {/* Row 3 */}
                <ScorecardRow />
            </View>


            {/* Team 2 */}
            <View>
                <View className='flex flex-row items-center'>
                    <View className='flex-1 h-[1px] bg-gray-300' />
                    <Text style={fontWeight500} className='px-2 text-sm'>Pakistan : 152 / 0 (20)</Text>
                    <View className='flex-1 h-[1px] bg-gray-300' />
                </View>
                {/* Row 1 */}
                <ScorecardRow />
                {/* Row 2 */}
                <ScorecardRow />
                {/* Row 3 */}
                <ScorecardRow />
            </View>
        </View>
    )
}

export default Summary