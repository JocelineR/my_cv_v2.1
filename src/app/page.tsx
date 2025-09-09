"use client";
import Link from "next/link";
//import { BlueEllipse } from 'src/components/blueEllipseSvg';
import { motion } from "framer-motion";
import type { SVGMotionProps } from "framer-motion";
import { BlueLine } from "~/components/blueLineSvg";
import { PurpleLine } from "~/components/purpleLineSvg";
import { size } from "zod/v4";

export default function HomePage() {
  const MotionH1 = motion("h1");
  const MotionP = motion("p");
  const MotionNav = motion("nav");
  const MotionImg = motion("img");
  const MotionUl = motion("ul");
  const MotionBtn = motion("button");

  return (
    <main className="text-darkGreen1 bg-lighBlue relative flex min-h-screen w-full flex-col overflow-x-hidden print:block print:min-h-0">
      <div className="fixed top-0 right-0 left-0 z-50 flex w-full flex-col backdrop-blur-xs md:flex-row md:items-center print:hidden">
        {/* <main className="text-darkGreen1 bg-lighBlue flex min-h-screen w-full flex-col overflow-x-hidden print:block print:min-h-0">
      <div className="fixed z-10 flex w-full flex-col bg-inherit md:flex-row md:items-center print:hidden"> */}
        <MotionNav
          id="dnav"
          className="z-50 flex w-full px-2 py-2 text-sm md:text-lg"
          initial={{ x: 1, opacity: 0 }}
          whileInView={{ x: [-100, 0], opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 2, duration: 1.1 }}
        >
          <ul className="m-0">
            <li className="z-50 mr-3 inline list-none hover:underline md:mr-6">
              <a href="#section1"> Home </a>{" "}
            </li>
            <li className="z-50 mr-3 inline list-none hover:underline md:mr-6">
              {" "}
              <a href="#section2"> About me</a>{" "}
            </li>
            <li className="z-50 mr-3 inline list-none hover:underline md:mr-6">
              {" "}
              <a href="#section3"> Experience </a>
            </li>
            <li className="z-50 mr-3 inline list-none hover:underline md:mr-6">
              {" "}
              <a href="#section4">Portfolio </a>
            </li>
            <li className="z-50 mr-3 inline list-none hover:underline md:mr-6">
              {" "}
              <a href="#section5">Contact me </a>{" "}
            </li>
          </ul>
        </MotionNav>
        <div className="absolute top-10 right-4 z-60 px-2 md:fixed md:top-2 md:right-4">
          <MotionBtn
            id="downloadBtn"
            className="buttonBg text-lighBlue mx-auto mt-2 cursor-pointer rounded-2xl px-3 py-2 text-sm md:mx-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onClick={() => {
              const button = document.getElementById("downloadBtn");
              if (button) button.style.display = "none";
              window.print();
              if (button) button.style.display = "block";
            }}
          >
            Download CV
          </MotionBtn>
        </div>
      </div>

      {/* <div className="z-5 mt-96 w-full overflow-auto"> */}
      {/* Print-only introduction section */}
      <div className="hidden print:block print:pt-20 print:pb-0 print:pl-12">
        <h1 className="text-4xl font-bold">Hello, my name is Joceline Rubio</h1>
      </div>

      <section id="section1" className="print:hidden print:min-h-screen">
        <div className="grid min-h-screen grid-cols-1 grid-rows-3 md:grid-cols-4 print:block">
          <div className="static col-start-2 col-end-4 row-start-2 row-end-3 content-center">
            <MotionH1
              className="px-6 text-3xl tracking-wider md:text-5xl"
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              // animate={{ x: [-100, 0], opacity: 1 }}
              transition={{ delay: 1, duration: 1.1 }}
              //y: [-1000, 0],
            >
              Hello World! <br />
              I’m Joceline Rubio...
            </MotionH1>

            <MotionP
              className="px-6 pt-4 text-xl tracking-wide italic"
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              // animate={{ x: [100, 0], opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.4 }}
            >
              Welcome to my website, it´s nice to have you here!
            </MotionP>
          </div>
        </div>
      </section>

      <section id="section2" className="print:min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-4 print:block">
          <div className="col-start-2 col-end-4 row-start-2 row-end-3 content-center pb-36">
            <div className="col-start-2 col-end-4 content-center pt-3 print:hidden">
              <MotionH1
                className="px-6 pt-12 text-3xl tracking-wider md:px-11 md:text-5xl"
                initial={{ y: 25, opacity: 0 }}
                // animate={{ x: [-100, 0], opacity: 1 }}
                whileInView={{ x: [-100, 0], opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 1.1 }}
                //y: [-1000, 0],
              >
                Some key points about me...
              </MotionH1>
            </div>

            <div className="flex w-full justify-center px-11 pt-20">
              {/* justify-center */}
              <MotionImg
                src="./images/profile-3.png"
                className="imageBorderProfile h-72 print:hidden"
                // justify-self-center
                initial={{ y: 25, opacity: 0 }}
                // animate={{ opacity: 1 }}
                // whileInView={{ x: [-100, 0], opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 1.3 }}
              ></MotionImg>

              {/* <MotionH1
                className="pt-5 text-4xl tracking-wider"
                initial={{ y: 25, opacity: 0 }}
                animate={{ x: [-100, 0], opacity: 1 }}
                transition={{ delay: 1.3, duration: 1.1 }}
                //y: [-1000, 0],
              >
                My name is Joceline Rubio..
              </MotionH1> */}
            </div>

            <MotionP
              className="print:t-0 static px-6 pt-14 text-xl tracking-wide italic md:px-11 md:text-2xl print:px-14 print:pt-0"
              // text-justify

              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [100, 0], opacity: 1 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              I’ve been working as a Software Engineer and have gained
              experience in Backend and Frontend development, focused lately on
              frontend development with +3 years of professional experience in
              Java, Kubernetes MySQL, EdgeDB, Javascript, React, CSS, Html and
              Typescript. <br /> <br /> I have a bachelor's degree in Computer
              Science Engineering <br /> <br /> I've been trying to learn how to
              use some of the different development tools so I can share my
              skills and work on different projects that can contribute
              something nice to the world. <br /> <br /> Just as I enjoy coding,
              I also enjoy meditation, connecting with people, nature, roller
              skating, traveling, reading, learning new things and enjoying time
              with the people I love.
            </MotionP>
            {/* I'm just another human immersed in this world of coding. */}
          </div>
        </div>
      </section>
      {/* print:break-after-page print:mb-8 */}
      <div className="print:t-0 hidden print:block print:pt-0 print:pl-10">
        <h1 className="text-4xl font-bold">Experience</h1>
      </div>
      {/* className="print:t-0 print:min-h-screen print:break-after-page */}
      <section id="section3" className="print:min-h-screen">
        {/* print:t-0 print:block */}
        <div className="grid grid-cols-1 md:grid-cols-4 print:block">
          <div className="col-start-2 col-end-4 content-center px-11 pt-24 md:col-start-2 md:col-end-4 print:hidden">
            <MotionH1
              className="pt-12 text-3xl tracking-wider md:text-5xl"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [-100, 0], opacity: 1 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.1 }}
              //y: [-1000, 0],
            >
              {/* pending */}
              Here are some of my recent work experiences...
            </MotionH1>
          </div>

          <div className="col-start-1 col-end-3 mt-24 print:hidden">
            {/* width="300"
                height="61" */}
            <PurpleLine />
            {/* <PurpleCircle /> */}
          </div>

          <div className="col-start-2 col-end-4">
            <MotionH1
              className="px-11 text-2xl tracking-wide md:px-11 md:text-3xl print:pt-10"
              // text-4xl tracking-wide
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [-100, 0], opacity: 1 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.1 }}
            >
              Freelance
            </MotionH1>

            <MotionP
              className="px-11 pt-4 text-xl leading-8 tracking-wide italic md:px-11 md:leading-8"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [100, 0], opacity: 1 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              2025 <br />
              Freelance Full Stack Developer <br />
            </MotionP>

            {/* md:text-lg  */}
            <MotionUl
              className="purpleUl list-disc px-15 pt-2 leading-8 md:leading-8"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [100, 0], opacity: 1 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              <li>Front-end development.</li>
              <li>Back-end development.</li>
              <li>Using TypeScript, JavaScript mainly.</li>
              <li>
                Working with React, HTML, CSS for doing some web development.
              </li>
              <li>Working with EdgeDB as DB.</li>
              <li>
                Using Figma to create designs and mockups for the projects and
                for project planning.
              </li>
            </MotionUl>
          </div>

          <div className="col-start-1 col-end-3 mt-14 print:hidden">
            <BlueLine />
            {/* <PurpleCircle /> */}
          </div>

          <div className="col-start-2 col-end-4 print:break-after-page print:pt-12">
            <MotionH1
              className="px-11 text-2xl tracking-wide md:px-11 md:text-3xl"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [-100, 0], opacity: 1 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.1 }}
            >
              Konrradf
            </MotionH1>

            <MotionP
              className="px-11 pt-4 text-xl leading-8 tracking-wide italic md:px-11 md:leading-8"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [100, 0], opacity: 1 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              2024 - 2025 <br />
              Freelance Full Stack Developer <br />
            </MotionP>

            <MotionUl
              className="blueUl list-disc px-15 pt-2 leading-8 md:leading-8"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [100, 0], opacity: 1 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              <li>Front-end development using Elm, HTML and CSS.</li>
              <li>Working with Elm to create new features for the web page.</li>
              <li>Using PHP for working with API DB management.</li>
              <li>Using mysql as a DB.</li>
            </MotionUl>
          </div>

          <div className="itemExp col-start-1 col-end-3 mt-14 print:hidden">
            {/* width="300"
                height="61" */}
            <PurpleLine />
            {/* <PurpleCircle /> */}
          </div>

          <div className="col-start-2 col-end-4 print:pt-12">
            <MotionH1
              className="px-11 text-2xl tracking-wide md:px-11 md:text-3xl"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [-100, 0], opacity: 1 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.1 }}
            >
              Oracle
            </MotionH1>

            <MotionP
              className="px-11 pt-4 text-xl leading-8 tracking-wide italic md:px-11 md:leading-8"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [100, 0], opacity: 1 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              2021 - 2024 <br />
              Software Developer <br />
            </MotionP>

            <MotionUl
              className="purpleUl list-disc px-15 pt-2 leading-8 md:leading-8"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [100, 0], opacity: 1 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              <li>
                Worked with microservices using tools like Kubernetes and
                Docker.
              </li>
              <li>Development of unit tests for the existing and new code.</li>
              <li>Worked in an agile team.</li>
              <li>
                Contributed in the development of new features using Java and
                JavaScript.
              </li>
              <li>Contributed to QA tasks by performing regression testing.</li>
              <li>
                Participation in different parts of the development cycle.
              </li>
            </MotionUl>
          </div>

          <div className="col-start-1 col-end-3 mt-14 print:hidden">
            <BlueLine />
          </div>

          <div className="col-start-2 col-end-4 pb-36 print:break-after-page print:pt-12">
            <MotionH1
              className="px-11 text-2xl tracking-wide md:px-11 md:text-3xl"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [-100, 0], opacity: 1 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.1 }}
            >
              Amdocs
            </MotionH1>

            <MotionP
              className="px-11 pt-4 text-xl leading-8 tracking-wide italic md:px-11 md:leading-8"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [100, 0], opacity: 1 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              2019 - 2020 <br />
              Software Engineer Associate <br />
              {/* Front-end development using Elm, HTML and CSS.
                        Working with Elm to create new features for the web page.
                        Using PHP for working with API DB management.
                        Using mysql as a DB. */}
            </MotionP>

            <MotionUl
              className="blueUl list-disc px-15 pt-2 leading-8 md:leading-8"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [100, 0], opacity: 1 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              <li>Performed tests using SOAP UI.</li>
              <li>Fixing bugs in the part of the back-end using Java.</li>
              <li>
                Helped automate CI/CD processes with Bash scripts and other
                internal tools.
              </li>
              <li>
                Participating in a voluntary project in the Frontend area using
                Angular, HTML, CSS and Angular Material.
              </li>
              <li>Worked in a Scrum team.</li>
              <li>Using Git for version control.</li>
            </MotionUl>
          </div>

          {/* "col-start-4 col-end-5 content-end justify-self-end pr-6 */}
          {/* content-end justify-self-start pl-6 */}
          {/* col-start-4 col-end-5 row-start-1 row-end-2  content-start justify-self-end pr-6 */}
        </div>
      </section>

      <div className="print:t-0 hidden print:block print:pt-20 print:pl-10">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>
      <section id="section4" className="print:min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-4 print:block">
          <div className="col-start-2 col-end-4 content-center px-11 pt-24 md:col-start-2 md:col-end-4 print:hidden">
            {/* col-span-full */}
            <MotionH1
              className="pt-12 text-3xl tracking-wider md:text-5xl print:pt-0"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [-100, 0], opacity: 1 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.1 }}
              //y: [-1000, 0],
            >
              Check out some of my recent projects...
            </MotionH1>
          </div>

          <div className="col-start-1 col-end-3 mt-24 print:hidden">
            <PurpleLine />
          </div>
          {/* image diare */}
          {/* <div className="col-span-full flex pl-16 md:col-start-1 md:col-end-2 md:justify-start md:pl-16">
            <MotionImg
              src="./images/logo_w.png"
              className="h-72"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.3 }}
            ></MotionImg>
          </div> */}

          <div className="col-start-2 col-end-4">
            <MotionH1
              className="px-11 text-2xl tracking-wide md:px-11 md:text-3xl print:pt-10"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [-100, 0], opacity: 1 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.1 }}
            >
              <a href="https://mitra-maps.vercel.app/" target="_blank">
                Mitra Solar
              </a>
            </MotionH1>
            <br />

            <MotionUl
              className="purpleUl list-disc px-15 pt-0 leading-8 md:text-lg md:leading-8"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [150, 70], opacity: 1 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              {/* pending */}
              <li>
                Website created for a solar panel business, with the purpose of
                finding places that meet certain characteristics and creating
                routes based on the results, so they can plan travel accordingly
                to gain new potential customers.
              </li>
              <li>
                For this project I worked together with a friend and we
                developed this project for a Solar Panel Business in Germany.
              </li>
              <li>
                Used tools: TypeScript, Html, CSS, React, Google Maps API.
              </li>
              {/* <li>
                GitHub:
                https://github.com/JocelineR/solar-buffer-space-scraper-v2.
              </li> */}
            </MotionUl>

            <div className="mx-3 mt-10 content-center pr-7 md:mx-10 print:hidden">
              <MotionImg
                src="images/mitra-solar-1.png"
                className="imageBorder h-96 w-full md:w-full"
                initial={{ y: 25, opacity: 0 }}
                // animate={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 1.3 }}
              ></MotionImg>
            </div>
          </div>

          <div className="col-start-1 col-end-3 mt-14 print:hidden">
            <BlueLine />
          </div>
          {/* image wortwildnis */}
          {/* <div className="col-span-full flex pl-16 md:col-start-1 md:col-end-2 md:justify-start md:pl-16">
            <MotionImg
              src="./images/logo_w.png"
              className="h-72"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.3 }}
            ></MotionImg>
          </div> */}
          {/* col-span-full pr-7 md:col-start-2 md:col-end-4 */}
          <div className="col-start-2 col-end-4 print:break-after-page">
            {/* pt-0 pl-16 text-2xl md:text-3xl tracking-wide md:pl-16 */}
            <MotionH1
              className="px-11 text-2xl tracking-wide md:px-11 md:text-3xl print:pt-10"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [-100, 0], opacity: 1 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.1 }}
            >
              <a href="https://wortwildnis.de/" target="_blank">
                WortWildnis
              </a>
            </MotionH1>
            <br />

            {/* break-all text-lg leading-7 flex-initial" */}
            {/* text-lg */}
            <MotionUl
              className="blueUl list-disc px-15 leading-8 md:text-lg md:leading-8"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [150, 70], opacity: 1 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              <li>
                Website to find the colloquial meaning of words and expressions
                in German.
              </li>
              <li>
                For this project I worked together with a friend from Germany
                and we created this project because we found out that there was
                no longer a website for searching the colloquial meaning of
                words and expressions in German like the one that already
                existed in English and also because it would help me with
                learning German.
              </li>
              <li>
                Used tools: TypeScript, Html, CSS, EdgeDB, React, OpenAI API.
              </li>
              {/* <li>GitHub: https://github.com/JocelineR/wortwildnis.</li> */}
            </MotionUl>
            <div className="mx-3 mt-10 content-center pr-7 md:mx-10 print:hidden">
              <MotionImg
                src="images/wortwildnis.png"
                className="imageBorder h-96 w-full md:w-full"
                initial={{ y: 25, opacity: 0 }}
                // animate={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 1.3 }}
              ></MotionImg>
            </div>
          </div>
          <div className="col-start-1 col-end-3 mt-14 print:hidden">
            <PurpleLine />
          </div>
          {/* image mitra solar */}
          {/* <div className="col-span-full flex pl-16 md:col-start-1 md:col-end-2 md:justify-start md:pl-16">
            <MotionImg
              src="./images/logo_w.png"
              className="h-72"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.3 }}
            ></MotionImg>
          </div> */}

          <div className="col-start-2 col-end-4">
            {/* pt-0 pl-16 text-2xl md:text-3xl tracking-wide md:pl-16 */}
            <MotionH1
              className="px-11 text-2xl tracking-wide md:px-11 md:text-3xl print:pt-10"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [-100, 0], opacity: 1 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.1 }}
            >
              <a href="https://wortwildnis.de/" target="_blank">
                Büro Ries
              </a>
            </MotionH1>
            <br />

            {/* break-all text-lg leading-7 flex-initial" */}
            {/* text-lg */}
            <MotionUl
              className="blueUl list-disc px-15 leading-8 md:text-lg md:leading-8"
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [150, 70], opacity: 1 }}
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              <li>
                Website for sorting lists of school supplies for a stationery
                shop so the seller and customers can find the supplies they are
                looking for quickly and easily.
              </li>
              <li>
                I was creating this project for a friend from Germany and the
                purpose was to help her with her business during this season
                when the demand for school supplies is high and because she was
                having this problem where the list was not organized and she was
                having to spend a lot of time searching for the supplies she
                needed.
              </li>
              <li>
                Used tools: TypeScript, Html, CSS, React, Framer Motion,
                Tailwind CSS.
              </li>
              {/* <li>GitHub: https://github.com/JocelineR/buro-ries.</li> */}
            </MotionUl>

            <div className="mx-10 ml-3 flex flex-row content-center gap-5 pt-10 md:mx-10 md:gap-10 print:hidden">
              <MotionImg
                src="images/ries-1.png"
                className="imageBorder h-96 w-7/12"
                initial={{ y: 25, opacity: 0 }}
                // animate={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 1.3 }}
              ></MotionImg>

              <MotionImg
                src="images/ries-3.png"
                className="imageBorder h-96 w-7/12"
                initial={{ y: 25, opacity: 0 }}
                // animate={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 1.3 }}
              ></MotionImg>
            </div>
          </div>

          <div className="col-start-1 col-end-3 mt-14 print:hidden">
            <BlueLine />
          </div>

          <div className="col-start-2 col-end-4 print:break-after-page">
            {/* col-span-full pr-7 */}
            {/* md:pt-10 */}
            <MotionH1
              // pt-7
              className="px-11 text-2xl tracking-wide md:px-11 md:text-3xl print:pt-10"
              // text-4xl tracking-wide"
              // x: 100,
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [-100, 0], opacity: 1 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.1 }}
            >
              Diare (WIP)
            </MotionH1>
            {/* <br /> */}
            {/* text-lg */}
            <MotionUl
              className="purpleUl list-disc px-15 pt-2 leading-8 md:text-lg md:leading-8"
              // x: 100,
              initial={{ y: 25, opacity: 0 }}
              // animate={{ x: [150, 70], opacity: 1 }}
              // [150, 70],
              whileInView={{ x: [100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.4 }}
            >
              <li>Website for a furniture business.</li>
              <li>
                I was creating this project for a friend from Mexico because
                this would help her to expand her business by having a website
                to showcase her products.
              </li>
              <li>Used tools: JavaScript, Html, CSS, Figma.</li>
              {/* <li>GitHub: https://github.com/JocelineR/diareDecoHogar.</li> */}
            </MotionUl>

            <div className="mx-3 mt-10 content-center pr-7 md:mx-10 print:hidden">
              <MotionImg
                src="images/diare.png"
                className="imageBorder h-96 w-full md:w-full"
                initial={{ y: 25, opacity: 0 }}
                // animate={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 1.3 }}
              ></MotionImg>
            </div>
          </div>
        </div>
      </section>

      <div className="hidden print:block print:pt-20 print:pl-10">
        <h1 className="text-4xl font-bold">Contact</h1>
      </div>

      {/* print contact */}
      <div className="hidden print:grid print:grid-cols-3 print:grid-rows-5 print:px-15">
        {/* Remove the download button from here */}
        {/* <div className="print:t-0 hidden print:col-start-2 print:col-end-3 print:row-start-1 print:row-end-2 print:block print:pt-0 print:pl-10">
            <h1 className="text-4xl font-bold">Jocline</h1>
          </div> */}
        {/* <div className="print:col-start-1 print:col-end-2 print:content-start print:items-baseline"> */}

        {/* print:items-baseline */}
        <div className="print:col-start-1 print:col-end-3 print:row-start-1 print:row-end-2 print:flex print:flex-row print:content-start print:items-baseline print:pt-20">
          <a
            href="https://www.linkedin.com/in/jocelinerubio137"
            target="_blank"
            rel="noopener noreferrer"
            // className="print:col-start-1 print:col-end-2 print:row-start-1 print:row-end-2"
            // className="mx-4"
          >
            {<IconLinkedIn className={"print:size-1/2"} />}
          </a>
          {/* print:row-start-1 print:row-end-2 */}
          <h1 className="print:r-20 print:text-right print:align-text-top print:text-xl">
            jocelinerubio137
          </h1>
        </div>
        {/* className="mx-4 */}

        <div className="print:col-start-1 print:col-end-3 print:row-start-2 print:row-end-3 print:flex print:flex-row print:content-start print:items-baseline print:pt-15">
          <a href="https://github.com/JocelineR">
            {<IconGitHub className={"print:size-1/2"} />}
          </a>
          <h1 className="print:r-10 print:text-right print:text-xl">
            JocelineR
          </h1>
        </div>

        <div className="print:col-start-1 print:col-end-3 print:row-start-3 print:row-end-4 print:flex print:flex-row print:content-start print:items-baseline print:pt-5">
          {/* className="mx-4" */}
          <a href="mailto:jocelinne9504@gmail.com">
            {<IconEmail className={"print:size-1/2"} />}
          </a>
          <h1 className="print:l-10 print:align-text-bottom print:text-xl">
            jocelinne9504@gmail.com
          </h1>
        </div>

        <div className="print:col-start-1 print:col-end-3 print:row-start-4 print:row-end-5 print:flex print:flex-row print:content-baseline print:items-baseline print:align-text-bottom">
          <a
            href="https://wa.me/+523314069113"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<IconPhone className={"print:size-1/2"} />}
          </a>
          <h1 className="print:text-xl">+523314069113</h1>
        </div>
        {/* </div> */}
      </div>

      <section id="section5" className="print:min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-4 print:block print:items-start">
          {/* flex flex-col items-center px-12 */}
          {/* col-span-full grid-cols-1 content-center px-12 pt-52 md:col-start-2 md:col-end-4 */}
          <div className="col-start-2 col-end-4 content-center px-11 pt-52 md:col-start-2 md:col-end-4 print:hidden">
            <MotionH1
              className="pt-12 text-3xl tracking-wider md:text-5xl print:pt-0"
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ x: [-100, 0], opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1.1 }}
            >
              Let’s get in touch!...
            </MotionH1>
          </div>

          {/* <h1 className="print:l-36 hidden print:bg-red-500 print:text-right print:text-2xl">
            JocelineR
          </h1> */}

          {/* md:gap-16  */}
          <div className="col-start-2 col-end-4 flex flex-col items-center gap-8 px-11 pt-20 pb-44 md:col-start-2 md:col-end-4 md:flex-row md:pt-52 md:pb-96 print:col-start-1 print:col-end-2 print:hidden print:content-start print:items-baseline">
            <a
              href="https://www.linkedin.com/in/jocelinerubio137"
              target="_blank"
              rel="noopener noreferrer"
              // className="mx-4"
            >
              {
                <IconLinkedIn
                  initial={{ y: 25, opacity: 0 }}
                  // animate={{ x: [-1, 0], opacity: 2 }}
                  whileInView={{ x: [-1, 0], opacity: 2 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.8, duration: 1.1 }}
                  // className={"size-svw"}
                  className={"print:size-min"}
                />
              }
            </a>

            {/* className="mx-4 */}
            <a href="https://github.com/JocelineR">
              {
                <IconGitHub
                  initial={{ y: 25, opacity: 0 }}
                  // animate={{ x: [-1, 0], opacity: 1 }}
                  whileInView={{ x: [-1, 0], opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.1, duration: 1.1 }}
                />
              }
            </a>

            {/* className="mx-4" */}
            <a href="mailto:jocelinne9504@gmail.com">
              {
                <IconEmail
                  // className={"mx-4"}
                  initial={{ y: 25, opacity: 0 }}
                  // animate={{ x: [-1, 0], opacity: 1 }}
                  whileInView={{ x: [-1, 0], opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.4, duration: 1.1 }}
                />
              }
            </a>

            <a
              href="https://wa.me/+523314069113"
              target="_blank"
              rel="noopener noreferrer"
            >
              {
                <IconPhone
                  // className={"mx-4"}
                  initial={{ y: 25, opacity: 0 }}
                  // animate={{ x: [-1, 0], opacity: 1 }}
                  whileInView={{ x: [-1, 0], opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.7, duration: 1.1 }}
                />
              }
            </a>
          </div>
        </div>
      </section>
      {/* </div> */}
    </main>
  );
}

