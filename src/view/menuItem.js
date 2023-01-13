import { Component } from 'react';
// import auth from '../services/auth';
import "../App.css";

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

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
      legato: <LegatoNavItems app={app} theme={this.props.theme} />
    }
  return (
    <div style={{...this.props.theme?.linkWrapper}}>
      {this.props.theme?theme[this.props.theme]:theme.default}
    </div>
  )}
}

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
  return (
    <>

      {/* How do I change the styling within Link tech? */}
      {state.switchCase.map((obj, index)=> 
      <Link style={obj.style?{...obj.style}:{...this.props.theme.linkStyle}} to={obj.path}>{obj.name}</Link>
      )}
    </>
        
  )}
}