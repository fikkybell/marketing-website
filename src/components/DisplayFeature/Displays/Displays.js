import { Extension } from '@mui/icons-material';
import { render } from '@testing-library/react';
import {React, Component} from 'react';
import DisplayItem from '../Display/Display';
import Footer from '../../Footer/Footer';
import Modal from '../../UI/Modal/Modal';
import Auxi from '../../../containers/hoc/Auxi';
import Contact from '../../ContactUs/contact';

class displayItems extends Component {

    state = {
        clicked: false
    }

clickHandler = () => {
    this.setState({clicked:true})
}

clickCancelHandler = () => {
    this.setState({clicked: false});
}


    render(){
        return ( <Auxi>
            <Modal show= {this.state.clicked} modalClosed = {this.clickCancelHandler}>
                 <Contact/>
                </Modal>
            <DisplayItem
            />
            <Footer
             clicked = {this.clickHandler}
            />
        </Auxi>)
    }
  
};

export default displayItems;