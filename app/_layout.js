import { Stack } from "expo-router";
import "../global.css";

export default function () {
    return (
        <Stack screenOptions={{
            headerShown : false
        }}>
            <Stack.Screen name="(tabs)" options={{headerShown : false}} />
        </Stack>
    )
}