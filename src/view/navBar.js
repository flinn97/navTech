import { Component } from 'react';
// import auth from '../services/auth';
import "../App.css";
import Legato from './legatoNavBar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NavThemeFactory from '../componentListNPM/navThemes/navThemeFactory';




export default class TopBarNav extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let app = this.props.app;
    let state = app.state;
    let styles = state.styles;
    
    let switchcase = app.state.switchcase;
    let dispatch = app.dispatch;
    let template = {
      legato : <Legato logo={this.props.logo} app={app} alignment={this.props.alignment} theme={this.props.theme} navContainerStyle={this.props.navContainerStyle} navContainerTheme={this.props.navContainerTheme} sectionsContainerTheme={this.props.sectionsContainerTheme} sectionsContainerStyle={this.props.sectionsContainerStyle} sectionOneStyle={this.props.sectionOneStyle} sectionOneTheme={this.props.sectionOneTheme} logoWrapperStyle={this.props.logoWrapperStyle} logoWrapperTheme={this.props.logoWrapperTheme} logoTheme={this.props.logoTheme} logoImageStyle={this.props.logoImageStyle} logoImageTheme={this.props.logoImageTheme} />,
      default : <Def app={app} theme={this.props.theme} />
    }
    let f = NavThemeFactory.getNavThemeFactory();
    let theme = this.props.theme?f[this.props.theme]:state.theme?f[state.theme]:f.default;
    let container = theme[this.props.alignment];
  return (
    <div style={this.props.navContainerStyle?{...this.props.navContainerStyle}:this.props.navContainerTheme?f[this.props.navContainerTheme][this.props.alignment].navContainer:container.navContainer}>
      {this.props.template?(<>{template[this.props.template]}</>):(<>{template.default}</>)}
    </div>
        
  )}
}

class Def extends Component {
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
    <div style={{position:"absolute", top:"0", left:"0", display:"flex", flexDirection:"row", background:"purple", width:"100%", height:"100px"}}>

      {state.switchCase.map((obj, index)=> 
      <Link style={{...obj.style, position:obj.path.includes("logout")&&"absolute",
    right:obj.path.includes("logout")&&0,
    }} to={obj.path} >{obj.name}</Link>
      )}
    </div>
        
  )}
}