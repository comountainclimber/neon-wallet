import React from 'react'

import styles from './TokenSaleConfirmDetails.scss'

import CheckMarkSVG from '../../../../assets/icons/checkGreen.svg'

const TokenSaleConfirmDetails = ({
  tokenInfo,
  assetToPurchaseWith,
  amountToPurchaseFor
}) => (
  <div className={styles.tokenSaleConfirmDetails}>
    <h1 className={styles.tokenSaleConfirmDetailsMainHeading}>
      <CheckMarkSVG className={styles.tokenSaleConfirmDetailsCheckMarkSVG} />Confirm
      Purchase
    </h1>
    <h2 className={styles.tokenSaleConfirmDetailsHeading}>Purchase assets</h2>
    <div className={styles.tokenSaleConfirmDetailsContainer}>
      <h3 className={styles.tokenSaleConfirmDetailsSecondaryHeading}>Name</h3>
      <p className={styles.tokenSaleConfirmParagraph}>{tokenInfo.name}</p>
      <h3 className={styles.tokenSaleConfirmDetailsSecondaryHeading}>
        Script Hash
      </h3>
      <p className={styles.tokenSaleConfirmParagraph}>{tokenInfo.scriptHash}</p>
    </div>

    <h2 className={styles.tokenSaleConfirmDetailsHeading}>Funding</h2>
    <div className={styles.tokenSaleConfirmDetailsContainer}>
      <h3 className={styles.tokenSaleConfirmDetailsSecondaryHeading}>
        You're sending
      </h3>
      <p className={styles.tokenSaleConfirmParagraph}>
        {amountToPurchaseFor} {assetToPurchaseWith}
      </p>
    </div>
  </div>
)

export default TokenSaleConfirmDetails
