import 'semantic-ui-css/semantic.min.css'

import Header from '../components/header/header';
import Roadmap from '../components/roadmap/roadmap';
import HowToBuy from '../components/how-to-buy';
import CoinStats from '../components/coin-stats';

export default function App() {
  return (
    <div className="text-gray-700">
      <Header/>
      <CoinStats/>
      <HowToBuy/>
      <Roadmap/>
    </div>
  )
}
