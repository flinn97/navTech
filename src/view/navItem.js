import { Component } from 'react';
// import auth from '../services/auth';
import "../App.css";

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NavThemeFactory from '../componentListNPM/navThemes/navThemeFactory';

export default class NavItems extends Component {
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
      legato: <LegatoNavItems app={app} alignment={this.props.alignment} theme={this.props.theme} navContainerStyle={this.props.navContainerStyle} navContainerTheme={this.props.navContainerTheme} sectionsContainerTheme={this.props.sectionsContainerTheme} sectionsContainerStyle={this.props.sectionsContainerStyle} sectionOneStyle={this.props.sectionOneStyle} sectionOneTheme={this.props.sectionOneTheme} navItemStyle={this.props.navItemStyle} navItemTheme={this.props.navItemTheme} linksWrapperStyle={this.props.linksWrapperStyle} linksWrapperTheme={this.props.linksWrapperTheme} linksTheme={this.props.linksTheme} />
    }
    let f = NavThemeFactory?.getNavThemeFactory();
    let style = this.props.theme?f[this.props.theme]:state.theme?f[state.theme]:f.default;
    let wrapper = theme[this.props.alignment];
  return (
    <div style={this.props.linksWrapperStyle?{...this.props.linksWrapperStyle}:this.props.linksWrapperTheme?{...f[this.props.linksWrapperTheme][this.props.alignment].linksWrapper}:{...wrapper?.linksWrapper}}>
      {this.props.linksTheme?theme[this.props.linksTheme]:this.props.theme?theme[this.props.theme]:theme.default}
    </div>
  )}
}

//added styles:
//navItemStyle, navItemTheme, linksWrapperStyle, linksWrapperTheme, linksTheme

class LegatoNavItems extends Component {
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
    let item = theme[this.props.alignment];
  return (
    <>
      {state.switchCase.map((obj, index)=> 
      // Should nav item icons and notification be added here, how do you change the order?
      //Should this be a three piece grid? 
      // <div> //each nav item row
      //   <div>//icon for nav(if needed)</div>
      //   <Link style={} all this info needed etc. to={obj.path}>{obj.name}</Link>
      //   <div>//notification for nav item(if needed)</div>
      // </div>

      <Link style={this.props.navItemStyle?{...this.props.navItemStyle}:this.props.navItemTheme?{...f[this.props.navItemTheme][this.props.alignment]}:{...item.itemStyle}} to={obj.path}>{obj.name}</Link>
      )}
    </>
        
  )}
}