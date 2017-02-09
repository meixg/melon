/**
 * @file Style - IconPage
 * @author cxtom(cxtom2010@gmail.com)
 */

import {Page} from 'ei';

const IconPage = Page.extend({

    middlewares: [
        require('../common/middleware/asyncAction'),
        require('../common/middleware/logger')
    ],

    view: require('./IconView'),

    reducer: require('./reducer/icon'),

    getInitialState(request) {
        return {
            icons: require('./resource/icons')
        };
    }

});

module.exports = IconPage;