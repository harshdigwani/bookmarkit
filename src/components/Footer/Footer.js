import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <span>Made With ❤️ by<span onClick={() => window.open("https://harshdigwani.github.io")}>&nbsp; &lt;Harsh/&gt;</span></span>
        </div>
    )
}

export default Footer;