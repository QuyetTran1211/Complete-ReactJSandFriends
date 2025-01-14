import React from 'react';
/* eslint-disable */
module.exports = class extends React.Component {
    static displayName = '01-basic-button';

    onGreatClick = (evt) => {
        console.log('The user clicked button-1: great', evt);
    };

    onAmazingClick = (evt) => {
        console.log('The user clicked button-2: amazing', evt);
    };

    render() {
        <div>
            <h1>What do you think of React</h1>

            <button name="button-1" value="great" onClick={this.onGreatClick}>
                Great
            </button>
            <button name="button-2" value="great" onClick={this.onAmazingClick}>
                Amazing
            </button>
        </div>;
    }
};
