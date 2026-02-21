
import { useState,useEffect} from "react";

export default function MemeComponent() {
    const [meme, setMeme] = useState({
        topText: "ONE DOES NOT SIMPLY",
        bottomText: "WALK INTO MORDOR",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const[allMemes,setAllMemes]=useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data =>setAllMemes(data.data.memes))
    },[])
    
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const newMemeUrl = allMemes[randomNumber].url;
        setMeme( previous =>({
            ...previous,
            randomImage:newMemeUrl
        }))
    }
    function handleEvents(event){
        const {value,name}= event.target;
        console.log(value) 
        setMeme( previous =>({
            ...previous,
            [name]:value
        }))
    }
  return (
    <div className="max-w-2xl mx-auto border-3 border-blue-300 p-6 rounded-lg my-10">

      
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <p className="mb-2 font-medium">Top Text</p>
          <input
            type="text"
            name="topText"
            placeholder="One does not simply"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-purple-500"
            onChange={handleEvents}
            value={meme.topText}
          />
        </div>

        <div className="flex-1">
          <p className="mb-2 font-medium">Bottom Text</p>
          <input
            type="text"
            name="bottomText"
            placeholder="Walk into Mordor"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500"
            onChange={handleEvents}
            value={meme.bottomText}
          />
        </div>
      </div>

      <button className="w-full  bg-purple-600 py-4 rounded-md font-semibold  mb-6 hover:cursor-pointer" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>

      <div className="relative">
        <img
          src={meme.randomImage}
          alt="generated meme"
          className="w-full rounded-md"
        />

        <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-extrabold uppercase">
         {meme.topText}
        </span>

       
        <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-extrabold uppercase">
          {meme.bottomText}
        </span>
      </div>

    </div>
  );
}