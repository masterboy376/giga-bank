import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>

      <div className='background-page'>
        <Component {...pageProps} />
      </div>

    </ThirdwebWeb3Provider>
  )
}

export default MyApp
