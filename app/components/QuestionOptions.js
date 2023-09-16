import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { fontWeight400, fontWeight500, fontWeight600 } from '../styles/fontWeights'

const QuestionOptions = ({ options, question, index, setQuestions, selectedAns, questions }) => {
    const handleSelection = (index, option) => {
        let tempQuestions = [...questions];
        let tempQuestion = tempQuestions[index]
        tempQuestion.selectedAns = option;
        tempQuestions[index] = tempQuestion;
        setQuestions(tempQuestions)
    }
    const indexToAlphabet = (i) => {
        let char = ''
        switch (i) {
            case 0:
                char = 'A';
                break;
            case 1:
                char = 'B';
                break;
            case 2:
                char = 'C';
                break;
            case 3:
                char = 'D';
                break;
            default:
                break;
        }
        return char;
    }
    return (
        <View  className='border border-[#300073] py-2 px-2.5 rounded-md mb-3'>
            <Text style={fontWeight400} className='text-base mb-1'>Question#{index + 1}</Text>
            <Text style={fontWeight600} className='text-base mb-4'>{question}</Text>
            <View className='flex flex-row flex-wrap justify-between'>
                {
                    options.map((option, i) => {
                        return (
                            <Pressable key={i} onPress={() => { handleSelection(index, option) }} className={selectedAns === option ? 'w-[49%] bg-[#300073] border-[#300073] rounded-xl py-1 px-2 mb-2.5' : 'w-[49%] border border-[#300073] rounded-xl py-1 px-2 mb-2.5'}><Text className={selectedAns === option ? 'text-white' : ''} style={fontWeight600}>{indexToAlphabet(i)}. <Text className={selectedAns === option ? 'text-white' : ''} style={fontWeight500}>{option} </Text></Text></Pressable>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default QuestionOptions