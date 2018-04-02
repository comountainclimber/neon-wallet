// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../core/constants'
import Button from '../../components/Button/Redesign/Button'

import TextInput from '../../components/Inputs/TextInput/TextInput'

import SelectInput from '../../components/Inputs/SelectInput/SelectInput'

import Dropdown from '../../components/Inputs/SelectInput/Dropdown'
import DropdownButton from '../../components/Inputs/SelectInput/DropdownButton'

import styles from './Home.scss'
import neonLogo from '../../images/neon-logo-redesign.png'
import Login from '-!babel-loader!svg-react-loader!../../images/icons/Login.svg'

const Home = () => (
  <div id="home" className={styles.home}>
    <div className={styles.loginContainer}>
      <img className={styles.logo} src={neonLogo} />
      <div className={styles.loginText}>Login</div>

      <div className={styles.inputContainer}>
        {/* <TextInput */}
        {/* className={styles.input} */}
        {/* placeholder="Private Key or Saved Wallet" */}
        {/* /> */}

        <SelectInput className={styles.input} />

        <TextInput className={styles.input} placeholder="Password" />

        <Button dark icon="login" text="Login" style={{ marginTop: 20 }} />

        <div className={styles.buttonRow}>
          <div style={{ flex: 0.45 }}>
            <Button light icon="plus" text="New Wallet" />
          </div>
          <div style={{ flex: 0.45 }}>
            <Button light icon="wallet" text="Wallet Manager" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home

class RedesignedInput extends Component {
  state = {}
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        style={{ ...this.props.additionalStyles }}
        className={styles.inputRedesign}
      />
    )
  }
}

// const Icon = props => {
// return (
// <svg className="icon">
// <use xlinkHref={"#" + props.name} />
// </svg>
// );
// };

// const Icon = ({ name, color, size, src }) => (
// <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
// <use xlinkHref={`${src}`} />
// </svg>
// );

// class RedesignedButton extends Component {
// state = {};
// render() {
// const { dark, light, text, icon } = this.props;
// let buttonStyle;
// let iconStyle;
// if (dark) {
// buttonStyle = styles.darkButton;
// iconStyle = styles.lightIconStyle;
// }
// if (light) {
// buttonStyle = styles.lightButton;
// iconStyle = styles.darkIconStyle;
// }
// return icon ? (
// <button className={`${styles.buttonRedesign} ${buttonStyle}`}>
// {text}
// </button>
// ) : (
// <button className={`${styles.buttonRedesign} ${buttonStyle}`}>
// {text}
// </button>
// );
// }
// }
