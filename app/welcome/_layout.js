import { View, Text, Pressable, StyleSheet } from 'react-native'

import React, { useCallback } from 'react'
import {useNavigation } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { fontWeight500, fontWeight700 } from '../styles/fontWeights';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Image } from 'expo-image';

export default function Welcome() {
    const navigation = useNavigation()
    let [fontsLoaded] = useFonts({
        'Inter-400': Inter_400Regular,
        'Inter-500': Inter_500Medium,
        'Inter-600': Inter_600SemiBold,
        'Inter-700': Inter_700Bold
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (

        <SafeAreaView className='flex-1 flex flex-col justify-center p-4' onLayout={onLayoutRootView}>
            <View className='flex-1 justify-center'>
                <Text className='text-4xl text-primary' style={fontWeight700}>Welcome to</Text>
                <Text className='text-4xl text-primary' style={fontWeight700}>Cricket Brain Battle</Text>
                {/* <Image
                    style={styles.image}
                    source="https://cdn3d.iconscout.com/3d/premium/thumb/cricket-player-6563274-5410605.png?f=webp"                    
                    contentFit="contain"
                    transition={1000}                    
                    onError={()=> console.log('Error')}
                /> */}

                {/* <Link href={'/login'}>
                    </Link> */}
            </View>
            <View className='bg-white py-5 flex flex-col gap-y-3'>
                <Pressable className="bg-[#300073] w-full rounded-lg p-3 active:bg-activePrimary" >
                    <Text className="text-[#FFFFFF] text-center" style={fontWeight500}>
                        Get started
                    </Text>
                </Pressable>

                <Pressable onPress={()=> navigation.navigate('login')} className="border border-primary rounded-lg w-full p-3 active:bg-gray100">
                    <Text className="text-primary text-center" style={fontWeight500}>
                        Login
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

// const styles = StyleSheet.create({
//     image : {
//         width : '100%',
//         height : 250,
//         flex : 1
//     }
// })