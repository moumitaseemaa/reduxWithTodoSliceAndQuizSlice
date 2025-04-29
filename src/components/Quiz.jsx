import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitAnswer } from '../slices/quiz/quizSlice'
import { questions } from '../data/question'

const Quiz = () => {
  const currentQuestionIndex = useSelector(state=> state.quiz.currentQuestionIndex)
  const score = useSelector(state=> state.quiz.score)
  const eachQuestion = questions[currentQuestionIndex]
  console.log(eachQuestion);

  let handleAnswer = (item)=>{
    dispatch(submitAnswer(item))

  }
  
  const dispatch = useDispatch()
  return (
    <section className=" w-[100%] h-[100vh] bg-purple-400 flex flex-col justify-center items-center ">
    <h1 className="text-2xl font-bold mb-4">Quiz Game with React & Redux</h1>
    <div className="py-8 px-8 bg-white border-[3px] border-black rounded-3xl">
      {/* <button  className='btn'>hello</button> */}
      <h2 className='text-lg font-bold mb-2'>Quiz Number : {currentQuestionIndex+1} </h2>
      <h2 className='text-lg font-bold'>{eachQuestion.question}</h2>
      {
        eachQuestion.options.map((item,index)=>(
          <button onClick={()=>handleAnswer(item)} key={index} className='subBtn mr-2 my-2'>{item}</button>

        ))
      }

      <p>Your Score is : {score}</p>
    </div>
  </section>
  )
}

export default Quiz
