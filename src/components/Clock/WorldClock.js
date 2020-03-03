import React from 'react';


class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
    this.state = {date: new Date};
  }

  render() {
    let {isLoaded, date} = this.state;
    
    if(!isLoaded){
      return (
        <div>
          <h2>Loading. . . . .</h2>
        </div>
      );
    }
    else{
      return (
        <div>
          <p>The Date is</p>
          <p>{date}</p>
        </div>
      );
    }

  }
}


  export default WorldClock;