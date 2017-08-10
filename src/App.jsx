import React, { Component } from 'react';
import { connect } from 'react-redux'
import io from "socket.io-client"

import MessageForm from './organisms/MessageForm';
import MessageList from './organisms/MessageList';

import {
  receive_message
  , set_user
} from './actions'

import { setCookie } from './utils';

class App extends Component {
  constructor(props) {
    super(props)
    const SERVER_URL = `http://localhost:3001/`
    this.socket = io(SERVER_URL)
    this.user   = setCookie('react-char-uuid');
    this.socket.emit('new user', this.user)
  }

  componentDidMount() {
    this.props.dispatch(set_user(this.user))
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
