import React from 'react';
import Axios from 'axios';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TaskContent from '../pages/TaskContent';

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
        <Router>
            <div>
                <ul>
                  {this.state.tasks.map(task =>
                    <li key={task._id}>
                      <Link to={`/my-task/${task._id}`}>
                        {task.title}
                      </Link>
                      
                    </li>
                  )}
                </ul>
                
                  <Route path={`/my-task/:id`} component={TaskContent}/>
               
            </div>
        </Router>

      /*<div>
         <ul>
          {this.state.tasks.map(task =>
            <li key={task._id}>
              <a href={`http://localhost:3003/api/tasks/${task._id}`}>
                {task.title}
              </a>
            </li>
          )}
        </ul>
      </div>*/
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
