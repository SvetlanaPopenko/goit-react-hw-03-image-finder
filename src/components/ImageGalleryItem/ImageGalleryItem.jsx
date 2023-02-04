import { Component } from "react";

export class ImageGalleryItem extends Component{
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState({
            this.state.showModale !== 
        })
    };

    render() {
        const { showModal } = this.state;
        return (
            <li class="gallery-item">
  <img src="" alt="" onClick={this.toggleModal}/>
            </li>
            {showModal && (<Modal/>)}
        )
    }
}