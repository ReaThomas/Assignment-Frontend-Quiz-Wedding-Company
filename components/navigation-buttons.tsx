"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationButtonsProps {
  onNext: () => void
  onPrevious: () => void
  onSubmit: () => void
  isFirstQuestion: boolean
  isLastQuestion: boolean
  canGoNext: boolean
  showSubmit: boolean
}

export default function NavigationButtons({
  onNext,
  onPrevious,
  onSubmit,
  isFirstQuestion,
  isLastQuestion,
  canGoNext,
  showSubmit,
}: NavigationButtonsProps) {
  return (
    <div className="flex items-center justify-between mt-8 md:mt-12">
      {/* Previous button */}
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className={`p-2 md:p-3 rounded-xl transition-all duration-200 ${
          isFirstQuestion
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-[#c7e9f5] text-[#4a9bc4] hover:bg-[#acdce8]"
        }`}
        aria-label="Previous question"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Submit or Next button */}
      {showSubmit ? (
        <button
          onClick={onSubmit}
          disabled={!canGoNext}
          className={`px-6 md:px-8 py-2 md:py-3 rounded-xl font-semibold transition-all duration-200 ${
            canGoNext
              ? "bg-[#c7e9f5] text-[#1f4a5a] hover:bg-[#acdce8] cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      ) : null}

      {/* Next button */}
      {!showSubmit ? (
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`p-2 md:p-3 rounded-xl transition-all duration-200 ${
            canGoNext
              ? "bg-[#c7e9f5] text-[#4a9bc4] hover:bg-[#acdce8]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          aria-label="Next question"
        >
          <ChevronRight size={24} />
        </button>
      ) : null}
    </div>
  )
}
