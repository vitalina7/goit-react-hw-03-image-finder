import  {Component} from 'react'
import { Modal, OverLay } from "./Modal.styled";
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export class ModalApp extends Component{
   
    componentDidMount() {
        window.addEventListener('keydown', this.handelKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handelKeyDown)
    }

    handelKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }
    overlayClick = e => {
        if (e.target === e.currentTarget) {
             this.props.onClose();
        }
    }
    render() {
        return createPortal(
    <OverLay onClick={this.overlayClick}>
   <Modal>
  {this.props.children}
  </Modal>
    </OverLay>, modalRoot)
    }
    
}

 