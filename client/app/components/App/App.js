import React from 'react';
import { IndexLink, Link } from 'react-router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  render () {
    return (
      <div>
        <Header />

        <main>
          {this.props.children}
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
