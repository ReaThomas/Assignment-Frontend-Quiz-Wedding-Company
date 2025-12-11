"use client"

import { useState, useEffect } from "react"
import QuizContainer from "@/components/quiz-container"
import ResultsPage from "@/components/results-page"
import { QUIZ_DATA } from "@/lib/quiz-data"

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<(string | null)[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = QUIZ_DATA[currentQuestion].options[answerIndex]

    const isCorrect = answerIndex === QUIZ_DATA[currentQuestion].correctIndex
    if (!answers[currentQuestion] || answers[currentQuestion] !== QUIZ_DATA[currentQuestion].options[answerIndex]) {
      if (isCorrect) {
        setScore(score + 1)
      }
    }
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < QUIZ_DATA.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setAnswers([])
    setShowResults(false)
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "linear-gradient(to left, #97CAE8, #4EB5D9, #CEEFF9)" }}>
      {showResults ? (
      <ResultsPage score={score} totalQuestions={QUIZ_DATA.length} onRestart={handleRestart} />
      ) : (
      <QuizContainer
        currentQuestion={currentQuestion}
        totalQuestions={QUIZ_DATA.length}
        question={QUIZ_DATA[currentQuestion]}
        selectedAnswer={answers[currentQuestion] || null}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSubmit={handleSubmit}
        isFirstQuestion={currentQuestion === 0}
        isLastQuestion={currentQuestion === QUIZ_DATA.length - 1}
        canGoNext={answers[currentQuestion] !== undefined && answers[currentQuestion] !== null}
      />
      )}
    </div>
  )
}
