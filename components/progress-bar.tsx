"use client"

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="progress-bar" style={{ display: "flex", gap: "4px" }}>
        {Array.from({ length: total }, (_, index) => (
          <div
            key={index}
            className={`progress-segment ${
              index < current ? "bg-[#4a9bc4]" : "bg-gray-300"
            }`}
            style={{
              flex: 1,
              height: "10px",
              borderRadius: "2px",
              transition: "background-color 0.5s ease, transform 0.3s ease",
              transform: index < current ? "scaleY(1.2)" : "scaleY(1)",
            }}
            aria-label={`Question ${index + 1} of ${total}`}
          />
        ))}
      </div>
    </div>
  )
}
