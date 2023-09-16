import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { fontWeight400, fontWeight500, fontWeight600 } from '../styles/fontWeights'
import { Ionicons } from '@expo/vector-icons'
import { Link, router, useNavigation, useRouter } from 'expo-router'

export default function QuizMatchCard({ matchId, live, teamOne, teamTwo, teamOneScore, teamTwoScore, teamOneWicket, teamTwoWicket, progress }) {
    const navigation = useNavigation()
    const router = useRouter()
    const handlePlay = () => {
        router.push({ pathname: '/matchQuiz/[id]', params: { id: matchId } })
    }
    return (
        <View style={matchCard} >
            <Text style={fontWeight400} className='text-sm text-center'>Today</Text>
            <View className="flex justify-between flex-row mt-3 items-baseline">
                <View className='flex flex-col gap-y-1 flex-1 items-start'>
                    <Ionicons size={28} color={'#000000'} name='flag' />
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
            {/* <Link className='w-full' href={'/matchQuiz/[id]'}> */}
            <Pressable onPress={handlePlay} className="border-[#300073] border-2 w-full rounded-lg p-3 active:bg-gray-100 flex flex-row justify-center items-center" >
                <Ionicons name='game-controller' size={24} color={'#300073'} />
                <Text className="text-[#300073] text-center ml-1" style={fontWeight600}>
                    Play
                </Text>
            </Pressable>
            {/* </Link> */}
        </View>
    )
}

const { shadow, matchCard } = StyleSheet.create({
    matchCard: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        width: '95%',
        elevation: 2,
        borderRadius: 6,
        marginTop: 8,
        marginBottom: 8,
    },
    shadow: {
        elevation: 2
    }
})