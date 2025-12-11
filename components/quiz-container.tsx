"use client"

import { useState } from "react"
import QuestionCard from "./question-card"
import ProgressBar from "./progress-bar"
import PawCharacter from "./paw-character"
import NavigationButtons from "./navigation-buttons"
import type { QuizQuestion } from "@/lib/quiz-data"

interface QuizContainerProps {
  currentQuestion: number
  totalQuestions: number
  question: QuizQuestion
  selectedAnswer: string | null
  onAnswer: (answerIndex: number) => void
  onNext: () => void
  onPrevious: () => void
  onSubmit: () => void
  isFirstQuestion: boolean
  isLastQuestion: boolean
  canGoNext: boolean
}

export default function QuizContainer({
  currentQuestion,
  totalQuestions,
  question,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrevious,
  onSubmit,
  isFirstQuestion,
  isLastQuestion,
  canGoNext,
}: QuizContainerProps) {
  const [showPaw, setShowPaw] = useState(isFirstQuestion)

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
  <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl" />
      {/* Main quiz card */}
      <div className="quiz-card relative z-10 p-8 md:p-12 fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-serif italic font-bold text-[#1f4a5a] mb-2 text-balance">
        Test Your Knowledge
        </h1>
        <p className="text-gray-600 text-base md:text-lg">Answer all questions to see your results</p>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <ProgressBar current={currentQuestion + 1} total={totalQuestions} />
      </div>

      {/* Question card */}
      <div className="mb-8">
        <QuestionCard
        questionNumber={currentQuestion + 1}
        question={question.question}
        options={question.options}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={onAnswer}
        />
      </div>

      {/* Navigation buttons */}
      <NavigationButtons
        onNext={onNext}
        onPrevious={onPrevious}
        onSubmit={onSubmit}
        isFirstQuestion={isFirstQuestion}
        isLastQuestion={isLastQuestion}
        canGoNext={canGoNext}
        showSubmit={isLastQuestion}
      />
      </div>

      {/* Bottom shadow decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-400 to-gray-500 rounded-b-3xl -z-10" />

            {/* Paw character */}
            {showPaw && (
      <div className="absolute bottom-20 left-4 bg-blue-500 p-6 rounded-full">
        <PawCharacter />
      </div>
      )}
    </div>
    
  )
}
