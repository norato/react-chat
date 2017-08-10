import React, {Component} from 'react';

export default class ButtonSubmit extends Component {
  render(){
    return (
      <button
        className={`button-submit ${this.props.className}`}
        onClick={this.props.onClick}>
      </button>
    )
  }
}
