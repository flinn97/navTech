import { Component } from 'react';
// import auth from '../services/auth';
import "../App.css";

import { BrowserRouter, Link, redirect, Route, Routes } from 'react-router-dom';
import NavThemeFactory from '../componentListNPM/navThemes/navThemeFactory';

export default class Logo extends Component {
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
      legato: <LegatoLogo logo={this.props.logo} app={app} alignment={this.props.alignment} theme={this.props.theme} navContainerStyle={this.props.navContainerStyle} navContainerTheme={this.props.navContainerTheme} sectionsContainerTheme={this.props.sectionsContainerTheme} sectionsContainerStyle={this.props.sectionsContainerStyle} sectionOneStyle={this.props.sectionOneStyle} sectionOneTheme={this.props.sectionOneTheme} logoWrapperStyle={this.props.logoWrapperStyle} logoWrapperTheme={this.props.logoWrapperTheme} logoTheme={this.props.logoTheme} logoImageStyle={this.props.logoImageStyle} logoImageTheme={this.props.logoImageTheme} />
    }
    let f = NavThemeFactory.getNavThemeFactory();
    let style = this.props.theme?f[this.props.theme]:state.theme?f[state.theme]:f.default;
    let wrapper = theme[this.props.alignment];
  return (
    <div style={this.props.logoWrapperStyle?{...this.props.logoWrapperStyle}:this.props.logoWrapperTheme?{...f[this.props.logoWrapperTheme][this.props.alignment].logoWrapper}:{...wrapper?.logoWrapper}}>
      {this.props.logoTheme?theme[this.props.logoTheme]:this.props.theme?theme[this.props.theme]:theme.default}
    </div>
        
  )}
}

class LegatoLogo extends Component {
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
    let f = NavThemeFactory.getNavThemeFactory();
    let style = this.props.theme?f[this.props.theme]:state.theme?f[state.theme]:f.default;
    let logo = theme[this.props.alignment];
  return (
      <img src={this.props.logo} style={this.props.logoImageStyle?{...this.props.logoImageStyle}:this.props.logoImageTheme?{...f[this.props.logoImageTheme][this.props.alignment]}:{...logo.logoStyle}} />
  )}
}