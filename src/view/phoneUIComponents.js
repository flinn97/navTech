import { Component } from 'react';
// import auth from '../services/auth';
import "../App.css";
import NavItems from './navItem';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Logo from './navBarLogo';
import ProfilePic from './navBarProfilePic';
import pic from "./Legato.svg"
import NavThemeFactory from '../componentListNPM/navThemes/navThemeFactory';
import FlinnApps from './flinnAppsNavBar.js';
import  Legato from './legatoNavBar';
import DefaultNav from './defaultNavBar';
import Minimal from './minimalNavBar';



export class LegatoPhone extends Component {
  constructor(props){
    super(props);
    this.showMenu=this.showMenu.bind(this);
    this.hideMenu=this.hideMenu.bind(this);

    this.state={
      left: -210
    }
  }
  async showMenu(){
    
    if(this.state.left===-210){
     
      for(let i = 0; i<=40; i++){
        console.log("hi")
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(.0005);
        let x = this.state.left + 5;
       
        this.setState({left:x})
      }
    }
    else{
      this.hideMenu();
    }
  }
  async hideMenu(){
    for(let i = 0; i<=100; i++){
      console.log("hi")
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(.0005);
      let x = this.state.left - 5;
     
      this.setState({left:x})
    }
    this.setState({left:-210})
  }


  render(){
    let app = this.props.app;
    let state = app.state;
    let styles = state.styles;
    
    let switchCase = app.state.switchCase;
    let dispatch = app.dispatch;
    let f = NavThemeFactory?.getNavThemeFactory();
    let theme = this.props.theme?f[this.props.theme]:state.theme?f[state.theme]:f.default;
    let style = theme[this.props.alignment];
    let phoneUI = {
      flinnApps: <FlinnApps app={app} alignment={this.props.alignment} theme={this.props.options?.phoneTheme? this.props.options?.phoneTheme:"flinnApps"} obj = {this.props.obj} template={this.props.template} options={this.props.options}/>,
      legato: <Legato app={app} alignment={this.props.alignment} theme={this.props.options?.phoneTheme? this.props.options?.phoneTheme:this.props.theme} obj = {this.props.obj} template={this.props.template} options={this.props.options}/>,
      default: <Minimal app={app} alignment={this.props.alignment}  theme={this.props.options?.phoneTheme? this.props.options?.phoneTheme:"minimal"}ptions={this.props.options}/>,
      minimal: <Minimal app={app} alignment={this.props.alignment} theme={this.props.options?.phoneTheme? this.props.options?.phoneTheme:"minimal"} obj = {this.props.obj} template={this.props.template} options={this.props.options}/>,
    }
  return (
    <div style={this.props.options?.phoneUIsectionsContainerStyle?{...this.props.options?.phoneUIsectionsContainerStyle, position:"absolute", left:this.state.left}:
    this.props.options?.phoneUIsectionsContainerTheme?{...f[this.props.options?.phoneUIsectionsContainerTheme][this.props.alignment].phoneUIsectionsContainer, position:"absolute", left:this.state.left}:
    {...style.phoneUIsectionsContainer, position:"absolute", left:this.state.left}}><div onClick={this.showMenu} style={{position:"fixed", left:"0", top:"0", zIndex:3000}}>Clickme</div>
    {phoneUI[this.props.phoneUITheme]}
    
    </div>
  )}
}


export class FlinnAppsPhone extends Component {
  constructor(props){
    super(props);


    this.state={
      left: -210
    }
  }



