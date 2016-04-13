/**
 * @file melon/Dialog/DialogWindow
 * @author cxtom<cxtom2010@gmail.com>
 */

import React, {Component, PropTypes} from 'react';
import {create} from '../common/util/cxBuilder';

const cx = create('DialogWindow');

export default class DialogWindow extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.top !== this.props.top
            || nextProps.footer !== this.props.footer
            || nextProps.title !== this.props.title;
    }

    render() {

        const {children, top, title, footer, ...others} = this.props;

        const style = {
            transform: 'translate(0, ' + top + 'px)',
            WebkitTransform: 'translate(0, ' + top + 'px)',
            msTransform: 'translate(0, ' + top + 'px)',
            MozTransform: 'translate(0, ' + top + 'px)'
        };

        return (
            <div {...others} style={style} className={cx(this.props).build()}>
                {title}{children}{footer}
            </div>
        );
    }

}

DialogWindow.propTypes = {
    top: PropTypes.number.isRequired,
    footer: PropTypes.element,
    title: PropTypes.element
};