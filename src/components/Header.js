import React from "react"
import '../../src/styles.css'

export default function Header() {
    return (
        <header>
            <img src={require(`../../src/images/troll-face.png`)} className="header--image" alt="meme"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )}