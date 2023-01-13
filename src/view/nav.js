import { Component } from 'react';
// import auth from '../services/auth';
import "../App.css";

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NavBar from './navBar';
import SideBarNav from './sideBar';





export default class Nav extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let app = this.props.app;
    let state = app.state;
    let styles = state.styles;
    
    let switchcase = app.state.switchcase;
    let dispatch = app.dispatch;

    let type = {
      topBarNav: <NavBar logo={this.props.logo} app={app} alignment="top" theme={this.props.theme} navContainerStyle={this.props.navContainerStyle} navContainerTheme={this.props.navContainerTheme} sectionsContainerTheme={this.props.sectionsContainerTheme} sectionsContainerStyle={this.props.sectionsContainerStyle} sectionOneStyle={this.props.sectionOneStyle} sectionOneTheme={this.props.sectionOneTheme} logoWrapperStyle={this.props.logoWrapperStyle} logoWrapperTheme={this.props.logoWrapperTheme} logoTheme={this.props.logoTheme} logoImageStyle={this.props.logoImageStyle} logoImageTheme={this.props.logoImageTheme} template={this.props.template} />,
      sideBarNav: <NavBar logo={this.props.logo} app={app} alignment="left" theme={this.props.theme} navContainerStyle={this.props.navContainerStyle} navContainerTheme={this.props.navContainerTheme} sectionsContainerTheme={this.props.sectionsContainerTheme} sectionsContainerStyle={this.props.sectionsContainerStyle} sectionOneStyle={this.props.sectionOneStyle} sectionOneTheme={this.props.sectionOneTheme} logoWrapperStyle={this.props.logoWrapperStyle} logoWrapperTheme={this.props.logoWrapperTheme} logoTheme={this.props.logoTheme} logoImageStyle={this.props.logoImageStyle} logoImageTheme={this.props.logoImageTheme} template={this.props.template} />,
    }
  return (
    <>
      {this.props.type? type[this.props.type]:type.topBarNav}
      </>
  )}
}