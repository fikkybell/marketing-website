import{ React, Component} from 'react';

import Auxi from '../../containers/hoc/Auxi'
import Button from '../UI/Button/button';
import Input from '../UI/Input/input';
import classes from './contact.module.css'

class contact extends Component {
     
    render () {
       return <div className={classes.ContactData}>
           Email --- hello@gmail.com
         <Input/>
         <Button btnType="Success">SEND</Button>
        </div>
    };
};

export default contact;