const MotionSVGLinkedIn = motion("svg");
const MotionGitHub = motion("svg");
const MotionEmail = motion("svg");
const MotionPhone = motion("svg");

const IconLinkedIn = (props: SVGMotionProps<SVGSVGElement>) => (
  <MotionSVGLinkedIn
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M66.6667 33.3335C73.2971 33.3335 79.6559 35.9674 84.3443 40.6558C89.0327 45.3442 91.6667 51.7031 91.6667 58.3335V87.5002H75V58.3335C75 56.1234 74.122 54.0037 72.5592 52.4409C70.9964 50.8781 68.8768 50.0002 66.6667 50.0002C64.4565 50.0002 62.3369 50.8781 60.7741 52.4409C59.2113 54.0037 58.3333 56.1234 58.3333 58.3335V87.5002H41.6667V58.3335C41.6667 51.7031 44.3006 45.3442 48.989 40.6558C53.6774 35.9674 60.0362 33.3335 66.6667 33.3335Z"
      stroke="#79B5BA"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25 37.5002H8.33333V87.5002H25V37.5002Z"
      stroke="#79B5BA"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6667 25.0002C21.269 25.0002 25 21.2692 25 16.6668C25 12.0645 21.269 8.3335 16.6667 8.3335C12.0643 8.3335 8.33333 12.0645 8.33333 16.6668C8.33333 21.2692 12.0643 25.0002 16.6667 25.0002Z"
      stroke="#79B5BA"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </MotionSVGLinkedIn>
);

