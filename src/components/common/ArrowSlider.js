import React from "react";
import chevronBackward from "../../../static/chevron-backward.svg";
import chevronForward from "../../../static/chevron-forward.svg";
import chevronForwardDisabled from "../../../static/chevron-forward-disabled.svg";
import chevronBackwardDisabled from "../../../static/chevron-backward-disabled.svg";

export default function ArrowSlider({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}) {
  return (
    <div className="flex gap-6">
      <button
        onClick={onPrev}
        disabled={disablePrev}
        className={`w-12 h-12 md:w-[54px] md:h-[54px] flex p-2.5 md:p-3 justify-center items-center rounded-[8px] border border-midnight-50 bg-midnight-25 focusable-elem ${
          !disablePrev && "arrow-slider-chevron"
        }`}
      >
        <img
          src={disablePrev ? chevronBackwardDisabled : chevronBackward}
          alt="backward"
        />
      </button>
      <button
        onClick={onNext}
        disabled={disableNext}
        className={`w-12 h-12 md:w-[54px] md:h-[54px] flex p-2.5 md:p-3 justify-center items-center rounded-[8px] border border-midnight-50 bg-midnight-25 focusable-elem ${
          !disableNext && "arrow-slider-chevron"
        }`}
      >
        <img
          src={disableNext ? chevronForwardDisabled : chevronForward}
          alt="forward"
        />
      </button>
    </div>
  );
}
