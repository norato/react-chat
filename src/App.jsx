import React, { Component } from 'react';
import { connect } from 'react-redux'
import io from "socket.io-client"

import MessageForm from './organisms/MessageForm';
import MessageList from './organisms/MessageList';

import {
  receive_message
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

  render() {
    let { Messages } = this.props
    return (
      <div className="app-container">
        <MessageList
          Messages={Messages}
        />
        <MessageForm
          dispatch={ this.props.dispatch }
          socket={ this.socket } 
        />
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
