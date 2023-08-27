import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useGlobalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { fontWeight500, fontWeight600 } from '../styles/fontWeights'
import { Image } from 'expo-image'
import { DATA_LEADERBOARD } from '../../data/leaderboard-data'
import LeaderboardContent from '../components/LeaderboardContent'


const Leaderboard = () => {
    return (
        <SafeAreaView className='flex-1'>
            <ScrollView>
                <View style={{ height: 200 }} className='bg-[#300073] p-4'>
                    {/* <Text className="text-base text-[#FFFFFF]" style={fontWeight600}>Leaderboard</Text> */}
                    <Text className="text-xl text-[#FFFFFF]" style={fontWeight600}>Leaderboard</Text>
                    <View className='h-[50px] w-full bg-gray-100 my-auto rounded-md'>
                        <Text className='text-center text-[#300073] my-auto'>Add Banner</Text>
                    </View>
                </View>
                <View className='p-2'>
                    <View style={shadow} className='bg-white -mt-10 rounded-lg p-4'>
                        <View className='flex flex-row justify-between mt-4'>
                            <View className='flex flex-col items-center'>
                                <Image
                                    source={'https://cdn-icons-png.flaticon.com/512/166/166364.png'}
                                    className='h-12 w-12 rounded-full mt-6'
                                />
                                <Text className='mt-1' style={fontWeight500}>Talha</Text>
                                <Text className='text-sm text-[#9ca3af]' style={fontWeight500}>2nd Position</Text>
                                <Text className='text-sm text-[#9ca3af]' style={fontWeight500}>862 pts.</Text>
                            </View>
                            <View className='flex flex-col items-center'>
                                <Image
                                    source={'https://cdn-icons-png.flaticon.com/512/166/166364.png'}
                                    className='h-12 w-12 rounded-full'
                                />
                                <Text className='mt-1' style={fontWeight500}>Arhum</Text>
                                <Text className='text-sm text-[#9ca3af]' style={fontWeight500}>1st Position</Text>
                                <Text className='text-sm text-[#9ca3af]' style={fontWeight500}>862 pts.</Text>
                            </View>
                            <View className='flex flex-col items-center'>
                                <Image
                                    source={'https://cdn-icons-png.flaticon.com/512/166/166364.png'}
                                    className='h-12 w-12 rounded-full mt-6'
                                />
                                <Text className='mt-1' style={fontWeight500}>Shoaib</Text>
                                <Text className='text-sm text-[#9ca3af]' style={fontWeight500}>3rd Position</Text>
                                <Text className='text-sm text-[#9ca3af]' style={fontWeight500}>862 pts.</Text>
                            </View>
                        </View>
                        <View className='h-[1px] my-3 bg-gray-300' />
                        <LeaderboardContent DATA={DATA_LEADERBOARD} />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}


const { shadow } = StyleSheet.create({
    shadow: {
        elevation: 2
    }
})
export default Leaderboard