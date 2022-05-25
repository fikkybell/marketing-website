import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../TopBar/Logo/logo';
import TopBarItems from '../TopBar/topbarItems/topBarItems';


const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <TopBarItems />
        </nav>
    </header>
);

export default toolbar;