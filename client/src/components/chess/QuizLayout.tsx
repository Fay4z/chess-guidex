import { Menu } from "lucide-react"
import { useState } from "react"
import { Chessboard } from "react-chessboard"

const QuizLayout = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    return (
        <div className="min-h-screen bg-yellow-50 flex flex-col lg:flex-row">
      {/* Left side - Chessboard */}
      <div className="w-full lg:flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="p-10">
            <Chessboard />
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8 flex-wrap justify-center">
          <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-amber-900 text-white font-bold text-sm sm:text-base md:text-lg hover:bg-amber-950 transition">
            Back
          </button>
          <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-amber-900 text-white font-bold text-sm sm:text-base md:text-lg hover:bg-amber-950 transition">
            Hint
          </button>
          <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-gray-500 text-white font-bold text-sm sm:text-base md:text-lg hover:bg-gray-600 transition">
            Next
          </button>
        </div>
      </div>

      {/* Right side - Quiz */}
      <div className="w-full lg:flex-1 bg-purple-200 p-4 sm:p-6 md:p-8 flex flex-col relative">
        {/* Menu icon */}
        <button className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 hover:bg-purple-300 rounded transition">
          <Menu size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-800" />
        </button>

        {/* Title and illustration */}
        <div className="text-center mb-6 sm:mb-8 mt-8 sm:mt-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-900 mb-1">
            The Chessboard and the Pieces
          </h1>
          <p className="text-xs sm:text-sm text-amber-900 font-semibold">Level 1 - Beginner Course</p>

          {/* Cartoon illustration placeholder */}
          <div className="mt-4 sm:mt-6 mb-6 sm:mb-8 flex justify-center">
            <div className="w-40 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-44 lg:h-48 bg-purple-300 rounded-lg flex items-center justify-center text-gray-600 text-xs sm:text-sm">
              [Chess players illustration]
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
            How many numbers are there on the left of the chessboard? Select the answer you think is correct.
          </p>
        </div>

        {/* Answer options */}
        <div className="space-y-3 sm:space-y-4 flex-1">
          {[
            { id: 1, text: "8" },
            { id: 2, text: "none" },
            { id: 3, text: "16" },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedAnswer(option.id)}
              className={`w-full p-3 sm:p-4 text-left flex items-center gap-3 sm:gap-4 rounded transition ${
                selectedAnswer === option.id
                  ? "bg-green-200 border-2 border-green-500"
                  : "bg-purple-100 border-2 border-transparent hover:bg-purple-150"
              }`}
            >
              <span className="text-green-600 font-bold text-base sm:text-lg md:text-xl w-6">{option.id}</span>
              <span className="text-gray-800 text-sm sm:text-base md:text-lg">{option.text}</span>
            </button>
          ))}
        </div>

        {/* Page indicator */}
        <div className="text-right text-gray-700 font-semibold mt-6 sm:mt-8 text-sm sm:text-base">4/73</div>
      </div>
    </div>
    )
}

export default QuizLayout