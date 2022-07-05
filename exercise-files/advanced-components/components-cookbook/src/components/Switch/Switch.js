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

    select = (choice) => {
        return (evt) => {
            this.setState({
                payMethod: choice
            });
        };
    };

    renderChoice = ({ active, onClick, label }) => {
        const cssClasses = ["choice"];

        if (active) {
            cssClasses.push("active");
        }

        return (
            <div className={cssClasses.join(" ")} onClick={onClick}>
                {label}
            </div>
        );
    };

    render() {
        return (
            <div className="switch">
                <Choice
                    onClick={this.select(CREDITCARD)}
                    active={this.state.payMethod === CREDITCARD}
                    label="Pay with Creditcard"
                />
                Paying with: {this.state.payMethod}
            </div>
        );
    }
}

export default Switch;
