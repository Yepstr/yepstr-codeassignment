import React, {Component} from 'react';

import CategoryBanner from './CategoryBanner';
import Category from './Category';
import moment from 'moment'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

import CategoryData from '../../../data/Category.json';
import ImageMap from './ImageMap';

moment.locale('sv');

const paperStyle = {
  height: window.innerHeight,
  textAlign: 'center'
};

class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      isActive: null
    }
  }

  handleClick = (objectId) => {
    this.setState({isActive: objectId});
  }

  render() {
    return (
      <MuiThemeProvider>
        <Paper style={paperStyle} zDepth={1}>
          <CategoryBanner text='Välj kategori'/>
          {CategoryData.results.map( (data,index) => {
            return <Category key={data.objectId}
                      id={data.objectId}
                      logo={ImageMap[data.nameKey]}
                      description={data.nameKey}
                      selected={this.state.isActive}
                      onClick={this.handleClick.bind(this, data.objectId)} />
          })}
          <CategoryBanner text='Uppdragsinformation' />
          <DatePicker
            hintText='Datum'
            firstDayOfWeek={0}
            formatDate={(d)=> {return moment(d).format('dddd, ll');}}
            />
          <TimePicker
            format='24hr'
            hintText='Tid'
          />
        </Paper>
      </MuiThemeProvider>
    );
  }
};

export default NewTask;
