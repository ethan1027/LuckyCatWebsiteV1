import 'semantic-ui-css/semantic.min.css'

import Roadmap from '../components/roadmap';
import HowToBuy from '../components/how-to-buy';
import React from 'react';
import Heroes from '../components/heroes';
import Tokenomics from '../components/tokenomics';
import Stats from '../components/stats';
import Team from '../components/team';

export default function App() {
  return (
    <div className="text-gray-700 scale-25">
      <Heroes/>
      <Stats/>
      <Tokenomics/>
      <HowToBuy/>
      <Roadmap/>
      <Team/>
    </div>
  )
}
