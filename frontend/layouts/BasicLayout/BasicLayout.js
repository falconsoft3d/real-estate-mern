import React from 'react';
import classNames from 'classnames';

export default function BasicLayout(props) {
    const { children, className } = props;

    return (
        <div>
            {children}
        </div>
    )
}
