import React from 'react';
import {Link } from 'react-router-dom';

import classes from './topBarItem.module.css';

const topBarItem = ( props ) => {
    return (<li className={classes.NavigationItem}>
        <Link
            to={props.link}
            activeClassName={classes.active}>{props.children}</Link>
    </li>)
};

export default topBarItem;