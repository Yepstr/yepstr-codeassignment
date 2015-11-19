import React from 'react';
import StyleSheet from 'react-style';

const styles = StyleSheet.create({
  label: {
    marginTop: '3vw',
    marginBottom: '1vw',
    opacity: '0.75',
  },
  form: {
    color: 'grey',
    marginLeft: '10vw',
    fontSize: '25',
  },
  input: {
    border: 'none',
    borderBottom: 'solid 3px black',
    width: '90%',
    fontSize: '27',
  },
});

class InputWithLabel extends React.Component {
  render() {
    const textInLabel = this.props.textInLabel;
    const inputType = this.props.inputType;
    return (
      <div style={styles.form}>

        <div style={styles.label}>
          {textInLabel}
        </div>

        <input type={inputType} style={styles.input}/>
      </div>
    );
  }
}
InputWithLabel.propTypes = { textInLabel: React.PropTypes.string };
InputWithLabel.propTypes = { inputType: React.PropTypes.string.required };
InputWithLabel.defaultProps = { inputType: 'text' };

export default InputWithLabel;
