import { useState } from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";

const NavRes = ({isOpen, setIsOpen}) => {
  return (
    <div className="hidden md:flex md:flex-col w-full h-[60%] fixed top-0 bg-white shadow-xl z-10">
      <div className="py-4 px-5">
        <button className="text-lg font-semibold text-blue-500" onClick={() => setIsOpen(!isOpen)}>Back</button>
      </div>
      <div className="text-center">
        <ul className="text-lg font-medium">
          <li className="py-4"><a href="#home" onClick={()=>setIsOpen(false)}>Home</a></li>
          <li className="py-4"><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li className="py-4"><a href="#techstack" onClick={() => setIsOpen(false)}>TechStack</a></li>
          <li className="py-4"><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li className="py-4"><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>

        <ul className="flex justify-center py-8 text-xl">
          <li className="text-blue-500 mx-6"><a href="https://github.com/Ciggzy1312" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
          <li className="text-blue-500 mx-6"><a href="https://twitter.com/Ciggzy_" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a></li>
          <li className="text-blue-500 mx-6"><a href="https://www.linkedin.com/in/deepayan-mukherjee-a7ba821ab/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li>
          <li className="text-blue-500 mx-6"><a href="https://hashnode.com/@Ciggzy" target="_blank" rel="noreferrer"><SiHashnode /></a></li>
        </ul>
      </div>
    </div>
  )
}

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" sticky top-0 bg-white shadow-xl z-10">
      {isOpen ? <NavRes isOpen={isOpen} setIsOpen={setIsOpen} /> : <div className="hidden md:flex justify-between items-center py-8 px-10 sticky top-0 bg-white shadow-xl z-10">
        <button className="text-lg font-semibold text-blue-500" onClick={() => setIsOpen(!isOpen)}>Menu</button>
      </div>}
      <div className="text-center py-8 px-10 flex justify-between md:hidden">
        <ul className="flex justify-center text-lg font-medium">
          <li className="px-8"><a href="#home">Home</a></li>
          <li className="px-8"><a href="#about">About</a></li>
          <li className="px-8"><a href="#techstack">TechStack</a></li>
          <li className="px-8"><a href="#projects">Projects</a></li>
          <li className="px-8"><a href="#contact">Contact</a></li>
        </ul>

        <ul className="flex justify-center text-xl lg:hidden">
          <li className="text-blue-500 mx-6"><a href="https://github.com/Ciggzy1312" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
          <li className="text-blue-500 mx-6"><a href="https://twitter.com/Ciggzy_" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a></li>
          <li className="text-blue-500 mx-6"><a href="https://www.linkedin.com/in/deepayan-mukherjee-a7ba821ab/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li>
          <li className="text-blue-500 mx-6"><a href="https://hashnode.com/@Ciggzy" target="_blank" rel="noreferrer"><SiHashnode /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar