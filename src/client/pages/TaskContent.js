import React from 'react';
import Axios from 'axios';


//details

class TaskDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const title = "Kategori: " + this.props.task.title;
    return(
      <div>
        <h3>{title}</h3>
        <ul>
          <li> Namn: {this.props.task.fullname} </li>
          <li> E-mail: {this.props.task.email} </li>
          <li> Datum: {this.props.task.date} </li>
          <li> Tid: {this.props.task.time} </li>
        </ul>
         <button className="btn" onClick={() => this.props.onClick()}>Ta bort</button>
      </div>
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
          console.log("initial res: " + res.data)
          this.setState({task:res.data, loading:false})
          })
          .catch(err => {
              console.log(err)
              this.setState({task, loading: false, err:'Something went wrong.'})
          })
      }

    
    componentDidUpdate(){

      Axios.get(`http://localhost:3003/api/tasks/${this.props.match.params.id}`)
          .then(res => {
          console.log("Update res: " + res)
          this.setState({task:res.data, loading:false})
          })
          .catch(err => {
              console.log(err)
              this.setState({task, loading: false, err:'Something went wrong.'})
          })
      }

    
    handleClick(){
      Axios({
        method: 'delete',
        url: `http://localhost:3003/api/tasks/${this.props.match.params.id}`,
      })
      .then(res => {
        console.log(res);
        alert('Deteled!');
        window.location = '/'
      })
      .catch(err => {
        console.log(err);
        alert('There was some problem with sending your message.');
      })
    };


  render(){
    return (
      <div className="col col-span-8">
         {/*<p>{this.props.match.params.id}</p>*/}
         <TaskDetail 
            task={this.state.task}
            onClick={() => this.handleClick()}/>
      </div>
    )
  }
}

export default TaskContent;