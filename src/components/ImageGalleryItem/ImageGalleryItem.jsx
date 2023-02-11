import Modal from 'components/Modal';
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
    const { tags, webformatURL, largeImageURL } = this.props.image;
    return (
      <>
        <li class="gallery-item">
          <img src={webformatURL} alt={tags} onClick={this.toggleModal} />
        </li>
        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            onClose={this.toggleModal}
          ></Modal>
        )}
      </>
    );
  }
}
