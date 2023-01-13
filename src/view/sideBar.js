import { Component } from 'react';
// import auth from '../services/auth';
import "../App.css";

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';




export default class SideBarNav extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let app = this.props.app;
    let state = app.state;
    let styles = state.styles;
    
    let switchcase = app.state.switchcase;
    let dispatch = app.dispatch;
  return (
    <div style={{position:"absolute", top:"0", left:"0", display:"flex", flexDirection:"column", background:"teal", width:"100px", height:"100%"}}>

      {state.switchCase.map((obj, index)=> 
      <Link style={{...obj.style, position:obj.path.includes("logout")&&"absolute",
    bottom:obj.path.includes("logout")&&0,
    }} to={obj.path} >{obj.name}</Link>
      )}
    </div>
        
  )}
}