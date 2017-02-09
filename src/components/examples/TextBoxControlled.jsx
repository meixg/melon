/**
 * @file Example / TextBox Controlled
 * @author cxtom<cxtom2010@gmail.com>
 */

import React from 'react';
import TextBox from 'melon/TextBox';
import Title from 'melon/Title';

/* eslint-disable fecs-prefer-class */

const View = React.createClass({

    getInitialState() {
        return {
            controlledValue: '',
            userInputValue: ''
        };
    },

    onControlledTextBoxChange(e) {
        this.setState({userInputValue: e.value});
    },

    render() {

        return (
            <div className="melon-row">
                <div className="melon-column melon-column-12">
                    <Title level={5}>被控制的输入框</Title>
                    <TextBox
                        name="controlled"
                        value={this.state.controlledValue}
                        onChange={this.onControlledTextBoxChange} />
                    {this.state.userInputValue ? '用户输入了：' + this.state.userInputValue : ''}
                </div>
            </div>
        );
    }

});

module.exports = View;