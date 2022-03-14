import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useWeb3 } from '@3rdweb/hooks'
import Dashboard from '../components/dashboard'

export default function Home() {
  const { address, connectWallet } = useWeb3()

  return (
    <div className={styles.container}>

      <Head>
        <title>Giga bank</title>
        <meta name="description" content="get connected to world of block chain and preform your transaction. this is a complete modern web3 bank which will help you to store, buy, sell, transfer your tokens" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      {address ?
        <>
          <Dashboard address={address} />
        </>
        :
        <>
          <div className={styles.cover}>
            <button type='button' onClick={() => { connectWallet('injected') }} className={styles.btn}>Connect Wallet</button>
            <span className={styles.detail
            }>You need to connect your wallet to continue.</span>
          </div>
        </>
      }

    </div>
  )
}
