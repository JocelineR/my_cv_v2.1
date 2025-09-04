"use client";
import * as React from "react";
import { motion } from "framer-motion";
import type { SVGMotionProps } from "framer-motion";
import { usePathname } from "next/navigation";

const MotionSGV = motion("svg");

export const BubblesBG = (props: SVGMotionProps<SVGSVGElement>) => {
  // & { flip?: boolean }

  const pathName = usePathname();

  const flip = pathName !== "/";
  // bg-red-50
  return (
    <div
      className={`bubblesBG ${flip ? "rotate-180" : ""} text-darkGreen1 fixed top-0 left-0 h-screen w-full overflow-hidden print:hidden`}
    >
      {/* purple ellipse */}
      <div
        className={`mainPurpleE ${flip ? "w-24 md:w-56" : "w-40 md:w-72"} absolute right-0 bottom-0`}
      >
        <MotionSGV
          // width={190}
          // height={189}
          viewBox="0 0 186 173"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
          transition={{
            type: "spring",
            bounce: 0.7,
            duration: 2.5,
            delay: 0.55,
          }}
          animate={{
            y: [-1000, 0],
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{
            transition: {
              type: "spring",
              bounce: 2.9,
              duration: 2.7,
              delay: -1,
            },

            scale: 1.5,
            // , rotate: 3
          }}
          exit={{
            transition: {
              delay: -10,
              duration: -3,
            },
          }}
        >
          <g id="purpleEllipse">
            <path
              d="M0.136784 115.542C0.291395 51.7299 58.0519 0.139647 129.149 0.311909C200.245 0.48417 183.637 52.1741 183.482 115.986C183.346 172.159 183.346 172.159 128.732 172.026C57.6359 171.854 -0.0178282 179.354 0.136784 115.542Z"
              fill="#AAA7C1"
            />
          </g>
        </MotionSGV>
      </div>

      {/* blue ellipse */}
      <div
        className={`mainBlueE ${flip ? "w-24 md:w-56" : "w-40 md:w-72"} absolute top-0 left-0 z-99`}
      >
        <MotionSGV
          // width={200}
          // height={200}
          viewBox="0 0 190 189"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
          transition={{
            type: "spring",
            bounce: 0.7,
            duration: 2.5,
          }}
          animate={{
            // rotateY: 90,
            y: [1000, 0],
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{
            transition: {
              type: "spring",
              bounce: 2.9,
              duration: 2.7,
            },

            scale: 1.5,
            // , rotate: 3
          }}
        >
          <g id="blueEllipse">
            <path
              d="M190 62.5C190 132.364 130.902 189 58 189C-14.9016 189 2 132.364 2 62.5C2 1.00001 2 1.00001 58 1.00001C130.902 1.00001 190 -7.36405 190 62.5Z"
              fill="#79B5BA"
            />
          </g>
        </MotionSGV>
      </div>
    </div>
  );
};

export default BubblesBG;
// export { PurpleEllipse as ReactComponent }
