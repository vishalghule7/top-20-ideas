import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

function Hero() {
    const allTheme = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "retro",
        "forest",
        "aqua",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "sunset",
    ];

    const {theme,setTheme} = useContext(ThemeContext);

  return (
    <div className=" flex flex-col items-center 
     gap-5 my-8">
        <h2 className="text-3xl mt-5  font-bold text-center">
            Top 20 Innovative Ideas for Your Next StartUp 
        </h2>
        <h2 className="text-center my-5"> 
            <strong className="text-secondary underline">Like your favorite ideas.</strong> Write you best Ideas. No account needed!
        </h2>
        <div>
        <select 
        onChange={(event)=>setTheme(event.target.value)}
        className="select border-primary select-bordered w-full max-w-xs" >
            <option value="" disabled  >Select The Theme</option>
            
                {allTheme.map((item) => (
                    <option key={item} value={item}>
                         {item} 
                    </option>
                ))}
            
        </select>
        </div>
    </div>
  )
}

export default Hero