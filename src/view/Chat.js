import { Component } from 'react';
import "../App.css"

// This is a default page added just to test navTech

export default class ChatPage extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  componentDidMount(){
    this.props.app.dispatch({linkChange:'Chat'})
  }
 


  render() {
    let app = this.props.app;


    return (
      <div><h1>Chat</h1>

      </div>

    )
  }
}

