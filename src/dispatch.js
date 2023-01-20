import './App.css';
import { Component } from 'react';
import logo from './view/testProfile.png';
// import Home from './view/home';
import Nav from './view/nav.js';
// import Login from './view/login';
// import Register from './view/register';
import './index.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// import DeletePopup from './view/deletePopup';
// import KeepDel from './view/keepDelete';


//model
export default class Dispatch extends Component {
  constructor(props){
    super(props);
  
  }


  render(){
    let app = this.props.app;
    let state = app.state;
    let styles =state.styles;
  return (
<BrowserRouter>
    <div style={{
      width:"100%", 
      height:"96vh",
      }}>
        
     <Nav logo={logo} app={app} type="sideBarNav" template="legato" theme="legato" sectionsContainerStyle={{backgroundColor: "green"}} sectionOneTheme="flinnApps" logoTheme="flinnApps" /> //notification: int variable of watching something? Or string pointing to type that gets info from object for notification. Object contains function for notifications, and it goes and interacts with it. Either give it a string or a User Object.
     <div style={{paddingTop:"50px", paddingLeft:"50px", width:"100%", height:"100%"}}>
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