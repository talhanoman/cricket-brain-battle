import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"
import { fontWeight500 } from "../styles/fontWeights";
// bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]
export default () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name="home" size={28} color="#300073" />;
                        } else {
                            return <Ionicons name="home-outline" size={28} color="#d1d5db" />;
                        }
                    },
                    title: 'Home',
                    tabBarLabelStyle: [fontWeight500],
                    tabBarInactiveTintColor: '#d1d5db',
                    tabBarActiveTintColor: '#300073'
                }}
            />
            <Tabs.Screen
                name="quiz"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name="bulb" size={28} color="#300073" />;
                        } else {
                            return <Ionicons name="bulb-outline" size={28} color="#d1d5db" />;
                        }
                    },
                    title: 'Quiz',
                    tabBarLabelStyle: [fontWeight500],
                    tabBarInactiveTintColor: '#d1d5db',
                    tabBarActiveTintColor: '#300073'
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name="person" size={28} color="#300073" />;
                        } else {
                            return <Ionicons name="person-outline" size={28} color="#d1d5db" />;
                        }
                    },
                    title: 'Profile',
                    tabBarLabelStyle: [fontWeight500],
                    tabBarInactiveTintColor: '#d1d5db',
                    tabBarActiveTintColor: '#300073'
                }}
            />
        </Tabs>
    )
}