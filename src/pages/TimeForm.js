import React from 'react';
import StyleSheet from 'react-style';

const TimePicker = require('material-ui/lib/time-picker');
const DatePicker = require('material-ui/lib/date-picker/date-picker');
const DatePickerDialog = require('material-ui/lib/date-picker/date-picker-dialog');

/*** style **/
const styles = StyleSheet.create({
	datePicker: {
		width: '100%',
		textAlign: 'center',
		padding: '20px 0'
	}
});

class TimeForm extends React.Component {
	
	constructor() {
		super();
		this.state = {date : null , time : null};
		
	}

	render() { 	
		return (
			<div style={ styles.datePicker }>

			<DatePicker
			hintText={this.props.dateHint}
			container="inline"
			autoOk={true}
			onChange={this.dateChange} />

			<TimePicker
			format={this.props.timeFormat}
			container="inline"
			hintText={this.props.timeHint} 
			onChange={this.timeChange} />
			</div>
			);
	}
}

export default TimeForm;