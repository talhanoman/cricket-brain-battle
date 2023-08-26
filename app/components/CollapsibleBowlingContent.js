import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { fontWeight500, fontWeight400 } from '../styles/fontWeights'
import { ScrollView } from 'react-native-gesture-handler';



const CollapsibleBowlingContent = ({ DATA }) => {

    const Item = ({ bowlerName, overs, runs, wickets, economy }) => (
        <View className="flex flex-row bg-gray-100 p-1">
            <View className="w-[34.8%]">
                <Text style={fontWeight400} className="text-[10px]">{bowlerName}</Text>
            </View>
            <View className="w-[18.5%]">
                <Text style={fontWeight400} className="text-[10px]">{runs}</Text>
            </View>
            <View className="w-[18.5%]">
                <Text style={fontWeight400} className="text-[10px]">{overs}</Text>
            </View>
            <View className="w-[18.5%]">
                <Text style={fontWeight400} className="text-[10px]">{wickets}</Text>
            </View>
            <View className="w-[18.5%]">
                <Text style={fontWeight400} className="text-[10px]">{economy}</Text>
            </View>
        </View>
    );

    return (
        <>
            <View className="flex flex-row bg-gray-300 p-1">
                <View className="w-[34.8%]">
                    <Text style={fontWeight500} className="text-xs">Bowlers</Text>
                </View>
                <View className="w-[18.5%]">
                    <Text style={fontWeight500} className="text-xs">Overs</Text>
                </View>
                <View className="w-[18.5%]">
                    <Text style={fontWeight500} className="text-xs">Runs</Text>
                </View>
                <View className="w-[18.5%]">
                    <Text style={fontWeight500} className="text-xs">Wickets</Text>
                </View>
                <View className="w-[18.5%]">
                    <Text style={fontWeight500} className="text-xs">EC</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ width: '100%' }} showsHorizontalScrollIndicator={false} horizontal={true}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <Item
                            bowlerName={item.bowlerName}
                            overs={item.overs}
                            runs={item.runs}
                            wickets={item.wickets}
                            economy={item.economy}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>

        </>
    );
};

export default CollapsibleBowlingContent;
