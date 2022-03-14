import React from 'react'
import styles from '../styles/Dashboard.module.css'
import Header from './header'
import Sidebar from './sidebar'

const Dashboard = ({ address }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main}>
          <Header title='Dashboard'/>
        </div>
      </div>
    </>
  )
}

export default Dashboard