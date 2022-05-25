import React from 'react';
import TopBarItem from './topBarItem/topBarItem';
import classes from './topbarItems.module.css'

const topBarItems = () => {
     return (<div className={classes.NavigationItems}>
        <TopBarItem link='/SignIn'>Sign In</TopBarItem>
        <TopBarItem link='/signUp'>Sign Up</TopBarItem>

    </div>)
};

export default topBarItems;