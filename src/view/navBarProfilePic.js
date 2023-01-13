import { Component } from 'react';
import profilePic from './fakePortrait.png';
import arrowIcon from './downArrow.svg';
import '../fonts/Inter/Inter-ExtraBold.ttf';
// import auth from '../services/auth';
import "../App.css";

import { BrowserRouter, Link, redirect, Route, Routes } from 'react-router-dom';

export default class ProfilePic extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let app = this.props.app;
    let state = app.state;
    let styles = state.styles;
    
    let switchcase = app.state.switchcase;
    let dispatch = app.dispatch;
    let theme = {
      legato: <LegatoProfilePic app={app} theme={this.props.theme} />
    }
  return (
    <div style={{...this.props.theme?.profilePicWrapper}}>
      {this.props.theme?theme[this.props.theme]:theme.default}
    </div>
  )}
}

class LegatoProfilePic extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let app = this.props.app;
    let state = app.state;
    let styles = state.styles;
    
    let switchcase = app.state.switchcase;
    let dispatch = app.dispatch;
    let theme = {
      
    }
  return (
    <>
      <div style={{display:"flex", width:"147px", height:"42px"}}>
        <img src={profilePic} width="42" style={{borderRadius:"999px"}}/>
        <div style={{flex:"1", height:"42px", display:"flex", flexDirection:"column", justifyContent: "center", marginLeft: "15px"}}>
          <div style={{display:"flex", width:"100%"}}>
            <div style={{fontSize:"11px", fontWeight:"800", fontFamily:"Inter", color:"#636363" }}>Sam Sabin</div>
            <div style={{width:"8px", padding:"none", display: "flex", marginLeft:"8px"}}><img src={arrowIcon} width="8px"/></div>
          </div>
          <div style={{fontSize: this.props.theme.font.fontSize.fontSize1}}>log out</div>
        </div>
      </div>
    </>
        
  )}
}