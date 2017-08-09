import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
  connect_to_server
  , send_message
  , receive_message
} from './actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.dispatch(connect_to_server())
    this.state = {
      messages : []
    }
  }

  shouldComponentUpdate( nextProps, nextState ) {
    if (this.props.socket) {
      return this.props.socket.on('new message', (msg)=>{
        this.props.dispatch(receive_message(msg))
        return false;
      })
    }
    return false
  }
  __sendMessage(){
    let message = `Send Message ${Date()}`
    this.props.dispatch(send_message({messages: message}))
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
    , socket: state.get('socket')
  }
};

export default connect(mapStateToProps)(App)
