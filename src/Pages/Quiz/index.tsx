import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'keep-react'
import { ArrowFatLineLeft, ArrowFatLineRight } from 'phosphor-react'

interface QuizProps {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export default function Quiz() {
  const link = document.querySelector<HTMLLinkElement>(
    "link[rel='shortcut icon']",
  )
  const pageName = document.querySelector<HTMLTitleElement>('title')

  if (link && pageName) {
    link.href = 'src/Assets/quizicon.png'
    pageName.innerHTML = 'Quiz'
  }

  const [quiz, setQuiz] = useState<QuizProps[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [answerStatus, setAnswerStatus] = useState<(boolean | null)[]>([])

  function getQuiz() {
    setLoading(true)
    axios
      .get('https://tryvia.ptr.red/api.php?amount=10&type=multiple')
      .then((response) => {
        setLoading(false)
        setQuiz(response.data.results)
        setAnswerStatus(Array(response.data.results.length).fill(null))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function handleStartQuiz() {
    getQuiz()
  }

  function handleAnswer(answer: string) {
    if (answerStatus[currentQuestion] !== null) return // Impede a seleção múltipla

    const newSelectedAnswers = [...selectedAnswers]
    const newAnswerStatus = [...answerStatus]

    newSelectedAnswers[currentQuestion] = answer
    newAnswerStatus[currentQuestion] =
      answer === quiz[currentQuestion].correct_answer

    setSelectedAnswers(newSelectedAnswers)
    setAnswerStatus(newAnswerStatus)
  }

  function handleFinalizeQuiz() {
    if (selectedAnswers.length !== quiz.length) {
      alert('Selecione todas as respostas antes de finalizar o quiz')
    } else {
      alert(
        `Quiz Finalizado! Sua pontuação: ${answerStatus.filter((status) => status).length}/${quiz.length}`,
      )
    }
  }
  const currentQuizItem = quiz[currentQuestion]

  return (
    <main className="flex justify-center items-center min-h-screen">
      {!quiz.length ? (
        <Button onClick={handleStartQuiz}>Iniciar Quiz</Button>
      ) : (
        <div className="w-96 bg-slate-100 p-4 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold">Quiz</h1>
          {loading ? (
            <div className="flex justify-center mt-2">
              <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
            </div>
          ) : (
            <>
              <p className="text-xl font-bold">
                Questão {currentQuestion + 1}/{quiz.length}:
              </p>
              <div className="mt-4 mb-4">{currentQuizItem.question}</div>
              <ul className="flex flex-col gap-4 text-lg">
                {[
                  ...currentQuizItem.incorrect_answers,
                  currentQuizItem.correct_answer,
                ]
                  .sort()
                  .map((answer, index) => {
                    let answerClass = 'bg-white'
                    if (selectedAnswers[currentQuestion] === answer) {
                      answerClass = answerStatus[currentQuestion]
                        ? 'bg-green-200 border-black border-2'
                        : 'bg-red-200 border-black border-2'
                    } else if (
                      answer === currentQuizItem.correct_answer &&
                      answerStatus[currentQuestion] === false
                    ) {
                      answerClass = 'bg-green-200 '
                    }
                    return (
                      <li
                        key={index}
                        className={`${answerClass} w-full text-center rounded-lg h-12 cursor-pointer`}
                        onClick={() => handleAnswer(answer)}
                      >
                        {answer}
                      </li>
                    )
                  })}
              </ul>
              <div className="mt-4 flex justify-between">
                {currentQuestion === 0 && (
                  <div className="w-32 h-12 invisible"></div>
                )}
                {currentQuestion > 0 && (
                  <>
                    <Button
                      size="sm"
                      className="h-12"
                      onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    >
                      <ArrowFatLineLeft size={20} />
                    </Button>
                  </>
                )}
                {currentQuestion < quiz.length - 1 ? (
                  <Button
                    size="sm"
                    className="h-12"
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  >
                    <ArrowFatLineRight size={20} />
                  </Button>
                ) : (
                  <Button size="sm" onClick={() => handleFinalizeQuiz()}>
                    Finalizar
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </main>
  )
}
