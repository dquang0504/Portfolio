"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const reducedPaths = [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
      "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
      "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
      "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
      "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675",
      "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
      "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
      "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
      "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
    ];

    return (
      <div
        className={cn(
          "absolute inset-0 flex h-full w-full items-center justify-center",
          className
        )}
      >
        <svg
          className="pointer-events-none absolute z-0 h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {reducedPaths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              stroke="url(#beamGradient)"
              strokeOpacity="0.4"
              strokeWidth="0.5"
              initial={{ y: -400, opacity: 0 }}
              animate={{
                y: [ -400, 400 ],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{ willChange: "transform, opacity" }}
            />
          ))}

          <defs>
            <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" offset="20%" />
              <stop stopColor="#6344F5" offset="50%" />
              <stop stopColor="#AE48FF" offset="80%" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams";
