import { Component } from 'react';
import "../App.css"
import CardPractice from './CardPrac';


export default class CardsPrac extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  componentDidMount(){
    this.props.app.dispatch({linkChange:'Cards'})
  }
 


  render() {
    let app = this.props.app;


    return (
      <div><h1>Cards</h1>

      <CardPractice app={app} />

      </div>

    )
  }
}

