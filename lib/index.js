import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <br />
        app root
        <marquee>kiki yo!</marquee>
      </div>
    );
  }
}

const app = ReactDOM.render(
  <App />,
  document.getElementById('app')
);
