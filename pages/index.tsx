import React from 'react';
import Header from '../components/header';
import Intro from '../components/intro';
import Roadmap from '../components/roadmap';

export default function App() {
  return (
    <div className="bg-gradient-to-r from-red-100 via-pink-200 to-red-300 text-gray-700">
      <Header/>
      <Roadmap/>
    </div>
  )
}
