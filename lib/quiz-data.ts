export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
}

export const QUIZ_DATA: QuizQuestion[] = [
  {
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctIndex: 1,
  },
  {
    question: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correctIndex: 1,
  },
  {
    question: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correctIndex: 1,
  },
  {
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correctIndex: 1,
  },
]
