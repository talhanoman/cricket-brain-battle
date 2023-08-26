import { View, Text, StyleSheet, Pressable } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fontWeight500, fontWeight600 } from '../styles/fontWeights';
import { ScrollView } from 'react-native-gesture-handler';
import MatchCard from '../components/MatchCard';
import { StatusBar } from 'expo-status-bar';
import { getLiveScore } from '../components/api/get';

export default function home() {

  const [allScores, setAllScores] = useState([])
  const [internationalMatch, setInternationalMatch] = useState([])
  const [leagueMatch, setLeagueMatch] = useState([])

  const LiveScoreUpdates = async () => {
    let allMatches = await getLiveScore()
    console.log("Res: ", allMatches)
    if (allMatches != 404) {
      allMatches?.typeMatches?.map((match) => {
        if (match?.matchType === 'International') {
          setInternationalMatch(match?.seriesAdWrapper)
        }
        else if (match?.matchType === 'League') {
          setLeagueMatch(match?.seriesAdWrapper)
        }
      })
    }
  }

  useEffect(() => {
    LiveScoreUpdates()
  }, [])

  console.clear()
  console.log('International Match', internationalMatch);
  console.log('League Match', leagueMatch);
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView>
        <View style={{ height: 200 }} className='bg-[#300073] p-4'>
          <Text className="text-lg text-[#FFFFFF]" style={fontWeight600}>Hello Talha!</Text>
          <Text className="text-base text-[#FFFFFF]" style={fontWeight600}>Explore all the live matches around the world!</Text>
          <View className='h-[50px] w-full bg-gray-100 my-auto rounded-md'>
            <Text className='text-center text-[#FFFFFF] my-auto'>Add Banner</Text>
          </View>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}
          className='flex flex-row p-2 relative -mt-10'
        >
          {/* Cards */}
          {/* International Matches */}
          {
            internationalMatch?.map((series, index) => (
              series?.seriesMatches?.matches?.map((match) => (
                <MatchCard key={index} live={false} matchId={match?.matchInfo?.matchId} teamOne={match?.matchInfo?.team1?.teamName} teamTwo={match?.matchInfo?.team2?.teamName} teamOneScore={match?.matchScore?.team1Score?.inngs1?.runs ? match?.matchScore?.team1Score?.inngs1?.runs : "-"} teamOneWicket={match?.matchScore?.team1Score?.inngs1?.wickets ? match?.matchScore?.team1Score?.inngs1?.wickets : "-"} teamTwoScore={match?.matchScore?.team2Score?.inngs1?.runs ? match?.matchScore?.team2Score?.inngs1?.runs : "-"} teamTwoWicket={match?.matchScore?.team2Score?.inngs1?.wickets ? match?.matchScore?.team2Score?.inngs1?.wickets : "-"} progress={match?.matchInfo?.status} />
              ))
            ))
          }
          {/* League Matches */}
          {
            leagueMatch?.map((series) => (
              series?.seriesMatches?.matches?.map((match, index) => (
                <MatchCard key={index} matchId={match?.matchInfo?.matchId} live={false} teamOne={match?.matchInfo?.team1?.teamName} teamTwo={match?.matchInfo?.team2?.teamName} teamOneScore={match?.matchScore?.team1Score?.inngs1?.runs ? match?.matchScore?.team1Score?.inngs1?.runs : "-"} teamOneWicket={match?.matchScore?.team1Score?.inngs1?.wickets ? match?.matchScore?.team1Score?.inngs1?.wickets : "-"} teamTwoScore={match?.matchScore?.team2Score?.inngs1?.runs ? match?.matchScore?.team2Score?.inngs1?.runs : "-"} teamTwoWicket={match?.matchScore?.team2Score?.inngs1?.wickets ? match?.matchScore?.team2Score?.inngs1?.wickets : "-"} progress={match?.matchInfo?.status} />
              ))
            ))
          }
        </ScrollView>
        <View className='p-2'>
          <View className='bg-[#FFFFFF] p-4 rounded-md' style={shadow}>
            <Text style={fontWeight600} className='text-lg'>
              Leaderboard
            </Text>
            {/* Top Ranks Row */}
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
            {/* Buttons Row */}
            <View className='flex flex-row justify-between mt-4 gap-x-2'>
              <Pressable className="border border-primary rounded-lg w-1/2 p-3 active:bg-gray-100 flex flex-row justify-center items-center">
                <Ionicons name='bar-chart' size={24} color={'#300073'} />
                <Text className="text-primary text-center ml-1" style={fontWeight500}>
                  View All
                </Text>
              </Pressable>
              <Pressable className="bg-[#300073] w-1/2 rounded-lg p-3 active:bg-[#371f5a] flex flex-row justify-center items-center" >
                <Ionicons name='game-controller' size={24} color={'#FFFFFF'} />
                <Text className="text-[#FFFFFF] text-center ml-1" style={fontWeight500}>
                  Play
                </Text>
              </Pressable>
            </View>
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