import { Comment } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import { Overlay, ModalBox } from 'components/Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Comment {
  render() {
    return createPortal(
      <Overlay>
        <ModalBox>
          <img src="" alt="" />
        </ModalBox>
      </Overlay>,
      modalRoot,
    );
  }
}
