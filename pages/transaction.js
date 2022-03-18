import React from 'react'
import Head from 'next/head'
import styles from '../styles/Transaction.module.css'
import { useWeb3 } from '@3rdweb/hooks'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

export default function Transaction() {
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
          <div className={styles.wrapper}>
            <div className={styles.sidebar}>
              <Sidebar item='transaction'/>
            </div>
            <div className={styles.main}>
              <Header title='Transaction' address={address} />
              <div className={styles.content}>
                <div className={styles.mainContent}>
                  
                </div>
                <div className={styles.offer}>
                  <div className={styles.offerBox}>
                    <p className={styles.offerHead}>Yield earned</p>
                    <p className={styles.offerDetail}>Earn up to 2.84% APY on your crypto.</p>
                    <div className={styles.action}>
                      <span className={styles.actionMain}>$0.000066</span>
                      <span className={styles.actionSec}>2.84% APY</span>
                    </div>
                  </div>
                  <div className={styles.offerBox}>
                    <p className={styles.offerHead}>Learn and Earn</p>
                    <p className={styles.offerDetail}>Earn up to $5 on completiion.</p>
                      <p className={styles.actionTri}>Verify Identity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
