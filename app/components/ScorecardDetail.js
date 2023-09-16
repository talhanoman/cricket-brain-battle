import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { fontWeight500, fontWeight600 } from '../styles/fontWeights'
import Collapsible from 'react-native-collapsible';
import { Ionicons } from "@expo/vector-icons"
import CollapsibleBattingContent from './CollapsibleBattingContent';
import CollapsibleBowlingContent from './CollapsibleBowlingContent';
import { DATA_BOWLING_1, DATA_BOWLING_2, DATA_BATTING_1, DATA_BATTING_2 } from '../../data/scorecard-data';

const ScorecardDetail = () => {
  // Team1 & Team2 will be passed as props
  let team1 = 'Pakistan';
  let team2 = 'India';
  const [selectedTeam, setSelectedTeam] = useState(team1)
  // Team 1
  const [team1Batting, setTeam1Batting] = useState(false);
  const [team1Bowling, setTeam1Bowling] = useState(true);

  // // Team 2
  // const [team2Batting, setTeam2Batting] = useState(false);
  // const [team1Bowling, setTeam1Bowling] = useState(true);
  return (
    <View>
      <View className='flex flex-row justify-between'>
        <Pressable onPress={() => { setSelectedTeam(team1) }} className={team1 === selectedTeam ? `bg-[#300073] h-14 w-[49%] rounded-lg p-2` : `border border-gray-300 h-14 w-[49%] rounded-lg p-2`}>
          <Text className={team1 === selectedTeam ? 'text-white' : ''} style={fontWeight500}>{team1}</Text>
          <Text className={team1 === selectedTeam ? 'text-xs text-white' : 'text-xs'} style={fontWeight500}>152 / 0</Text>
        </Pressable>
        <Pressable onPress={() => { setSelectedTeam(team2) }} className={team2 === selectedTeam ? `bg-[#300073] h-14 w-[49%] rounded-lg p-2` : `border border-gray-300 h-14 w-[49%] rounded-lg p-2`}>
          <Text className={team2 === selectedTeam ? 'text-white' : ''} style={fontWeight500}>{team2}</Text>
          <Text className={team2 === selectedTeam ? 'text-xs text-white' : 'text-xs'} style={fontWeight500}>152 / 0</Text>
        </Pressable>
      </View>
      <View className='h-[1px] w-full my-4 bg-gray-300' />
      <Pressable onPress={() => { setTeam1Batting(!team1Batting) }} className='bg-[#300073] rounded-lg w-full p-3 flex flex-row justify-between items-center mb-4'>
        <Text className='text-[#FFFFFF] text-base' style={fontWeight600}>Batting</Text>
        {
          team1Batting ?
            <Ionicons name="chevron-forward-outline" size={28} color="#fff" />
            :
            <Ionicons name="chevron-down-outline" size={28} color="#fff" />
        }
      </Pressable>
      {/* Batting */}
      <Collapsible className='p-3' collapsed={team1Batting} >
        <CollapsibleBattingContent DATA={selectedTeam === team1 ? DATA_BATTING_1 : DATA_BATTING_2} />
      </Collapsible>
      <Pressable onPress={() => { setTeam1Bowling(!team1Bowling) }} className='bg-[#300073] rounded-lg w-full p-3 flex flex-row justify-between items-center'>
        <Text className='text-[#FFFFFF] text-base' style={fontWeight600}>Bowling</Text>
        {
          team1Bowling ?
            <Ionicons name="chevron-forward-outline" size={28} color="#fff" />
            :
            <Ionicons name="chevron-down-outline" size={28} color="#fff" />
        }
      </Pressable>
      <Collapsible className='p-3' collapsed={team1Bowling} >
        <CollapsibleBowlingContent DATA={selectedTeam === team1 ? DATA_BOWLING_1 : DATA_BOWLING_2} />
      </Collapsible>
    </View>
  )
}

export default ScorecardDetail