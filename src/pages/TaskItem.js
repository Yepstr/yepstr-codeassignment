import React from 'react';
import StyleSheet from 'react-style';

import RaisedButton from 'material-ui/lib/raised-button';

const styles = StyleSheet.create({

  task: {
      width: 30 + 'vw', 
      float:'left',  
      height: 15 + 'vh',
      margin: 1 + 'vw'
    },

    container: {
      height: 15 + 'vh'
    },


    normal:{

      img:{
        paddingTop: 4 + 'vh', 
        height: 5 + 'vh'
        },

      title:{
        color:'orange',
        display: 'table', 
        margin:'auto', 
        fontFamily: 'Lato',
        paddingTop: 1 + 'vh'  
       }

    },

    selected:{

      img:{
      paddingTop:3 + 'vh', 
      height: 7 + 'vh'
      },

    title:{
      color:'white',
       display: 'table', 
       margin:'auto', 
       fontFamily: 'Lato',
        paddingTop:1 + 'vh' 

      }

    }


});

const imgPath = "../../public/img/"; 

class TaskItem extends React.Component {

  click(){
  this.props.clickHandler(this.props.id);
  }

  render() {
    var url = imgPath+""+this.props.url;
    if(this.props.selected)
        return (
      <RaisedButton backgroundColor='orange' onMouseDown={this.click.bind(this)} style={styles.task}>
        <div style={styles.container}>
          <img src={url} style={styles.selected.img} />
          <div style={styles.selected.title}>{this.props.title}</div>
        </div>
      </RaisedButton>
    );
    else
        return (
      <RaisedButton backgroundColor='white' onMouseDown={this.click.bind(this)} style={styles.task}>
        <div style={styles.container}>
          <img src={url} style={styles.normal.img} />
          <div style={styles.normal.title}>{this.props.title}</div>
        </div>
      </RaisedButton>
    );
  }
}

export default TaskItem; 
