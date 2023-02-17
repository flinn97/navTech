import './App.css';
import { Component } from 'react';
import logo from './view/Legato.svg';
// import Home from './view/home';
import Nav from './view/nav.js';
// import Login from './view/login';
// import Register from './view/register';
import './index.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import legatoNav from './componentListNPM/navThemes/legatoNav';
import legatoNavDark from './componentListNPM/navThemes/legatoNavDark';

// import DeletePopup from './view/deletePopup';
// import KeepDel from './view/keepDelete';


//model
/**
 * props
 * template
 * theme
 * type
 * options
 * obj
 * 
 * Options for nav for all current themes
 * logoImageTheme
 * logoImageSyle
 * logoTheme - type
 * logoWrapperTheme
 * logoWrapperStyle
 * navItemTheme
 * navItemStyle
 * obj.navItemTheme
 * obj.navItemStyle
 * activeNavItemTheme
 * activeNavItemStyle
 * obj.activeNavItemTheme
 * obj.activeNavItemStyle
 * singleLinkWrapperTheme
 * singleLinkWrapperStyle
 * obj.singleLinkWrapperTheme
 * obj.singleLinkWrapperStyle
 * activeSingleLinkWrapperTheme
 * activeSingleLinkWrapperStyle
 * obj.activeSingleLinkWrapperTheme
 * obj.activeSingleLinkWrapperStyle
 * obj.linkIcon
 * linkIconTheme
 * linkIconStyle
 * obj.linkIconTheme
 * obj.linkIconStyle
 * notifyTheme
 * notifyStyle
 * obj.notifyTheme
 * obj.notifyStyle
 * linksWrapperTheme
 * linksWrapperStyle
 * linksTheme - type
 * profilePicInnerWrapperTheme
 * profilePicInnerWrapperStyle
 * profilePicImageTheme
 * profilePicImageStyle
 * profilePicWrapperTheme
 * profilePicTheme - type
 * sectionOneStyle
 * sectionOneTheme
 * sectionTwoStyle
 * sectionTwoTheme
 * sectionThreeStyle
 * sectionThreeTheme
 * sectionsContainerStyle
 * sectionsContainerTheme
 * navContainerStyle
 * navContainerTheme
 * 
 */
export default class Dispatch extends Component {
  constructor(props){
    super(props);
  
  }


  render(){
    let app = this.props.app;
    let state = app.state;
    let styles = state.styles;
  return (
    <BrowserRouter>
        <div style={{width:"100%", height:"100vh",}}>
            
          <Nav  app={app} type="topBarNav" template="legato" theme="legato"
          options={{
          logo:logo, 
          // logoTheme: "legato",
          // logoImageTheme: "legato",
          // logoWrapperTheme: "legato",

          }}
          /> 

          {/* //notification: int variable of watching something? Or string pointing to type that gets info from object for notification. Object contains function for notifications, and it goes and interacts with it. Either give it a string or a User Object. */}
          <div style={{paddingTop:"90px", paddingLeft:"200px", width:"100%", height:"100%", backgroundColor:"#F7F7F7"}}> 
          <Routes>
          {state.switchCase?.map((obj, index)=>
            <Route path={obj.path} element={<obj.comp app={app}/>} />
          )}
          </Routes>
          </div>
        </div>
        
    </BrowserRouter>
  )}
}