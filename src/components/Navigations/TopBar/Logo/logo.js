import React from 'react';

import EagleLogo from '../../../../assets/images/Eagle.png';
import classes from './logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={EagleLogo} alt="Eagle" />
    </div>
);

export default logo;