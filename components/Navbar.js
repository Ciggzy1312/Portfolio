import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="text-center py-8 px-10 flex justify-between sticky top-0 bg-white shadow-xl z-10">
        <ul className="flex justify-center text-lg font-medium">
            <li className="px-8"><a href="#home">Home</a></li>
            <li className="px-8"><a href="#about">About</a></li>
            <li className="px-8"><a href="#techstack">TechStack</a></li>
            <li className="px-8"><a href="#projects">Projects</a></li>
            <li className="px-8"><a href="#contact">Contact</a></li>
        </ul>
  
        <ul className="flex justify-center text-xl">
            <li className="text-blue-500 mx-6"><a href="https://github.com/Ciggzy1312" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
            <li className="text-blue-500 mx-6"><a href="https://twitter.com/Ciggzy_" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a></li>
            <li className="text-blue-500 mx-6"><a href="https://www.linkedin.com/in/deepayan-mukherjee-a7ba821ab/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li>
            <li className="text-blue-500 mx-6"><a href="https://hashnode.com/@Ciggzy" target="_blank" rel="noreferrer"><SiHashnode /></a></li>
        </ul>
    </div>
  )
}

export default Navbar