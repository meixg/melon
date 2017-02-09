/**
 * @file Example / TimePicker 2
 */


import React from 'react';
import TimePicker from 'melon-timePicker';

/* eslint-disable fecs-prefer-class */

function View(props) {

    return (
        <TimePicker
            defaultValue="10:00"
            begin="05:00"
            end="19:00" />
    );
}

module.exports = View;