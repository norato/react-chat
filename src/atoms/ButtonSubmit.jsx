import React, {Component} from 'react';

export default class ButtonSubmit extends Component {
  render(){
    return (
      <button className="button-submit" onClick={this.props.onClick}></button>
    )
  }
}
