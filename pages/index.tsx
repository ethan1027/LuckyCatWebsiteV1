import 'semantic-ui-css/semantic.min.css'

import Roadmap from '../components/roadmap';
import HowToBuy from '../components/how-to-buy';
import React, { useRef } from 'react';
import Heroes from '../components/heroes';
import Tokenomics from '../components/tokenomics';
import Stats from '../components/stats';
import Team from '../components/team';

import Banner from '../components/banner';
import Media from '../components/footer-media' ;
const App = () => {
  return (
    <div className="text-gray-700">
      <Banner/>
      <Heroes/>
      <Stats/>
      <Tokenomics/>
      <HowToBuy/>
      <Roadmap/>
      <Team/>
      <Media/>
    </div>
  )
}

export default App
