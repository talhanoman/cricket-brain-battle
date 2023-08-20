import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useGlobalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { fontWeight500, fontWeight600 } from '../styles/fontWeights'
import Summary from '../components/Summary'
import News from '../components/News'
import ScorecardDetail from '../components/ScorecardDetail'

const Scorecard = () => {
    const { id } = useGlobalSearchParams()
    const [currentTab, setCurrentTab] = useState('Summary')
    return (
        <SafeAreaView className='flex-1'>
            <ScrollView>
                <View style={{ height: 200 }} className='bg-[#300073] p-4'>
                    <Text className="text-lg text-[#FFFFFF]" style={fontWeight600}>Scorecard</Text>
                    <Text className="text-base text-[#FFFFFF]" style={fontWeight600}>Pakistan vs India</Text>
                    <View className='h-[50px] w-full bg-gray-100 my-auto rounded-md'>
                        <Text className='text-center text-[#300073] my-auto'>Add Banner</Text>
                    </View>
                </View>
                <View className='p-2'>
                    <View style={shadow} className='bg-white -mt-10 rounded-lg p-4'>
                        <View className="flex-row flex justify-between w-full relative">
                            {/* Tabs */}
                            <Pressable onPress={() => setCurrentTab('Summary')} className='px-3 py-2 rounded-3xl border-[#300073] border flex flex-row items-center w-[32%] justify-center active:bg-gray-100'>
                                <Text style={fontWeight500} className='text-[#300073] text-xs text-center'>
                                    Summary
                                </Text>
                            </Pressable>

                            <Pressable onPress={() => setCurrentTab('Scorecard')} className='px-3 py-2 rounded-3xl border-[#300073] border flex flex-row items-center w-[32%] justify-center active:bg-gray-100'>
                                <Text style={fontWeight500} className='text-[#300073] text-xs text-center'>
                                    Scorecard
                                </Text>
                            </Pressable>
                            <Pressable onPress={() => setCurrentTab('News')} className='px-3 py-2 rounded-3xl border-[#300073] border flex flex-row items-center w-[32%] justify-center active:bg-gray-100'>
                                <Text style={fontWeight500} className='text-[#300073] text-xs text-center'>
                                    News
                                </Text>
                            </Pressable>
                        </View>
                        <View className='h-[1px] my-3 bg-gray-300' />
                        {
                            currentTab === 'Summary' ?
                                <Summary />
                                :
                                currentTab === 'News' ?
                                    <News />
                                    :
                                    <ScorecardDetail />
                        }
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
export default Scorecard