import { Component } from 'react';
// import auth from '../services/auth';
import "../App.css";
import NavItems from './menuItem';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Logo from './navBarLogo';
import LegatoProfilePic from './navBarProfilePic';

import NavThemeFactory from '../componentListNPM/navThemes/navThemeFactory';

export default class Legato extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let app = this.props.app;
    let state = app.state;
    let styles = state.styles;
    
    let switchcase = app.state.switchcase;
    let dispatch = app.dispatch;
    let f = NavThemeFactory.getNavThemeFactory();
    let theme = this.props.theme?f[this.props.theme]:state.theme?f[state.theme]:f.default;
    let style = theme[this.props.alignment]
  return (
    <div style={this.props.sectionsContainerStyle?{...this.props.sectionsContainerStyle}:this.props.sectionsContainerTheme?{...f[this.props.sectionsContainerTheme][this.props.alignment].sectionsContainer}:{...style.sectionsContainer}}>
      <div style={this.props.sectionOneStyle?{...this.props.sectionOneStyle}:this.props.sectionOneTheme?{...f[this.props.sectionOneTheme][this.props.alignment]}:{...style.sectionOne}}>
        <Logo logo={this.props.logo} app={app} alignment={this.props.alignment} theme={this.props.theme} navContainerStyle={this.props.navContainerStyle} navContainerTheme={this.props.navContainerTheme} sectionsContainerTheme={this.props.sectionsContainerTheme} sectionsContainerStyle={this.props.sectionsContainerStyle} sectionOneStyle={this.props.sectionOneStyle} sectionOneTheme={this.props.sectionOneTheme} logoWrapperStyle={this.props.logoWrapperStyle} logoWrapperTheme={this.props.logoWrapperTheme} logoTheme={this.props.logoTheme} logoImageStyle={this.props.logoImageStyle} logoImageTheme={this.props.logoImageTheme} />
      </div>
      <div style={{...style.sectionTwo}}>
        <NavItems app={app} alignment={this.props.alignment} theme={this.props.theme} navContainerStyle={this.props.navContainerStyle} navContainerTheme={this.props.navContainerTheme} sectionsContainerTheme={this.props.sectionsContainerTheme} sectionsContainerStyle={this.props.sectionsContainerStyle} sectionOneStyle={this.props.sectionOneStyle} sectionOneTheme={this.props.sectionOneTheme} logoWrapperStyle={this.props.logoWrapperStyle} logoWrapperTheme={this.props.logoWrapperTheme} logoTheme={this.props.logoTheme} logoImageStyle={this.props.logoImageStyle} logoImageTheme={this.props.logoImageTheme} />
      </div>
      <div style={{...style.sectionThree}}>
        <LegatoProfilePic alignment={this.props.alignment} theme={this.props.theme} navContainerStyle={this.props.navContainerStyle} navContainerTheme={this.props.navContainerTheme} sectionsContainerTheme={this.props.sectionsContainerTheme} sectionsContainerStyle={this.props.sectionsContainerStyle} sectionOneStyle={this.props.sectionOneStyle} sectionOneTheme={this.props.sectionOneTheme} logoWrapperStyle={this.props.logoWrapperStyle} logoWrapperTheme={this.props.logoWrapperTheme} logoTheme={this.props.logoTheme} logoImageStyle={this.props.logoImageStyle} logoImageTheme={this.props.logoImageTheme} />
      </div>
    </div>
        
  )}
}

//fill out section two and three styles to match line 29