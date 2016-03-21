import React from 'react';
import StyleSheet from 'react-style';

import TaskGrid from './TaskGrid.js';

import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import TimePicker from 'material-ui/lib/time-picker';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

const styles = StyleSheet.create({

  center:{
      margin:'auto',
      display:'table'
    },

  info:{
      color: 'orange', 
      paddingTop:4 +'vh', 
      fontFamily: 'Lato',
      margin:'auto',
      display:'table'
    },

    paper:{
      backgroundColor: 'white', 
      marginTop:1 + 'vh', 
      paddingBottom:4 + 'vh', 
      width:96 + 'vw'
    },

    date:{
      margin:'auto',
      display:'table', 
      paddingTop:2 +'vh' 
    },

    buttonContainer:{
      display: 'table', 
      margin:'auto', 
      paddingTop: 4 + 'vh' 
    },

    button:{
      height: 6 + 'vh', 
      width: 18 + 'vh'
    }
      
});


class DateForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      pickedDate : false
    }
  }

   picked(){
    this.setState({pickedDate:true});
  }

  render() {
    return (
          <div style={styles.center}>
              <div style={styles.info}> <h3>Pick a date</h3></div>
              <Paper zDepth={1} style={styles.paper}>
                  <div style={styles.date}><DatePicker onChange={this.picked.bind(this)} hintText="Date" autoOk={true}/></div>
                  <div style={styles.center}><TimePicker format={this.props.timeFormat} hintText="Time (optional)" format='24hr'/></div>
                  <div style={styles.buttonContainer}><RaisedButton style={styles.button} disabled={!this.state.pickedDate} label="Find a yep!" labelColor="white" backgroundColor="orange"/></div>
              </Paper>
          </div>
    );
  }
}

export default DateForm;

