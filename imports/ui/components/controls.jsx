import React, {Component} from 'react';

export default class Controls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startStopBtn : false,
      split : false,
      reset : false,
    }
    this.clickStartStopBtn = this.clickStartStopBtn.bind(this);
    this.clickSplitBtn = this.clickSplitBtn.bind(this);
    this.clickResetBtn = this.clickResetBtn.bind(this);
  }
  clickStartStopBtn(e) {
    this.setState({
      startStopBtn : !this.state.startStopBtn
    })
    this.props.onClickStartStopBtn();
  }
  clickSplitBtn(e) {
    this.setState({
      split : !this.state.split
    })
    this.props.onClickSplitBtn();
  }
  clickResetBtn(e) {
    this.setState({
      reset : !this.state.reset
    })
    this.props.onClickResetBtn();
  }
  render() {
    return (
      <div className="stopwatch-control-wrapper">
        <div className="stopwatch-control start-stop" onClick={this.clickStartStopBtn}> start-stop </div>
        <div className="stopwatch-control split" disabled="true" onClick={this.clickSplitBtn}>split</div>
        <div className="stopwatch-control reset" onClick={this.clickResetBtn}>Reset</div>
      </div>
    )
  }
}
