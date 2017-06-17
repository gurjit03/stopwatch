import React,{Component} from 'react';
import Controls from './controls.jsx';

export default class StopWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalTime : 0, // in milliseconds
      splitTime : 0,
      splits : [],
      stopWatchState : 'stop'
    }
    this.handleClickStartStopBtn = this.handleClickStartStopBtn.bind(this);
    this.handleSplitAction = this.handleSplitAction.bind(this);
    this.handleResetAction = this.handleResetAction.bind(this);
    this.displayTimeInProperFormat = this.displayTimeInProperFormat.bind(this);
    this.attachZero = this.attachZero.bind(this);
  }
  handleClickStartStopBtn() {
    if(this.state.stopWatchState == 'stop') {
      this.setState({
        stopWatchState : 'start'
      })
      this.interval = setInterval(() => {
        this.setState({
          totalTime : this.state.totalTime + 1,
          splitTime : this.state.splitTime + 1
        })
        // console.log(this.state.totalTime,"total Time")
      },10)
    }else if(this.state.stopWatchState == 'start') {

      this.handleSplitAction();
      this.setState({
        stopWatchState : 'stop',
      })
       console.log(typeof this.state.splits , this.state.splits)
      clearInterval(this.interval);
    }
  }
  handleSplitAction() {
    if(this.state.stopWatchState == 'start') {
      const currentSplitTime = this.state.splitTime
      this.setState({
        splits : [
          ...this.state.splits,
          currentSplitTime
        ],
        splitTime : 0
      })
    }
  }
  handleResetAction() {
    console.log(this,"--------")
    this.setState({
      totalTime : 0,
      splitTime : 0,
      splits : [],
      stopWatchState : 'stop',
    })
    clearInterval(this.interval);
  }
  attachZero(number) {
    return number < 10 ? '0' + number : number;
  }
  displayTimeInProperFormat(timeInMilliseconds) {
    const milliseconds = timeInMilliseconds > 100 ? this.attachZero(timeInMilliseconds % 100) : this.attachZero(timeInMilliseconds);
    let totalSeconds = Math.floor(timeInMilliseconds / 100);
    const seconds = this.attachZero(totalSeconds % 60);
    const mins = this.attachZero(Math.floor((totalSeconds / 60)));
    const hours = this.attachZero(Math.floor(totalSeconds / 36000 ));
    return `${hours} : ${mins} : ${seconds} : ${milliseconds}`;
  }
  render() {
    const conditionalRender = () => {
      if(this.state.totalTime == 0) {
        return (
          <h3>SPLIT TIME</h3>
        )
      }
      return(
        this.displayTimeInProperFormat(splitTimeInMilliseconds)
      )
    }

    const timeInMilliseconds = this.state.totalTime;
    const splitTimeInMilliseconds = this.state.splitTime;
    return (
      <div>
        <p>Hi there is stopwatch</p>
        <h1>{this.displayTimeInProperFormat(timeInMilliseconds)}</h1>
        {conditionalRender()}
        <Controls onClickStartStopBtn={this.handleClickStartStopBtn}
                  onClickSplitBtn={this.handleSplitAction}
                  onClickResetBtn={this.handleResetAction}
           />
        <hr />
          <ol>
          {
            this.state.splits.map((splitTime,index) => {
              return(
                <li key={index}>
                  {this.displayTimeInProperFormat(splitTime)}
                </li>
              )
            })}
          </ol>
      </div>

    )
  }
}
