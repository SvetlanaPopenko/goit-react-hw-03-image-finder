import Modal from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <li class="gallery-item">
          <img src="" alt="" onClick={this.toggleModal} />
        </li>
        {showModal && <Modal onClose={this.toggleModal}></Modal>}
      </>
    );
  }
}
