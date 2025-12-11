"use client"

export default function PawCharacter() {
  return (
    <div className="absolute -left-0 -bottom-20 z-20 pointer-events-none md:-left-24">
      {/* Speech bubble */}
      <div className="mb-4 ml-2">
        <div className="bg-white rounded-2xl px-4 py-2 shadow-lg border-2 border-[#4a9bc4] relative inline-block">
          <p className="text-sm md:text-base font-semibold text-[#1f4a5a]">Best of Luck</p>
          {/* Tail */}
          <div className="absolute bottom-0 left-6 w-3 h-3 bg-white border-b-2 border-l-2 border-[#4a9bc4] rounded-bl-sm transform translate-y-[10px] -rotate-45" />
        </div>
      </div>

      {/* GIF */}
      <div className="mt-4">
        <img
          src="/paw.gif"
          alt="Animated Paw"
          className="w-48 h-48 mx-auto"
        />
      </div>
    </div>
  )
}
