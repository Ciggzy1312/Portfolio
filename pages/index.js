import Image from "next/image";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import ts from "../images/TS.png";
import js from "../images/JS.png";
import psql from "../images/psql.png";
import redux from "../images/redux.png";
import python from "../images/python.png";
import react from "../images/react.png";
import node from "../images/node.png";
import mongo from "../images/mongo.png";
import java from "../images/java.png";
import go from "../images/go.png";
import next from "../images/next.png";
import kube from "../images/kube.png";
import docker from "../images/docker.png";
import redis from "../images/redis.jpg";
import git from "../images/git.png";

export default function Home() {
  return (
    <div className="">
      <div className="py-24 px-10" id="home">
        <div className="px-20 text-left">
          <h2 className="font-bold py-2">Hey, I am Deepayan <span role="img" aria-label="wave">👋</span></h2>
          <p className="text-xl w-2/3 font-medium">A Web Developer and a open source enthusiast learning and helping many students across communities</p>
        </div>
      </div>

      <div className="px-16 py-10" id="about">
        <span className="text-4xl font-bold">About</span>
        <div className="h-0.5 my-2 bg-gradient-to-r from-gray-800"></div>
        <div className="grid grid-cols-2 py-8">
          <div className="px-8 text-left">
            <span className="text-2xl font-semibold">Hello,</span>
            <p>
              My name is Deepayan Mukherjee and I am a Full Stack Web Developer using web technologies to build amazing products and focusing on solving problems for various niche and industries. I am also a open source enthusiast and have contributed to various large scale open source projects. I also have helped many students across various communities in exploring newer domains of technologies they are interested in.
            </p>
          </div>

          <div className="px-8 text-left">
            <span className="text-2xl font-semibold">Education</span>
            <div className="flex justify-between italic">
              <span>Future Institute of Engineering and Management</span>
              <span>2019-2023</span>
            </div>

          </div>
        </div>
      </div>

      <div className="px-16 py-10" id="techstack">
        <span className="text-4xl font-bold">TechStack</span>
        <div className="h-0.5 my-2 bg-gradient-to-r from-gray-800"></div>
        <div className="grid grid-cols-4 gap-6 gap-x-32 py-8">
          <div className="flex justify-between items-center">
            <Image src={js} width={35} height={35} alt="typescript"/>
            <span className="font-semibold ml-16">Javascript</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={ts} width={35} height={35} alt="typescript"/>
            <span className="font-semibold ml-16">Typescript</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={java} width={35} height={35} alt="typescript"/>
            <span className="font-semibold ml-16">Java</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={python} width={35} height={35} alt="typescript"/>
            <span className="font-semibold ml-16">Python</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={react} width={35} height={35} alt="typescript"/>
            <span className="font-semibold ml-16">React</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={node} width={35} height={35} alt="typescript"/>
            <span className="font-semibold ml-16">NodeJs</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={mongo} width={35} height={35} alt="typescript"/>
            <span className="font-semibold ml-16">MongoDB</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={redux} width={35} height={35} alt="typescript" className="object-contain"/>
            <span className="font-semibold ml-16">Redux</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={psql} width={35} height={35} alt="typescript" className="object-contain"/>
            <span className="font-semibold ml-16">PostgreSQL</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={git} width={35} height={35} alt="typescript"/>
            <span className="font-semibold ml-16">Git</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={go} width={35} height={35} alt="typescript"/>
            <span className="font-semibold ml-16">Golang</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={docker} width={35} height={35} alt="typescript"/>
            <span className="font-semibold ml-16">Docker</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={kube} width={35} height={35} alt="typescript"/>
            <span className="font-semibold ml-16">Kubernetes</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={redis} width={35} height={35} alt="typescript" className="object-contain"/>
            <span className="font-semibold ml-16">Redis</span>
          </div>

          <div className="flex justify-between items-center">
            <Image src={next} width={35} height={35} alt="typescript" className="object-contain"/>
            <span className="font-semibold ml-16">NextJs</span>
          </div>
        </div>
      </div>

      <div className="px-16 py-10" id="projects">
        <span className="text-4xl font-bold">Projects</span>
        <div className="h-0.5 my-2 bg-gradient-to-r from-gray-800"></div>
        <div className="flex justify-between p-8">
          <div className="">
            <span className="text-2xl font-semibold">JSX Playground</span>
            <p>React - Typescript - ESBuild - BulmaCSS - IndexedDB</p>
            <ul className="flex">
              <li className="pr-8 text-blue-800 font-medium"><a href="https://jsx-playground.netlify.app/" target="_blank" rel="noreferrer">Live</a></li>
              <li className="pr-8 text-blue-800 font-medium"><a href="https://github.com/Ciggzy1312/jsx-playground-client" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
          </div>

          <div className="w-3/5">
            <ul className="list-disc font-medium">
              <li className="px-8 py-1.5">Developed the application using React and Typescript</li>
              <li className="px-8 py-1.5">Used Bulma Css for adding the styles</li>
              <li className="px-8 py-1.5">Used ESBuild for handling in-browser JSX transpiling and bundling</li>
              <li className="px-8 py-1.5">Implemented caching using indexedDB to reduce the repeated fetching from npm registry</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between p-8">
          <div className="">
            <span className="text-2xl font-semibold">HomeView</span>
            <p>NextJs - ChakraUI - Bayut API</p>
            <ul className="flex">
              <li className="pr-8 text-blue-800 font-medium"><a href="https://home-view.vercel.app/" target="_blank" rel="noreferrer">Live</a></li>
              <li className="pr-8 text-blue-800 font-medium"><a href="https://github.com/Ciggzy1312/HomeView" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
          </div>

          <div className="w-3/5">
            <ul className="list-disc font-medium">
              <li className="px-8 py-1.5">Developed a website using NextJs and Javascrip</li>
              <li className="px-8 py-1.5">Added styles using Chakra-UI</li>
              <li className="px-8 py-1.5">Used BayutAPI from Rapid API to retrieve data of various real estate</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between p-8">
          <div className="">
            <span className="text-2xl font-semibold">Go URL Shortener</span>
            <p>Golang - Fiber - Redis</p>
            <ul className="flex">
              <li className="pr-8 text-blue-800 font-medium"><a href="https://github.com/Ciggzy1312/go-redis-URL-Shortener" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
          </div>

          <div className="w-3/5">
            <ul className="list-disc font-medium">
              <li className="px-8 py-1.5">Developed a URL shortening application using golang and fiber framework</li>
              <li className="px-8 py-1.5">Used redis for database</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-16 py-10" id="contact">
        <span className="text-4xl font-bold">Contact</span>
        <div className="h-0.5 my-2 bg-gradient-to-r from-gray-800"></div>
        <p className="font-medium py-1 text-lg">Like my work? I am always open to collaborating on projects and innovative ideas</p>
        <p className="font-medium py-1 text-lg">Find out more about me & feel free to connect with me here :</p>
        <ul className="flex text-xl mt-2">
          <li className="text-blue-500 mr-10"><a href="https://github.com/Ciggzy1312" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
          <li className="text-blue-500 mr-10"><a href="https://twitter.com/Ciggzy_" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a></li>
          <li className="text-blue-500 mr-10"><a href="https://www.linkedin.com/in/deepayan-mukherjee-a7ba821ab/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li>
          <li className="text-blue-500 mr-10"><a href="https://hashnode.com/@Ciggzy" target="_blank" rel="noreferrer"><SiHashnode /></a></li>
        </ul>
      </div>
    </div>
  )
}
