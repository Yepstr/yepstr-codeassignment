import React from 'react';
import Axios from 'axios';


//form 
class FormLabel extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    )
  }
}

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.fullname,
      email: this.props.email,
      date: this.props.date,
      time: this.props.time
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (e) => {

    this.setState({
        name: event.target.name,
        email: event.target.email,
        date: event.target.date,
        time: event.target.time
    });
  }

  handleSubmit = (e, message) => {
    e.preventDefault();

    let formData = {
      formSubject: this.props.task.title,
      formSender: this.state.name,
      formEmail: this.state.email,
      formDate: this.state.date,
      formTime: this.state.time
    }

    if(formData.formSender.length < 1 || formData.formEmail.length < 1
    || formData.formDate.length < 1 || formData.formTime.length < 1) {
      return false;
    }

    Axios({
      method: 'put',
      url: `http://localhost:3003/api/tasks/${this.props.task._id}`,
      data: formData
    })
    .then(res => {
      console.log(res);
      alert('Thank you for your message!');
    })
    .catch(err => {
      console.log(err);
      alert('There was some problem with sending your message.');
    })

    // this.setState({
    //   name: this.state.fullname,
    //   email: this.state.email,
    //   date: this.state.date,
    //   time: this.state.time
    // });
  };

  render(){
    const title = "Subject: " + this.props.task.title;
    return(
      <form className='form' onSubmit={this.handleSubmit}>
        <h2>{title}</h2>
        <fieldset className='form-group'>
          <FormLabel htmlFor='formName' title='Full Name:' />
          <input id='formName' className='form-input' name='name' type='text'
                 ref='formName'
                 required onChange={this.handleChange}
                 value={this.state.name}  />
        </fieldset>
        <fieldset className='form-group'>
          <FormLabel htmlFor='formEmail' title='Email:' />
          <input id='formName' className='form-input' name='email' type='email'
                 required onChange={this.handleChange}
                 value={this.state.email}  />
        </fieldset>
        <fieldset className='form-group'>
          <FormLabel htmlFor='formDate' title='Date:' />
          <input id='formDate' className='form-input' name='date' type='text'
                 ref='formDate' 
                 required onChange={this.handleChange}
                 value={this.state.date}  />
        </fieldset>
        <fieldset className='form-group'>
          <FormLabel htmlFor='formTime' title='Time:' />
          <input id='formTime' className='form-input' name='time' type='text'
                 ref='formTime' 
                 required onChange={this.handleChange}
                 value={this.state.time}  />
        </fieldset>
        <div className='form-group'>
          <input id='formButton' className='btn' type='submit' value="Submit" placeholder='Send message' />
        </div>
      </form>
    )
  }
}


class TaskContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task:{}
        };    
    }

    componentDidMount(){

    Axios.get(`http://localhost:3003/api/tasks/${this.props.match.params.id}`)
        .then(res => {
        console.log(res)
        this.setState({task:res.data, loading:false})
        })
        .catch(err => {
            console.log(err)
            this.setState({task, loading: false, err:'Something went wrong.'})
        })
    }

  render(){
    return (
      <div className="wrapper">
        <h1> TaskContent </h1>
         <p>{this.state.task._id}</p>
         <Form task={this.state.task}/>
      </div>
    )
  }
}

export default TaskContent;