import React from 'react';
import StyleSheet from 'react-style';

const AppBar = require('material-ui/lib/app-bar');
const Grid = require('./Grid.js');
const TimeForm = require('./TimeForm.js');

/** styles **/ 
const styles = StyleSheet.create({
  wrapper: {
    width: '40%',
    minWidth: '600px',
    margin: 'auto'
  }, 
  navbar: {
    textAlign: 'center',
  }
});

class NewTask extends React.Component {
  render() {
    return (
      <div className="content" style={ styles.wrapper }>
      <AppBar title="Choose one category" showMenuIconButton={false}  style={ styles.navbar }  />
      <Grid />
      <AppBar title="Mission information" showMenuIconButton={false}  style={ styles.navbar }  />
      <TimeForm dateHint="Choose one date" timeHint="and an hour" timeFormat="24hr"/>
      </div>
      );
  }
}

export default NewTask;
