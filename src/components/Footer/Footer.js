import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            Made With  <span role="img" aria-label="love">❤️</span>  by<span onClick={() => window.open("https://harshdigwani.github.io")}>&nbsp; &lt;Harsh/&gt;</span>
        </div>
    )
}

export default Footer;