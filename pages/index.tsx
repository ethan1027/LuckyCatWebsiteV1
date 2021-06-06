import 'semantic-ui-css/semantic.min.css'

import Header from '../components/header';
import Roadmap from '../components/roadmap';
import HowToBuy from '../components/how-to-buy';
import CoinStats from '../components/coin-stats';

export default function App() {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-yellow-600 text-gray-700">
      <Header/>
      <CoinStats/>
      <HowToBuy/>
      <Roadmap/>
    </div>
  )
}
