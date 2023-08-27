import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { fontWeight500, fontWeight400 } from '../styles/fontWeights'
import { ScrollView } from 'react-native-gesture-handler';



const LeaderboardContent = ({ DATA }) => {

    const Item = ({ username, totalPoints, index }) => (
        <View className="flex flex-row bg-gray-100 p-1 justify-between">
            <View className="w-[29.8%]">
                <Text style={fontWeight400} className="text-xs">{index + 1}</Text>
            </View>
            <View className="w-[34.8%]">
                <Text style={fontWeight400} className="text-xs">{username}</Text>
            </View>
            <View className="w-[34.8%]">
                <Text style={fontWeight400} className="text-xs">{totalPoints}</Text>
            </View>
        </View>
    );

    return (
        <>
            <View className="flex flex-row bg-gray-300 p-1 justify-between">
                <View className="w-[29.8%]">
                    <Text style={fontWeight500} className="text-xs">Position</Text>
                </View>
                <View className="w-[34.8%]">
                    <Text style={fontWeight500} className="text-xs">Name</Text>
                </View>
                <View className="w-[34.8%]">
                    <Text style={fontWeight500} className="text-xs">Points</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ width: '100%' }} showsHorizontalScrollIndicator={false} horizontal={true}>
                <FlatList
                    data={DATA}
                    renderItem={({ item, index }) => (
                        <Item
                            username={item.username}
                            totalPoints={item.totalPoints}
                            index={index}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
            <View className="flex flex-row bg-gray-300 p-1 justify-between">
                <View className="w-[29.8%]">
                    <Text style={fontWeight500} className="text-xs">2223</Text>
                </View>
                <View className="w-[34.8%]">
                    <Text style={fontWeight500} className="text-xs">You</Text>
                </View>
                <View className="w-[34.8%]">
                    <Text style={fontWeight500} className="text-xs">5</Text>
                </View>
            </View>

        </>
    );
};

export default LeaderboardContent;
