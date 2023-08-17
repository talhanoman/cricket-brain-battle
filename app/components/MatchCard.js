import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { fontWeight400, fontWeight500 } from '../styles/fontWeights'
import { Ionicons } from '@expo/vector-icons'

export default function MatchCard({ live, teamOne, teamTwo, teamOneScore, teamTwoScore, teamOneWicket , teamTwoWicket, progress }) {    
    return (
        <View style={shadow} className='bg-[#FFFFFF] p-4 rounded-md flex-1 w-[300px] mr-2.5 h-fit'>
            <Text style={fontWeight400} className='text-sm text-center'>Today</Text>
            <View className="flex justify-between flex-row mt-3 items-baseline">
                <View className='flex flex-col gap-y-1 flex-1 items-start'>
                    <Ionicons size={28} color={'#000000'} name='flag'  />
                    <Text style={fontWeight500} className='text-sm'>{teamOne}</Text>
                </View>
                <Text style={fontWeight500} className='text-center text-[#9ca3af] px-2'>Vs</Text>
                <View className='flex flex-col gap-y-1 flex-1 items-end'>
                    <Ionicons size={28} color={'#000000'} name='flag' />
                    <Text style={fontWeight500} className='text-sm'>{teamTwo}</Text>
                </View>
            </View>

            <View className="flex justify-between flex-row items-center mt-1">
                <Text className='text-xs text-[#9ca3af]' style={fontWeight400}>{teamOneScore}/{teamOneWicket}</Text>
                <Text className='text-xs text-[#9ca3af]' style={fontWeight400}>{teamTwoScore}/{teamTwoWicket}</Text>
            </View>
            <View className='mt-auto'>
                {
                    live ?
                        <View className='flex flex-row items-center justify-center py-1'>
                            <Ionicons name='ellipse' size={16} color={'#ef4444'} />
                            <Text className='text-center text-[#9ca3af]' style={fontWeight500}>
                                Live
                            </Text>
                        </View>
                        :
                        <Text style={fontWeight500} className='text-center text-[#9ca3af] py-1'>{progress}</Text>
                }

            </View>
        </View>
    )
}

const { shadow } = StyleSheet.create({
    shadow: {
        elevation: 2
    }
})