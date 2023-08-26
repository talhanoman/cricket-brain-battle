import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { fontWeight500, fontWeight400 } from '../styles/fontWeights'
import { ScrollView } from 'react-native-gesture-handler';



const CollapsibleBattingContent = ({ DATA }) => {

    const Item = ({ batterName, balls, runs, fours, sixes }) => (
        <View className="flex flex-row bg-gray-100 p-1">
            <View className="w-[34.8%]">
                <Text style={fontWeight400} className="text-[10px]">{batterName}</Text>
            </View>
            <View className="w-[18.5%]">
                <Text style={fontWeight400} className="text-[10px]">{runs}</Text>
            </View>
            <View className="w-[18.5%]">
                <Text style={fontWeight400} className="text-[10px]">{balls}</Text>
            </View>
            <View className="w-[18.5%]">
                <Text style={fontWeight400} className="text-[10px]">{fours}</Text>
            </View>
            <View className="w-[18.5%]">
                <Text style={fontWeight400} className="text-[10px]">{sixes}</Text>
            </View>
        </View>
    );

    return (
        <>
            <View className="flex flex-row bg-gray-300 p-1">
                <View className="w-[34.8%]">
                    <Text style={fontWeight500} className="text-xs">Batsman</Text>
                </View>
                <View className="w-[18.5%]">
                    <Text style={fontWeight500} className="text-xs">Runs</Text>
                </View>
                <View className="w-[18.5%]">
                    <Text style={fontWeight500} className="text-xs">Balls</Text>
                </View>
                <View className="w-[18.5%]">
                    <Text style={fontWeight500} className="text-xs">4s</Text>
                </View>
                <View className="w-[18.5%]">
                    <Text style={fontWeight500} className="text-xs">6s</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ width: '100%' }} showsHorizontalScrollIndicator={false} horizontal={true}>

                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <Item
                            batterName={item.batterName}
                            balls={item.balls}
                            runs={item.runs}
                            fours={item.fours}
                            sixes={item.sixes}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
            <View className="flex flex-row bg-gray-300 p-1 justify-between items-center">
                <View className="w-[49.8%]">
                    <Text style={fontWeight500} className="text-xs">Extras</Text>
                </View>
                <View className="w-[49.8%]">
                    <Text style={fontWeight500} className="text-xs">Total</Text>
                </View>
            </View>
            <View className="flex flex-row bg-gray-100 p-1 justify-between items-center">
                <View className="w-[49.8%]">
                    <Text style={fontWeight500} className="text-xs">(lb 2, b 0, wd 3, nb 0)</Text>
                </View>
                <View className="w-[49.8%]">
                    <Text style={fontWeight500} className="text-xs">168 (8.62 runs per over)</Text>
                </View>
            </View>
        </>
    );
};

export default CollapsibleBattingContent;
