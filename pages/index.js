import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Made with Love by Stima</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="">
                  Home
                </a>
              </li>
              <li>
               </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Tafadzwa Stima
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Junior Software Engineer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              A citizen of earth, a software engineer, a web developer,a reader,
              a gamer,a movie buff, a music lover, a foodie, a traveller, a
              dreamer, a thinker, a doer, a believer, a lover, a fighter, a
              winner, a loser(well yeah sometimes), a human being.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              
              <a href="https://twitter.com/stima_ta"><AiFillTwitterCircle
               /></a>
              <a href="https://www.linkedin.com/in/tafadzwa-stima/"><AiFillLinkedin /></a>
              
              <a href="https://www.instagram.com/_stima.t/"><AiFillInstagram /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Why I see myself at Sovtech
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a junior developer one of my main
              goals can be summarised by one word , which is growth(#adapt).I
              believe in myself and my own potential and I would like to be part
              of the Sovtech graduate programme because what would be a better
              way to master my craft in software engineering than joining a
              #worldclass team to unlock my full potential and contributing my
              knowldge to also add value to the SovTech team.
            </p>
          </div>
          <div className="lg:flex gap-10">
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Tools I used 
              </h3>
              <p className="py-2">
                For this react project to come alive I used the following Tools
              </p>
              
              <p className="text-gray-800 py-1">Canva</p>
              <p className="text-gray-800 py-1">VS Code</p>
              <p className="text-gray-800 py-1">NextJS</p>
              <p className="text-gray-800 py-1">GIT</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Other Credits </h3>
              <p className="py-2">
              
              </p>
              
              <p className="text-gray-800 py-1">Stackoverflow</p>
              <p className="text-gray-800 py-1">YouTube</p>
              <p className="text-gray-800 py-1">Tailwindcss</p>
              
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            
              </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
