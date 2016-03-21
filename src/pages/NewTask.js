import React from 'react';

import TaskGrid from './TaskGrid.js';
import DateForm from './DateForm.js';

import RaisedButton from 'material-ui/lib/raised-button';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../../src/pages/theme/themeFile.js';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import IconButton from 'material-ui/lib/icon-button';
import ArrowBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
import AppBar from 'material-ui/lib/app-bar';

 //Load JSON file using json-loader
const categories = require('../../data/Category.json');
const todos = categories.results;

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
class NewTask extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      todos : todos,
      TaskItemclicked :false,
      Datepicked : false
    }
  }

  TaskItemclicked(){
    this.setState({TaskItemclicked:true});
  }

   Datepicked(){
    this.setState({Datepicked:true});
  }

  showTimeForm(){
    if(this.state.TaskItemclicked)
      return (
          <DateForm/>
        );
  }

  render() {
    return (
      <div>
      <AppBar title="New task" iconElementLeft={<IconButton><ArrowBack /></IconButton>}/>
        <TaskGrid clickHandler={this.TaskItemclicked.bind(this)} todos={this.state.todos}/>
         {this.showTimeForm()}
      </div>
    );
  }
}

export default NewTask;

