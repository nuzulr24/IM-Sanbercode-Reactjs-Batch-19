import React, {Component} from "react"

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      text: null,
      showTimer: true
    }
    this.hideTimer = this.hideTimer.bind(this)
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  componentDidUpdate(){
    // first condition
    if (this.state.time === 10 && this.state.text === null){
      this.setState({text: "Hello"})
    }

    // second condition
    // condition for check time and call componentWillUnmount
    // if(this.state.time === 15){
    //   this.componentWillUnmount()
    // }
  }

  tick() {
    this.setState({
      time: this.state.time + 1 
    });
  }

  hideTimer(){
    this.setState({showTimer: !this.state.showTimer})
    
  }

  render(){
    return(
      <div style={{textAlign: "center"}}>
        { this.state.showTimer &&        
          (
            <>
              <h1>
                {this.state.time}
              </h1>
              <h1>{this.state.text}</h1>
            </>
          )
        }
        <button onClick={this.hideTimer}>hide/show</button>
      </div>
    )
  }
}

export default Timer
