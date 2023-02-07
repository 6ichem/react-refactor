import { FC, Dispatch, SetStateAction } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

import Form from "../../../components/Form";

import styles from "../Shop.module.css";
import { FavType } from "../constants";

// Extending our props to get the default HTML element prop types
interface Props {
  isModalOpen: boolean;
  onSubmit: (payload: FavType) => void;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ProductModal: FC<Props> = ({
  isModalOpen,
  setModalOpen,
  onSubmit,
  ...rest
}) => (
  <Modal
    isOpen={isModalOpen}
    className={styles.reactModalContent}
    overlayClassName={styles.reactModalOverlay}
    ariaHideApp={false}
  >
    <div className={styles.modalContentHelper}>
      <div className={styles.modalClose} onClick={() => setModalOpen(false)}>
        <FaTimes />
      </div>

      <Form onSubmit={onSubmit} />
    </div>
  </Modal>
);

export default ProductModal;
