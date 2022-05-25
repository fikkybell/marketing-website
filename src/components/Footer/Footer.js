import React from 'react';
import classes from './Footer.module.css'

const footer = ( props ) => {
    return (<div className={classes.Footer} >
        <div className={classes.Advert}>
       <p>
       Advertising is always present,
         though people may not be aware of it.
         In today's world, advertising uses every possible media
          to get its message through.
           </p> 
        </div>
        <button className={classes.Button}
        onClick = {props.clicked}
        >Contact Us</button>
           
    </div>
    )
}

export default footer;