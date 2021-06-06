import { useState } from 'react';
import Dropdown from './dropdown';
import styled from 'styled-components'; 

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const onClick = () => setOpenNav(nav => !nav)
  // className="{'rotate-180': open, 'rotate-0': !open}"
  // x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95"
  return (
    <div>
      <div className="antialiased dark-mode:bg-gray-900">
       <div className="w-full dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div x-data="{ open: true }" className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-4">
            <a href="#" className="text-lg text-gray-900 font-semibold tracking-widest uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">LuckyCat Token</a>
            <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpenNav(nav => !nav)}>
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <HeaderButton href="#">What's LuckyCat</HeaderButton>
            <HeaderButton href="#">Why LuckyCat</HeaderButton>
            <HeaderButton href="#">Roadmap</HeaderButton>
            <HeaderButton href="#">Contact</HeaderButton>
            <div className="relative" x-data="{ open: true }">
              <button onClick={onClick} className="flex flex-row bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-200 focus:bg-yellow-200 focus:outline-none focus:shadow-outline">
                <span>More</span>
                <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              { openNav && <Dropdown/>} 
            </div>    
          </nav>
        </div>
      </div>
    </div>
  </div>
  )
}


const HeaderButton = styled.a.attrs({
  className: `
  px-4
  py-2
  mt-2
  text-gray-900
  font-semibold
  bg-transparent
  rounded-lg
  dark-mode:bg-transparent
  dark-mode:hover:bg-gray-600
  dark-mode:focus:bg-gray-600
  dark-mode:focus:text-white
  dark-mode:hover:text-white
  dark-mode:text-gray-200
  md:mt-0
  md:ml-4
  hover:text-gray-900
  focus:text-gray-900
  hover:bg-yellow-100
  focus:bg-yellow-100
  focus:outline-none
  focus:shadow-outline
  `
})``