import React from 'react';
import dotnetify from 'dotnetify';
import LiveChart from './LiveChart';

dotnetify.hubServerUrl = 'http://localhost:5000';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    dotnetify.react.connect('Example', this);
    this.state = { Greetings: '', ServerTime: '' };
  }

  render() {
    return (
      <div>
        <p>{this.state.Greetings}</p>
        <p>Server time is: {this.state.ServerTime}</p>
        <LiveChart></LiveChart>
      </div>
    );
  }
}