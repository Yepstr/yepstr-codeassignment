import React from 'react';

class Time extends React.Component {
  render() {
    return (
        <form id="category-time" >
                Datum
            <input type="date" name="firstname" /> <br />
                Tid
            <input type="time" name="lastname" />
        </form>
        );
  }
}

export default Time;
