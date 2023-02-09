import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentDidUpdate() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
    };
    
    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

  render() {
    return createPortal(
      <div class="overlay" onClick={this.handleBackdropClick}>
        <div class="modal">
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
