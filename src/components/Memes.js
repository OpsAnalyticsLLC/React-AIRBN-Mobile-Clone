import React from "react"
import '../../src/styles.css'
import memesData from "../memesData.js"

export default function Memes() {
  const [memeImage, setMemeImage] = React.useState('')

  function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomNum = ~~(Math.random() * memesArray.length)  //~~ used here instead of Math.floor
    const randomMemeURL = memesArray[randomNum].url //const {url} = memesArray[randomNum]
    setMemeImage(randomMemeURL)
  }
  return (
    <main>
        <form className="forms">
            <input type="text" className="form--input" placeholder="Top text here"></input>
            <input type="text" className="form--input" placeholder="Bottom text here"></input>  
        </form>
        <button onClick={getMemeImage} className="form--buttom">Get New Meme Image 🖼</button>
        <img src={memeImage} className="meme--image"></img>
    </main>
    )}