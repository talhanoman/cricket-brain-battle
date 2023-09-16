import { View, Text } from 'react-native'
import React, { useState } from 'react'
import QuestionOptions from './QuestionOptions'



const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "What is the capital of France?",
      options: ['Less than 10', 'Less than 20', 'Less than 50', 'Less than 100'],
      selectedAns : ''
    },
    {
      question: "What is the capital of Pakistan?",
      options: ['Less than 10', 'Less than 20', 'Less than 50', 'Less than 100'],
      selectedAns : ''
    },
    {
      question: "What is the captain of India?",
      options: ['Less than 10', 'Less than 20', 'Less than 50', 'Less than 100'],
      selectedAns : ''
    }
  ])
  return (
    <View>
      {
        questions.map((question, index) => {
          return (
            <QuestionOptions key={index} options={question.options} question={question.question} index={index} selectedAns={question.selectedAns} setQuestions={setQuestions} questions={questions} />
          )
        })
      }
    </View>
  )
}

export default Quiz