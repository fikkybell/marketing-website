import React from 'react';
import Auxi from '../../containers/hoc/Auxi';
import DisplayItems from '../DisplayFeature/Displays/Displays';
import TopBarItems from '../Navigations/TopBar/topbarItems/topBarItems';
import Toolbar from '../Navigations/Toolbar/Toolbar';
import Title from '../title/title';
import Footer from '../Footer/Footer';


const layout = (props) => {
  return (
    <Auxi>
    <Toolbar/>
    <Title/>
    <DisplayItems/>
  </Auxi>
  )
  
   
}

export default layout;