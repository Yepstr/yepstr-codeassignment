import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Axios from 'axios';

import {browserHistory} from 'react-router';
/*const NewTask = () => {
  return (
    <div style={ styles.wrapper }>
      Create a new Task
    </div>
  );
};*/

// tab element, in total 6, contains image and title
// tab {image, title}


function Tab(props){
  return(
    <button 
      className={"tab " + (props.active === true ? "tab_selected" : "")} 
      onClick={() => props.onClick()}>
      <img src={props.item.image}></img>
      <p>{props.item.title}</p>
    </button>
  )
}

// display 6 tabs
class TabsSwitcher extends React.Component {

  renderTab(i) {
    const tabs = this.props.tabs;
    const active = this.props.active === i ? true : false;
    return <Tab item={tabs[i]} active={active} onClick={() => this.props.onClick(i)} />
  }

  render(){
    return(
      <div>
        <div className="board-row">
          {this.renderTab(0)}
          {this.renderTab(1)}
          {this.renderTab(2)}
        </div>
        <div className="board-row">
          {this.renderTab(3)}
          {this.renderTab(4)}
          {this.renderTab(5)}
        </div>
      </div>
    )
  }
}

// form, parent, get the current selected tab
class TabsContent extends React.Component {
  render(){
    const tabs = this.props.tabs;
    const active = this.props.active;
    
    if(active < 0){
      return null;
    }else{
      const title = tabs[active].title;
      return(
        <div>
          <h1>Uppdragsinformation</h1>
          <Form title={title}/>
        </div>
      )
    }
  }
}


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
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      date: '',
      time: ''
    }
  }
  
  handleChange = (e) => {

    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  }

  handleSubmit = (e, message) => {
    e.preventDefault();

    let formData = {
      formSubject: this.props.title,
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
      method: 'post',
      url: 'http://localhost:3003/api/tasks',
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

    this.setState({
      name: '',
      email: '',
      date: '',
      time: ''
    });
  };

  render(){
    const title = "Subject: " + this.props.title;
    return(
      <form className='form' onSubmit={this.handleSubmit}>
        <h2>{title}</h2>
        <fieldset className='form-group'>
          <FormLabel htmlFor='formName' title='Full Name:' />
          <input id='formName' className='form-input' name='name' type='text'
                 ref='formName' placeholder='your name here'
                 required onChange={this.handleChange}
                 value={this.state.name}  />
        </fieldset>
        <fieldset className='form-group'>
          <FormLabel htmlFor='formEmail' title='Email:' />
          <input id='formName' className='form-input' name='email' type='email'
                 placeholder='yourname@example.com'
                 required onChange={this.handleChange}
                 value={this.state.email}  />
        </fieldset>
        <fieldset className='form-group'>
          <FormLabel htmlFor='formDate' title='Date:' />
          <input id='formDate' className='form-input' name='date' type='text'
                 ref='formDate' placeholder='Saturday, November 25'
                 required onChange={this.handleChange}
                 value={this.state.date}  />
        </fieldset>
        <fieldset className='form-group'>
          <FormLabel htmlFor='formTime' title='Time:' />
          <input id='formTime' className='form-input' name='time' type='text'
                 ref='formTime' placeholder='14:00'
                 required onChange={this.handleChange}
                 value={this.state.time}  />
        </fieldset>
        <div className='form-group'>
          <input id='formButton' className='btn' type='submit' placeholder='Send message' />
        </div>
      </form>
    )
  }
}

class NewTask extends React.Component {
  constructor() {
    super();
    this.state = {
      tabs: [
        {title: "Barnvakt", image: "/public/img/ic-kids.svg"},
        {title: "Läxhjälp", image: "/public/img/ic-study.svg"},
        {title: "Hundpassning", image: "/public/img/ic-dog-walking.svg"},
        {title: "Fönsterputs", image: "/public/img/ic-window-cleaning.svg"},
        {title: "Målning", image: "/public/img/ic-paint.svg"},
        {title: "Övrigt", image: "/public/img/ic-other.svg"}
      ],
      active: -1
    }
  }

  handleClick(i){
     var currentActive = i; // the current clicked tab
     if(currentActive == this.state.active){return;}
     this.setState({
        tabs: this.state.tabs,
        active: currentActive
     });
  }

  render(){
    return (
      <div className="wrapper">
        <h1> Välj kategori </h1>
          <TabsSwitcher 
            tabs={this.state.tabs}
            onClick={(i) => this.handleClick(i)}
            active={this.state.active}
          />
          <TabsContent 
            tabs={this.state.tabs} 
            active={this.state.active}/>
      </div>
    )
  }
}

export default NewTask;