  render(){
    let app = this.props.app;
    let state = app.state;
    let styles = state.styles;
    let obj = this.props.obj;
    
    let switchCase = app.state.switchCase;
    let dispatch = app.dispatch;
    let f = NavThemeFactory?.getNavThemeFactory();
    let theme = this.props.theme?f[this.props.theme]:state.theme?f[state.theme]:f.default;
    let style = theme[this.props.alignment];
  return (
    <div style={this.props.options?.sectionsContainerStyle?{...this.props.options?.sectionsContainerStyle}:
    this.props.options?.sectionsContainerTheme?{...f[this.props.options?.sectionsContainerTheme][this.props.alignment].sectionsContainer}:
    {...style.sectionsContainer}}>
      <div style={this.props.options?.phoneUIsectionOneStyle?{...this.props.options?.phoneUIsectionOneStyle}:
       this.props.options?.phoneUIsectionOneTheme?{...f[this.props.options?.phoneUIsectionOneTheme][this.props.alignment].phoneUIsectionOne}:{...style.phoneUIsectionOne}}>
       <div style={this.props.options?.sectionOneStyle?{...this.props.options?.sectionOneStyle}:
       this.props.options?.sectionOneTheme?{...f[this.props.options?.sectionOneTheme][this.props.alignment].sectionOne}:{...style.sectionOne}}>
        <Logo logoTheme={this.props.options?.logoTheme} logo={this.props.options?.logo} app={app} alignment={this.props.alignment} theme={this.props.theme} obj={this.props.obj} options={this.props.options}/>
      </div>
      <div style={this.props.options?.sectionTwoStyle?{...this.props.options?.sectionTwoStyle}:
      this.props.options?.sectionTwoTheme?{...f[this.props.options?.sectionTwoTheme][this.props.alignment].sectionTwo}:
      {...style.sectionTwo}}>

        {/* navTitle */}
        <div style={this.props.options?.navTitleStyle?{...this.props.options?.navTitleStyle}:
        this.props.options?.navTitleTheme?{...f[this.props.options?.navTitleTheme][this.props.alignment].navTitle}:{...style.navTitle}}>
        {this.props.options.title}
        </div>
        {/* <NavTitle></NavTitle> */}

        <NavItems app={app} alignment={this.props.alignment} theme={this.props.theme} obj={this.props.obj} options={{...this.props.options, linkSection: 1}} />
        
      </div>
      <div style={this.props.options?.sectionThreeStyle?{...this.props.options?.sectionThreeStyle}:
     this.props.options?.sectionThreeTheme?{...f[this.props.options?.sectionThreeTheme][this.props.alignment].sectionThree}:{...style.sectionThree}}>
        <ProfilePic app={app} alignment={this.props.alignment} theme={this.props.theme} obj={this.props.obj} options={this.props.options} />
      </div> 
      </div>

      <div style={this.props.options?.phoneUIsectionTwoStyle?{...this.props.options?.phoneUIsectionTwoStyle}:
       this.props.options?.phoneUIsectionTwoTheme?{...f[this.props.options?.phoneUIsectionTwoTheme][this.props.alignment].phoneUIsectionTwo}:{...style.phoneUIsectionTwo}}>
      <div style={this.props.options?.sectionTwoStyle?{...this.props.options?.sectionTwoStyle}:
      this.props.options?.sectionTwoTheme?{...f[this.props.options?.sectionTwoTheme][this.props.alignment].sectionTwo}:
      {...style.sectionTwo}}>

        {/* navTitle */}
        <div style={this.props.options?.navTitleStyle?{...this.props.options?.navTitleStyle}:
        this.props.options?.navTitleTheme?{...f[this.props.options?.navTitleTheme][this.props.alignment].navTitle}:{...style.navTitle}}>
        {this.props.options.title}
        </div>
        {/* <NavTitle></NavTitle> */}

        <NavItems app={app} alignment={this.props.alignment} theme={this.props.theme} obj={this.props.obj} options={{...this.props.options, linkSection: 2}} />
        
      </div>
      </div>
      
     
    </div>
        
  )}
}

export class PhoneBottomNav extends Component {
  constructor(props){
    super(props);


    this.state={
    }
  }



  render(){
    let app = this.props.app;
    let state = app.state;
    let styles = state.styles;
    let obj = this.props.obj;
    
    let switchCase = app.state.switchCase;
    let dispatch = app.dispatch;
    let f = NavThemeFactory?.getNavThemeFactory();
    let theme = this.props.theme?f[this.props.theme]:state.theme?f[state.theme]:f.default;
    let style = theme[this.props.alignment];
  return (
    <div style={this.props.options?.sectionsContainerStyle?{...this.props.options?.sectionsContainerStyle}:
    this.props.options?.sectionsContainerTheme?{...f[this.props.options?.sectionsContainerTheme][this.props.alignment].sectionsContainer}:
    {...style.sectionsContainer}}>
       <div style={this.props.options?.sectionOneStyle?{...this.props.options?.sectionOneStyle}:
       this.props.options?.sectionOneTheme?{...f[this.props.options?.sectionOneTheme][this.props.alignment].sectionOne}:{...style.sectionOne}}>
        <NavItems app={app} alignment={this.props.alignment} theme={this.props.theme} obj={this.props.obj} options={this.props.options}/>
      </div>
    </div>
        
  )}
}

//minimal top and 
//left singular
//topandbottom nav
//bottom nav
//slider