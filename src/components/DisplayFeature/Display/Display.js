import React from 'react';
import classes from './Display.module.css'
import fashion from '../../../assets/images/fashion.jpg';
import meeting from '../../../assets/images/meeting.jpg';
import images from '../../../assets/images/images.jpg';


const displayItem = ( props ) => {
    return (<div >
        
       <div className={classes.Display}>
           <img className={classes.Images} src={fashion}/>
           <p></p>     
           <img className={classes.Images} src={meeting}/>
           <p></p>     
           <img className={classes.Images} src={images}/>
           <p></p>       
           </div>
    </div>
    )
}

export default displayItem;