import React from 'react';
import StyleSheet from 'react-style';

const styles = StyleSheet.create({
  wrapper: {
    padding: '30px',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    verticalAlign: 'middle',
    backgroundColor: 'rgb(248,248,248)',
    height: '20%',
  },
});

class NewTask extends React.Component {
  render() {
    return (
      <div style={ styles.wrapper }>
        <div style={styles.title}>
          Välj kategori
        </div>
      </div>
    );
  }
}

export default NewTask;
