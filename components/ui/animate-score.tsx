import { useEffect, useState } from "react";

export default function Score({ percentage }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1500; // 2 seconds
    const steps = 150; // more steps = smoother roll
    const increment = percentage / steps;
    const intervalTime = duration / steps;

    const interval = setInterval(() => {
      current += increment;

      // Slow down near the end (for rolling effect)
      if (current > percentage * 0.8) {
        current += increment * 0.2;
      }

      if (current >= percentage) {
        current = percentage;
        clearInterval(interval);
      }

      setDisplayValue(Math.floor(current));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="my-10 md:my-14">
      <div className="text-7xl md:text-8xl font-bold text-[#1f4a5a]">
        {displayValue}
        <span className="text-5xl md:text-6xl font-semibold">%</span>
      </div>
    </div>
  );
}
