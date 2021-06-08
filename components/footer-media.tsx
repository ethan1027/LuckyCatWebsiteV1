import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaRedditAlien} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import {FaTwitch} from 'react-icons/fa'
import styled from "styled-components"


export default function Medias(){
   
    return (
        <div className=" py-2 w-full bg-yellow-100  text-2xl md:flex flex justify-center  "> 
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="#"><FaTwitter/></a>
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="#"><FaInstagram/></a>
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="#"><FaTelegramPlane/></a>
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="#"><FaRedditAlien/></a>
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="#"><FaDiscord/></a>
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="#"><FaTwitch/></a>
            
        </div>
        
    )

    

}