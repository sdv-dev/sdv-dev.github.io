import React from "react";

export default function DotSlider({ sliderItems, activeIndex, onClick }) {
  return (
    <div className="flex space-x-2">
      {sliderItems.map((_, index) => (
        <button
          key={index}
          aria-label="slider dot"
          onClick={() => onClick(index)}
          className={`w-2 h-2 rounded-50 transition-all ${
            index === activeIndex
              ? "bg-midnight-700 w-[34px]"
              : "bg-midnight-400"
          }`}
        />
      ))}
    </div>
  );
}
