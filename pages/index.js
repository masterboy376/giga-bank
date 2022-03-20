import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Dashboard.module.css'
import { useWeb3 } from '@3rdweb/hooks'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import BalanceChart from '../components/balanceChart'
import { ethers } from 'ethers'
import { ThirdwebSDK } from '@3rdweb/sdk'


export default function Home({ allTokens }) {
  // const sdk = new ThirdwebSDK(
  //   new ethers.Wallet(
  //     process.env.NEXT_PUBLIC_METAMASK_KEY,
  //     ethers.getDefaultProvider(
  //       // 'https://rinkeby.infura.io/v3/'
  //       'https://rinkeby.infura.io/v3/692c3cb3b189440ca343d5ec2fc6cac2'
  //     )
  //   )
  //   )
  const { address, connectWallet } = useWeb3()

  const [tokens, setTokens] = useState([])

  useEffect(() => {
    setTokens(allTokens.result)
  }, [allTokens])


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
              <Sidebar item='dashboard' />
            </div>
            <div className={styles.main}>
              <Header title='Dashboard' address={address} />
              <div className={styles.content}>
                <div className={styles.mainContent}>
                  <div className={styles.chart}>
                    <p className={styles.subtitle}>Current balance</p>
                    <p className={styles.balance}>$ 182449.00</p>
                  </div>
                  <div className={styles.chart}>
                    <p className={styles.subtitle}>Balance history</p>
                    <BalanceChart />
                  </div>
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

export async function getServerSideProps(context) {
  let data = await fetch(`https://57wz3yh8.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D`)
  let allTokens;
  if (data) {
    allTokens = await data.json()
  }
  // console.log(allTokens)
  return {
    props: { allTokens },
  }
}
