import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fontWeight400, fontWeight500, fontWeight600 } from '../styles/fontWeights'
import { useNavigation } from 'expo-router'
import { Authenticate } from '../components/api/post'

export default function Login() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const emailToCheck = 'talha@gmail.com'
  // const passwordToCheck = '123456'

  const Login = async () => {
    try {
      let loginResponse = await Authenticate(email, password);
      if (loginResponse === 200)
      {
        Alert.alert(
          'Correct Credentials'
        )
        navigation.navigate('(tabs)')
      }
      else if (loginResponse === 400)
      {
        Alert.alert(
          'Wrong Credentials'
        )
      }
      else
      {
        Alert.alert(
          'Some Error Occured'
        )
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <SafeAreaView className='p-4'>
      <View>
        <Pressable className='active:bg-gray-100 w-[42px] rounded-full' onPress={()=> navigation.navigate('welcome')}>
          <Ionicons name='arrow-back-circle-outline' size={42} color={'#300073'} />
        </Pressable>
        <Text className='text-xl mt-4' style={fontWeight600}>Login in to cricket brain battle</Text>
        {/* Input fields */}
        <View className='mt-4'>
          <Text className='text-sm mb-1' style={fontWeight400}>Email :</Text>
          <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} keyboardType={"email-address"} className='p-2 border border-[#d1d5db] rounded-md' style={fontWeight400} />

          <Text className='text-sm mb-1' style={fontWeight400}>Password :</Text>
          <TextInput placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} keyboardType={"email-address"} className='p-2 border border-[#d1d5db] rounded-md' style={fontWeight400} />

          <Pressable onPress={Login} className="bg-[#300073] rounded-lg w-full p-3 mt-4 active:bg-[#371f5a]">
            <Text className="text-[#FFFFFF] text-center" style={fontWeight500}>
              Continue
            </Text>
          </Pressable>

          <View className='flex flex-row items-center my-7'>
            <View className='flex-1 h-[2px] bg-[#d1d5db]' />
            <Text className="text-xs mx-1 text-[#d1d5db]" style={fontWeight600}>or</Text>
            <View className='flex-1 h-[2px] bg-[#d1d5db]' />
          </View>


          <Pressable onPress={()=> navigation.navigate('(tabs)')} className="border border-[#000000] rounded-lg w-full p-3 mt-4 flex flex-row items-center justify-center active:bg-gray-100">
            <Ionicons name='logo-facebook' size={26} />
            <Text className="text-[#000000] text-center" style={fontWeight500}> Continue with Google</Text>
          </Pressable>

          <Pressable className="border border-[#000000] rounded-lg w-full p-3 mt-4 flex flex-row items-center justify-center active:bg-gray-100">
            <Ionicons name='logo-google' size={26} />
            <Text className="text-[#000000] text-center" style={fontWeight500}> Continue with Facebook</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}