const IconGitHub = (props: SVGMotionProps<SVGSVGElement>) => (
  <MotionGitHub
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M37.5 79.1668C16.6667 85.4168 16.6667 68.7501 8.33334 66.6668M66.6667 91.6668V75.5418C66.823 73.555 66.5545 71.5577 65.8792 69.6826C65.2039 67.8076 64.1372 66.0977 62.75 64.6668C75.8333 63.2085 89.5833 58.2501 89.5833 35.5001C89.5823 29.6828 87.3445 24.0885 83.3333 19.8751C85.2327 14.7856 85.0984 9.15994 82.9583 4.16681C82.9583 4.16681 78.0417 2.70848 66.6667 10.3335C57.1167 7.74524 47.05 7.74524 37.5 10.3335C26.125 2.70848 21.2083 4.16681 21.2083 4.16681C19.0682 9.15994 18.9339 14.7856 20.8333 19.8751C16.7922 24.1197 14.5522 29.7646 14.5833 35.6251C14.5833 58.2085 28.3333 63.1668 41.4167 64.7918C40.0458 66.2084 38.9886 67.8977 38.3138 69.7498C37.639 71.602 37.3617 73.5754 37.5 75.5418V91.6668"
      stroke="#79B5BA"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </MotionGitHub>
);

const IconEmail = (props: SVGMotionProps<SVGSVGElement>) => (
  <MotionEmail
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M91.6667 24.9998C91.6667 20.4165 87.9167 16.6665 83.3333 16.6665H16.6667C12.0833 16.6665 8.33333 20.4165 8.33333 24.9998M91.6667 24.9998V74.9998C91.6667 79.5832 87.9167 83.3332 83.3333 83.3332H16.6667C12.0833 83.3332 8.33333 79.5832 8.33333 74.9998V24.9998M91.6667 24.9998L50 54.1665L8.33333 24.9998"
      stroke="#79B5BA"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </MotionEmail>
);

