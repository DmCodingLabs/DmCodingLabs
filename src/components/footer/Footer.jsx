import React from 'react'
import './Footer.scss'
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="copy">&copy; Dorian Marechal - Codinglabs 2024</span>
        <div className="link-social">
          <a href="https://github.com/DmCodingLabs" target='_blanc' className="link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/dorian-marechal-325848269" target='_blanc' className="link">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer