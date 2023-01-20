import { Component } from 'react';
//what do I change the below imports to again? Do I need to pass down the actual font import to each component or just the container?
import defaultProfilePic from './fakePortrait.png';
import arrowIcon from './downArrow.svg';
import '../fonts/Inter/Inter-ExtraBold.ttf';
// import auth from '../services/auth';
import "../App.css";

import { BrowserRouter, Link, redirect, Route, Routes } from 'react-router-dom';
import NavThemeFactory from '../componentListNPM/navThemes/navThemeFactory';

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
      legato: <LegatoProfilePic app={app} alignment={this.props.alignment} theme={this.props.theme} navContainerStyle={this.props.navContainerStyle} navContainerTheme={this.props.navContainerTheme} sectionsContainerTheme={this.props.sectionsContainerTheme} sectionsContainerStyle={this.props.sectionsContainerStyle} sectionOneStyle={this.props.sectionOneStyle} sectionOneTheme={this.props.sectionOneTheme} />
    }
    let f = NavThemeFactory?.getNavThemeFactory();
    let style = this.props.theme?f[this.props.theme]:state.theme?f[state.theme]:f.default;
    let wrapper = theme[this.props.alignment];
  return (
    //added profilePicWrapperStyle, profilePicWrapperTheme, profilePicWrapper, profilePicTheme, 
    <div style={this.props.profilePicWrapperStyle?{...this.props.profilePicWrapperStyle}:this.props.profilePicWrapperTheme?{...f[this.props.profilePicWrapperTheme][this.props.alignment].profilePicWrapper}:{...wrapper?.profilePicWrapper}}>
      {this.props.profilePicTheme?theme[this.props.profilePicTheme]:this.props.theme?theme[this.props.theme]:theme.default}
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
    let f = NavThemeFactory?.getNavThemeFactory();
    let style = this.props.theme?f[this.props.theme]:state.theme?f[state.theme]:f.default;
    // let item = theme[this.props.alignment];
  return (
    <>
    //how granular do we want to go with control of this? Which stuff is important to be able to control?
    //what information do we need to pass in for username, profile pic, and log out?
      <div style={{display:"flex", width:"147px", height:"42px"}}> //style.profileComponent.wrapper
        <img src={this.props.obj?.getJson()?.picURL!==""?this.props.obj?.getJson().picURL:defaultProfilePic} width="42" style={{borderRadius:"999px"}}/>
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