import React, {Component} from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  closeModal() {
    this.setState({
      isOpen: false
    })
  }
  openModal() {
    this.setState({
      isOpen: true
    })
  }
  render() {
    const conditionalRender = () => {
      const isOpen = this.state.isOpen;
      if(isOpen) {
        return(
          <div className="modal-container backdrop">
            <div className="modal">
              <p>Input the Email :</p>
              <input ref="email" type="email" placeholder="abc@abc.com" />
              <input type="submit" value="send-url" />
            </div>
          </div>
        )
      }
      return( <div className="modal-empty"></div> )
    }

    return conditionalRender();
  }
}
