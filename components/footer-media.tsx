import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaRedditAlien} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import {FaTwitch} from 'react-icons/fa'
import styled from "styled-components"


export default function Media(){
   
    return (
        <div className=" py-2 w-full bg-yellow-100  text-2xl md:flex flex justify-center  "> 
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="https://twitter.com/luckycat9999" target="_blank"><FaTwitter/></a>
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="#" target="_blank"><FaInstagram/></a>
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="#" target="_blank"><FaFacebook/></a>
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="https://t.me/luckycat9999official" target="_blank"><FaTelegramPlane/></a>
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="https://www.reddit.com/r/Luckycat9999official/" target="_blank"><FaRedditAlien/></a>
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="https://t.me/luckycat9999official" target="_blank"><FaDiscord/></a>
            <a className="mx-3 py-2 text-yellow-400 hover:text-yellow-300" href="#" target="_blank"><FaTwitch/></a>
        </div>
    )
}
