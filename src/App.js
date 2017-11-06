import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import * as cv from './cv.json';
import Header from './Components/header';
import WorkExperience from './Components/work-experience';

injectGlobal`
* {font-family: 'Lato', sans-serif;}
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header cv={cv} />
        <WorkExperience data={cv.workExperience} />
      </div>
    );
  }
}

export default App;
