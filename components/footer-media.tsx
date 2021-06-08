import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaRedditAlien} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import {FaTwitch} from 'react-icons/fa'

export default function Medias(){
    return (
        <div className=" w-full bg-yellow-100 bg-opacity-80 text-3xl md:flex flex justify-center  "> 
            <a className="mx-2 py-2 text-yellow-400 hover:text-yellow-300" href="#"><FaTwitter/></a>
            <a className="mx-2 py-2 text-yellow-400 hover:text-yellow-300" href="#"><FaInstagram/></a>
            <a className="mx-2 py-2 text-yellow-400 hover:text-yellow-300" href="#"><FaTelegramPlane/></a>
            <a className="mx-2 py-2 text-yellow-400 hover:text-yellow-300" href="#"><FaRedditAlien/></a>
            <a className="mx-2 py-2 text-yellow-400 hover:text-yellow-300" href="#"><FaDiscord/></a>
            <a className="mx-2 py-2 text-yellow-400 hover:text-yellow-300" href="#"><FaTwitch/></a>
            
        </div>
    )
}