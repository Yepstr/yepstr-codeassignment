import React from 'react';
import StyleSheet from 'react-style';


const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'rgb(248,248,248)',
    maxHeight: '20%',
    borderColor: 'rgb(222,222,222)',
    borderStyle: 'solid',
    borderWidth: '2px 0px 2px 0px',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    verticalAlign: 'middle',
    padding: '30px',
  },
});

class Title extends React.Component {

  render() {
    const textToDisplay = this.props.textToDisplay;
    return (
      <div style={styles.titleContainer}>
        <div style={styles.title}>
          {textToDisplay}
        </div>
      </div>
    );
  }
}
Title.propTypes = { textToDisplay: React.PropTypes.string };


export default Title;
