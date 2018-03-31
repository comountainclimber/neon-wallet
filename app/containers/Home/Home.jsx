// @flow
import React, { Component } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { ROUTES } from "../../core/constants";

import styles from "./Home.scss";

import neonLogo from "../../images/neon-logo-redesign.png";
import login from "../../images/icons/Login.svg";

import ReactSVG from "react-svg";

const Home = () => (
  <div id="home" className={styles.home}>
    <div className={styles.loginContainer}>
      <img className={styles.logo} src={neonLogo} />
      <div className={styles.loginText}>Login</div>
      <div className={styles.inputContainer}>
        <RedesignedInput
          placeholder="Private Key or Saved Wallet"
          additionalStyles={{ width: "75%", margin: 10 }}
        />
        <RedesignedInput
          placeholder="Password"
          additionalStyles={{ width: "75%", margin: 10 }}
        />
        <RedesignedButton dark icon={login} text="Login" />
        <RedesignedButton light text="New Waller" />
        <RedesignedButton light text="Wallet Manager" />
        <div />
        <img className={styles.foo} src={login} />

        <div />
      </div>
    </div>
  </div>
);

const Icon = props => {
  return (
    <svg className="icon">
      <use xlinkHref={"#" + props.name} />
    </svg>
  );
};

export default Home;

class RedesignedInput extends Component {
  state = {};
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        style={{ ...this.props.additionalStyles }}
        className={styles.inputRedesign}
      />
    );
  }
}

// const Icon = ({ name, color, size, src }) => (
// <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
// <use xlinkHref={`${src}`} />
// </svg>
// );

class RedesignedButton extends Component {
  state = {};
  render() {
    const { dark, light, text, icon } = this.props;
    let buttonStyle;
    let iconStyle;
    if (dark) {
      buttonStyle = styles.darkButton;
      iconStyle = styles.lightIconStyle;
    }
    if (light) {
      buttonStyle = styles.lightButton;
      iconStyle = styles.darkIconStyle;
    }
    return icon ? (
      <button className={`${styles.buttonRedesign} ${buttonStyle}`}>
        {text}
      </button>
    ) : (
      <button className={`${styles.buttonRedesign} ${buttonStyle}`}>
        {text}
      </button>
    );
  }
}

console.log("asdosadasasdsdo");
