import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

import { default as Switch1 } from "./steps/Switch1";
import { default as Switch2 } from "./steps/Switch2";
import { default as Switch3 } from "./steps/Switch3";
import { default as Switch4 } from "./steps/Switch4";
import { default as Switch5 } from "./steps/Switch5";
import { default as Switch6 } from "./steps/Switch6";

const CREDITCARD = "Creaditcard";
const BTC = "Bitcoin";

class Switch extends React.Component {
    state = {
        payMethod: BTC
    };

    render() {
        return (
            <div className="switch">
                <div className="choice">Creditcard</div>
                <div className="choice">Bitcoin</div>
                Pay with: {this.state.payMethod}
            </div>
        );
    }
}

export default Switch;
