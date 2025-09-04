"use client";
import * as React from "react";
import { motion } from "framer-motion";
import type { SVGMotionProps } from "framer-motion";

const MotionSGV = motion("svg");

export const PurpleLine = (props: SVGMotionProps<SVGSVGElement>) => (
  <MotionSGV
    // width="500"
    // height="71"
    width={400}
    height={70}
    viewBox="0 0 424 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    initial={{ x: -11, opacity: 0 }}
    // animate={{ x: [-395, -11], opacity: 1 }}
    whileInView={{ x: [-395, -11], opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.5, duration: 1.1 }}
  >
    <line y1="29.5" x2="660.145" y2="29.5" stroke="#AAA7C1" strokeWidth="2" />
    <path
      d="M424 30.5C424 47.3447 409.705 61 392.072 61C374.439 61 360.145 47.3447 360.145 30.5C360.145 13.6553 374.439 0 392.072 0C409.705 0 424 13.6553 424 30.5Z"
      fill="#AAA7C1"
    />
  </MotionSGV>
);

export default PurpleLine;
