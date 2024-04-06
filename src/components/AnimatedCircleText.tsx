import React from "react";
import Logo from "./Logo";
import { Box } from "@mui/material";

interface Props {
  scale?: number;
  content: string;
  speed?: "fast" | "medium" | "slow";
}

const AnimatedCircleText = ({
  scale,
  content,
  speed = "slow",
}: Props) => {
  return (
    <Box
      className={`relative text-circle-rotating-${speed} w-[150px] h-[150px] uppercase text-white rotate-[-103deg]  transform font-bold -z-1 font-sans`}
    >
      <svg
        viewBox="0 0 200 200"
        style={{ transform: `scale(${scale ?? 1})` }}
      >
        <path
          id="textPath"
          d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
          transform="translate(100,100)"
          fill="none"
          strokeWidth="0"
        ></path>
        <g fontSize="14.1px">
          <text textAnchor="start">
            <textPath
              className="text-circle-coloring"
              xlinkHref="#textPath"
              startOffset="0%"
            >
              {content}
            </textPath>
          </text>
        </g>
      </svg>
    </Box>
  );
};

export default AnimatedCircleText;
