"use client"

import animateScore from "@/components/ui/animate-score"

interface ResultsPageProps {
  score: number
  totalQuestions: number
  onRestart: () => void
}

export default function ResultsPage({ score, totalQuestions, onRestart }: ResultsPageProps) {
  const percentage = Math.round((score / totalQuestions) * 100)

  return (
    <div className="w-full max-w-2xl fade-in">
      <div className="quiz-card p-12 md:p-16 text-center">
        {/* Keep Learning message */}
        <p className="text-gray-600 text-base md:text-lg mb-8">Keep Learning!</p>

        {/* Score heading */}
        <h2 className="text-3xl md:text-4xl font-serif italic font-bold text-[#1f4a5a] mb-4 text-balance">
          Your Final score is
        </h2>

        {/* Score display */}
        <div className="my-10 md:my-14">
          <div className="text-7xl md:text-8xl font-bold text-[#1f4a5a]">
            <span className="inline-block">{animateScore({ percentage })}</span>
          </div>
        </div>

        {/* Restart button */}
        <button
          onClick={onRestart}
          className="px-8 py-3 md:px-10 md:py-4 bg-[#c7e9f5] hover:bg-[#acdce8] active:bg-[#8ac7e0] text-[#1f4a5a] font-semibold text-base md:text-lg rounded-xl transition-all duration-200 cursor-pointer"
        >
          Start Again
        </button>
      </div>

      {/* Bottom shadow decoration */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-6 bg-gradient-to-b from-gray-400 to-gray-500 rounded-b-3xl w-full max-w-2xl -z-10" />
    </div>
  )
}
