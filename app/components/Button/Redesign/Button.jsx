// @flow

import React, { Component } from 'react'

import styles from './Button.scss'
import Login from '-!babel-loader!svg-react-loader!../../../images/icons/Login.svg'
import Plus from '-!babel-loader!svg-react-loader!../../../images/icons/Plus.svg'
import Wallet from '-!babel-loader!svg-react-loader!../../../images/icons/Wallet.svg'

const iconMap = name => {
  const icons = {
    login: Login,
    plus: Plus,
    wallet: Wallet
  }
  return icons[name]
}

type Props = {
  icon: ?string,
  text: string,
  dark: ?boolean,
  light: ?boolean
}

class Button extends Component<Props> {
  state = {}
  render = () => {
    const { dark, light, text, icon, style } = this.props
    let buttonStyle
    let conditionalIconStyle

    const Icon = iconMap(icon)

    if (dark) {
      buttonStyle = styles.darkButton
      conditionalIconStyle = styles.lightIcon
    }
    if (light) {
      buttonStyle = styles.lightButton
      conditionalIconStyle = styles.darkIcon
    }

    return (
      <button
        style={{ ...style }}
        className={`${styles.buttonRedesign} ${buttonStyle}`}
      >
        {Icon ? (
          <Icon className={`${styles.icon} ${conditionalIconStyle}`} />
        ) : (
          <div className={styles.icon} />
        )}
        <span>{text}</span>
      </button>
    )
  }
}

export default Button
