import btcLogo from '../assets/btc.png'
import maticLogo from '../assets/matic.png'
import ethLogo from '../assets/eth.png'
import solLogo from '../assets/sol.png'

export const coins = [
  {
    name: 'Bitcoin',
    sign: 'BTC',
    logo: btcLogo,
    balanceUsd:190000.32,
    balanceCoin: 5.66,
    priceUsd: 36897.89,
    change: '-4.74',
    allocation: 41.89,
  },
  {
    name: 'Solana',
    sign: 'CRV',
    logo: solLogo,
    balanceUsd: 9098.2,
    balanceCoin: 85.78,
    priceUsd: 101.32,
    change: '+4.74',
    allocation: 2.89,
  },
  {
    name: 'Polygon',
    sign: 'MATIC',
    logo: maticLogo,
    balanceUsd: 10293.6,
    balanceCoin: 9987.90,
    priceUsd: 1.72,
    change: '+1.74',
    allocation: 17.89,
  },
  {
    name: 'Ethereum',
    sign: 'ETH',
    logo: ethLogo,
    balanceUsd: 2769.2,
    balanceCoin: 1,
    priceUsd: 2769.2,
    change: '-6.24',
    allocation: 34.89,
  },
]
