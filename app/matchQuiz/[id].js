import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useGlobalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { fontWeight500, fontWeight600 } from '../styles/fontWeights'
import Summary from '../components/Summary'
import Quiz from '../components/Quiz'
import ScorecardDetail from '../components/ScorecardDetail'


const tabStyle = 'px-3 py-2 rounded-3xl border-[#300073] border flex flex-row items-center w-[32%] justify-center active:bg-gray-100';
const tabActiveStyle = 'px-3 py-2 rounded-3xl bg-[#300073] border flex flex-row items-center w-[32%] justify-center active:bg-gray-100';
const tabText = 'text-[#300073] text-xs text-center';
const tabTextActive = 'text-[#FFFFFF] text-xs text-center';

const MatchQuiz = () => {
    const { id } = useGlobalSearchParams()
    console.log('Match Id', id)
    const [currentTab, setCurrentTab] = useState('Summary')
    return (
        <SafeAreaView className='flex-1'>
            <ScrollView>
                <View style={{ height: 200 }} className='bg-[#300073] p-4'>
                    <Text className="text-base text-[#FFFFFF]" style={fontWeight600}>Quiz</Text>
                    <Text className="text-xl text-[#FFFFFF]" style={fontWeight600}>Pakistan vs India</Text>
                    <View className='h-[50px] w-full bg-gray-100 my-auto rounded-md'>
                        <Text className='text-center text-[#300073] my-auto'>Add Banner</Text>
                    </View>
                </View>
                <View className='p-2'>
                    <Quiz />
                </View>


            </ScrollView>
        </SafeAreaView >
    )
}


const { shadow } = StyleSheet.create({
    shadow: {
        elevation: 2
    }
})
export default MatchQuiz