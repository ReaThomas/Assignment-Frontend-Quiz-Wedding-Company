"use client"

interface QuestionCardProps {
  questionNumber: number
  question: string
  options: string[]
  selectedAnswer: string | null
  onSelectAnswer: (answerIndex: number) => void
}

export default function QuestionCard({
  questionNumber,
  question,
  options,
  selectedAnswer,
  onSelectAnswer,
}: QuestionCardProps) {
  return (
    <div className="space-y-4">
      {/* Question */}
      <div className="bg-[#c7e9f5] rounded-2xl p-5 md:p-6">
        <p className="text-base md:text-lg font-semibold text-[#1f4a5a] text-center">
          {questionNumber}. {question}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`w-full p-4 md:p-5 rounded-2xl font-medium text-base md:text-lg transition-all duration-200 cursor-pointer text-center
              ${
                selectedAnswer === option
                  ? "quiz-option-selected text-[#1f4a5a]"
                  : "quiz-option text-gray-800 hover:shadow-md"
              }
            `}
            aria-pressed={selectedAnswer === option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
