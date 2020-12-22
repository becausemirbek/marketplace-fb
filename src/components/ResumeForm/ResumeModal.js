import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const ModalExample = (props) => {
  const { buttonLabel, className, color, onClose, onSubmit } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleClose = (e) => {
    if (onClose) onClose(e);
    toggle();
  };
  const handleSubmit = (e) => {
    if (onClose) onSubmit(e);
    toggle();
  };

  return (
    <div>
      <Button color={color} onClick={toggle} className="px-0">
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={handleClose} className={className}>
        <ModalHeader toggle={handleClose}>{props.titleText}</ModalHeader>
        <ModalBody>
          <props.body handleClose={handleClose} handleSubmit={handleSubmit} />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
