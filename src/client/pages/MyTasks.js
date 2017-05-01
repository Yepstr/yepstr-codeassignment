import React from 'react';
import Axios from 'axios';


/*class TaskList extends React.component{
  render() {
    return(
      <div>
        <ul>
          {this.props.tasks.map(task =>
            <li key={task.id}>
              <a href='#'>
                {task.title}
              </a>
            </li>
          )}
        </ul>
      </div>
    )
  }
}*/


class GetData extends React.Component{
  constructor(){
    super();
    this.state = {
      tasks:[]
    };
  }

  componentDidMount(){

    Axios.get('http://localhost:3003/api/tasks')
         .then(res=> {
           console.log(res)
           this.setState({tasks:res.data, loading:false})
         })
         .catch(err => {
            console.log(err)
            this.setState({tasks, loading: false, err:'Something went wrong.'})
         })
  }

  render(){
    return(
      <div>
         <ul>
          {this.state.tasks.map(task =>
            <li key={task._id}>
              <a href='#'>
                {task.title}
              </a>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

class MyTasks extends React.Component {
  render(){
    return (
      <div className="wrapper">
        <h1> My tasks </h1>
        <GetData />
      </div>
    )
  }
}

export default MyTasks;
