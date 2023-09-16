import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fontWeight600 } from '../styles/fontWeights';
import { StatusBar } from 'expo-status-bar';

import QuizMatchCard from '../components/QuizMatchCard';

export default function quiz() {
    return (
        <SafeAreaView className='flex-1'>
            <ScrollView className='bg-[#300073]'>
                <View style={{ height: 200 }} className='bg-[#300073] p-4'>
                    <Text className="text-lg text-[#FFFFFF]" style={fontWeight600}>Play Quiz</Text>
                    <Text className="text-base text-[#FFFFFF]" style={fontWeight600}>Explore all the live matches around the world!</Text>
                    <View className='h-[50px] w-full bg-gray-100 my-auto rounded-md'>
                        <Text className='text-center text-[#FFFFFF] my-auto'>Add Banner</Text>
                    </View>
                </View>
                <View className='-mt-10 w-full'>
                    <QuizMatchCard key={1} matchId={1} teamOne={'Pakistan'} teamTwo={'India'} teamOneScore={'152'} teamTwoScore={'152'} teamOneWicket={5} teamTwoWicket={6} />
                    <QuizMatchCard key={2} matchId={2} teamOne={'Pakistan'} teamTwo={'India'} teamOneScore={'152'} teamTwoScore={'152'} teamOneWicket={5} teamTwoWicket={6} />
                    <QuizMatchCard key={3} matchId={3} teamOne={'Pakistan'} teamTwo={'India'} teamOneScore={'152'} teamTwoScore={'152'} teamOneWicket={5} teamTwoWicket={6} />
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