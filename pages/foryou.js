import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Foryou.module.css'
import { useWeb3 } from '@3rdweb/hooks'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

export default function Foryou({ allNews }) {
  const { address, connectWallet } = useWeb3()

  const [news, setNews] = useState([])

  useEffect(() => {
    setNews(allNews.articles)
  }, [])
  

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
              <Sidebar item='foryou' />
            </div>
            <div className={styles.main}>
              <Header title='For you' address={address} />
              <div className={styles.content}>
                <div className={styles.mainContent}>

                  {news?
                    news &&
                    news.map((item) => {
                      if (item) {
                        return <div className={styles.newsItem}>
                          <div className={styles.newsImage}>
                            <img src={item.urlToImage} alt="" className={styles.newsImg} />
                          </div>
                          <div className={styles.newsDetail}>
                            <p className={styles.newsTitle}>{item.title}</p>
                            <p className={styles.newsContent}>{item.content} . . .</p>
                            <div className={styles.newsAction}>
                              <span className={styles.newsDate}>{item.publishedAt.split('T')[0]}</span>
                              <Link href={item.url}><a target="_blank" className={styles.readMore}>Read more</a></Link>
                            </div>
                          </div>
                        </div>
                      }
                      else {
                        return <p className="planeText">Opps! no feeds to display. 😅</p>
                      }
                    })
                  :
                  <p className="planeText">Opps! no feeds to display. 😅</p>
                  }

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
  let data = await fetch(`https://newsapi.org/v2/top-headlines?q=crypto&apiKey=${process.env.NEWSAPI_KEY}`)
  let allNews;
  if (data) {
    allNews = await data.json()
  }
  // console.log(allNews)
  return {
    props: { allNews },
  }
}
