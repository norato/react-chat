import React, { Component } from 'react';
import { connect } from 'react-redux'
import io from "socket.io-client"

import {
  send_message
  , receive_message
} from './actions'

class App extends Component {
  constructor(props) {
    super(props)
    const SERVER_URL = `http://localhost:3001/`
    this.socket = io(SERVER_URL)
  }

  componentDidMount() {
    this.socket.on('new message', (msg)=>{
      this.props.dispatch(receive_message(msg))
    })
  }
  __sendMessage(){
    let message = `Send Message ${Date()}`
    this.props.dispatch(send_message({socket: this.socket, message: message}))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.__sendMessage.bind(this)}>send_message</button>
        <div>
          <ul>
            {
              this.props.Messages &&
                this.props.Messages.entrySeq().map((entry) => {
                  let index = entry[0]
                  let message = entry[1]
                  return <li key={index}>{message.messages}</li>
                })
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Messages: state.get('messages')
  }
};

export default connect(mapStateToProps)(App)