const IconPhone = (props: SVGMotionProps<SVGSVGElement>) => (
  <MotionPhone
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M91.6667 70.5001V83.0001C91.6714 84.1605 91.4337 85.3091 90.9688 86.3724C90.5039 87.4356 89.8221 88.39 88.967 89.1745C88.1119 89.959 87.1024 90.5563 86.0031 90.928C84.9038 91.2998 83.7391 91.4379 82.5833 91.3334C69.7618 89.9402 57.4458 85.559 46.625 78.5417C36.5576 72.1445 28.0222 63.6091 21.625 53.5417C14.5832 42.6718 10.201 30.2959 8.83333 17.4167C8.72921 16.2645 8.86615 15.1032 9.23542 14.0068C9.60469 12.9104 10.1982 11.903 10.9782 11.0485C11.7582 10.194 12.7075 9.51137 13.7658 9.04392C14.8241 8.57647 15.9681 8.3345 17.125 8.33341H29.625C31.6471 8.31351 33.6075 9.02957 35.1407 10.3481C36.6739 11.6667 37.6753 13.4978 37.9583 15.5001C38.4859 19.5004 39.4644 23.4281 40.875 27.2084C41.4356 28.6998 41.5569 30.3206 41.2246 31.8787C40.8923 33.4369 40.1203 34.8672 39 36.0001L33.7083 41.2917C39.6398 51.7232 48.2769 60.3603 58.7083 66.2917L64 61.0001C65.1329 59.8798 66.5631 59.1078 68.1213 58.7755C69.6795 58.4432 71.3003 58.5645 72.7917 59.1251C76.572 60.5357 80.4997 61.5141 84.5 62.0417C86.524 62.3273 88.3725 63.3468 89.6939 64.9063C91.0153 66.4658 91.7174 68.4566 91.6667 70.5001Z"
      stroke="#79B5BA"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </MotionPhone>
);
