import React, { Component } from 'react';
const css = `

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: sans-serif;
  font-weight: 300;
}


body {
  margin: 0;
}

html, body, #app {
  height: 100%;
  background-color: ghostwhite;
}

html {
  overflow-y: scroll;
}

.material-icons {
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

`;
export default class BaseCss extends Component {
  render() {
    return <style dangerouslySetInnerHTML={{__html: css }} />;
  }
}
