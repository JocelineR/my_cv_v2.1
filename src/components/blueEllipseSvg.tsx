"use client";
import * as React from "react";
import { motion } from "framer-motion";
import type { SVGMotionProps } from "framer-motion";

const MotionSVG = motion("svg");

export const BlueEllipse = (props: SVGMotionProps<SVGSVGElement>) => (
  <MotionSVG
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
    // onHoverEnd={
    //     event => { }
    //     //     {
    //     //     transition: {
    //     //         type: "spring",
    //     //         bounce: 0.80,
    //     //         duration: 1.50
    //     //     }
    //     // }
    // }

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
    <g
      id="blueEllipse"
      // animate={{ y: [200, 0, 0, 0] }}
      // transition={{ duration: 0.8 }}
    >
      <path
        d="M190 62.5C190 132.364 130.902 189 58 189C-14.9016 189 2 132.364 2 62.5C2 1.00001 2 1.00001 58 1.00001C130.902 1.00001 190 -7.36405 190 62.5Z"
        fill="#79B5BA"
      />
    </g>
  </MotionSVG>
);

export default BlueEllipse;
// export { BlueEllipse as ReactComponent }
