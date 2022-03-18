import React from 'react'
import styles from '../styles/Header.module.css'

const Header = ({title, address}) => {
  return (
    <nav className={styles.main}>
      <span className={styles.sectionLable}>
      {title}
      </span>
      <div className={styles.option}>
        <button type='button' onClick={()=>{navigator.clipboard.writeText(address)}} className={styles.btnConnect}>
          <span className={styles.lablePrimary}>Wallet Connected</span>
          <span className={styles.lableSecondary}>{address.slice(0,5)}......{address.slice(address.length-5,address.length)}</span>
        </button>
        <button type='button' className={styles.btnPrimary}>Send / Recive</button>
        <button type='button' className={styles.btnSecondary}>Buy / Sell</button>
      </div>
    </nav>
  )
}

export default Header