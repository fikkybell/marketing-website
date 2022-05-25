import React from 'react';

import advert from '../../../assets/images/start.jpg';
import classes from './titleDetails.module.css'


const titleDetails = (props) => {
   return ( <div className={classes.Section}>
        <h1>{props.title}</h1>
        <img className={classes.Meeting }src={advert} alt="" />
        <div><p className={classes.Description}>XYZ Consulting is a new company that provides expertise 
        in search marketing solutions for businesses worldwide,
        including website promotion, online advertising, 
        and search engine optimization techniques to improve its
        clients' positioning in search engines. 
        We cater to the higher education market, including colleges,
        universities, and professional educational institutions.
            </p></div>
    </div>)
};

export default titleDetails;