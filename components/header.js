import React from 'react'
import styles from '../styles/Header.module.css'

const Header = ({title}) => {
  return (
    <nav className={styles.main}>
      <span className={styles.sectionLable}>
      {title}
      </span>
      <div className={styles.option}>
        <button type='button' className={styles.btnConnect}>
          <span className={styles.lablePrimary}>Wallet Connected</span>
          <span className={styles.lableSecondary}>0x674363...35453j5</span>
        </button>
        <button type='button' className={styles.btnPrimary}>Send / Recive</button>
        <button type='button' className={styles.btnSecondary}>Buy / Sell</button>
      </div>
    </nav>
  )
}

export default Header