"use client";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
  const paths = useMemo(
    () => [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
      "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
      "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
      "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
      "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
      "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
      "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
      "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
      "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
      "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
      "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523",
    ],
    []
  );

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
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#beamGradient)"
            strokeOpacity="0.4"
            strokeWidth="0.6"
            className={`beam beam-${i}`}
          />
        ))}

        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#18CCFC" stopOpacity="0" />
            <stop offset="20%" stopColor="#18CCFC" />
            <stop offset="50%" stopColor="#6344F5" />
            <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* CSS animation */}
      <style>{`
        .beam {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          opacity: 0;
          animation: draw 8s linear infinite;
        }
        ${paths
          .map(
            (_, i) =>
              `.beam-${i} { animation-delay: ${i * 0.8}s; animation-duration: ${
                6 + (i % 5)
              }s; }`
          )
          .join("\n")}

        @keyframes draw {
          0% {
            stroke-dashoffset: 1200;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
});
BackgroundBeams.displayName = "BackgroundBeams";
