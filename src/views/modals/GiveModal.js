import React from 'react'
import { Modal } from "reactstrap";

export const GiveModal = ({isOpen, toggleOpen}) => {
  return (
    <Modal isOpen={isOpen} toggle={() => toggleOpen(false)}>
        <div className="modal-header">
          <h5 className="modal-title">
            Giving
          </h5>
          <button
            style={{position: 'absolute', top: 16, right: 16}}
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleOpen(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <ul>
            <li>Account: GRACE COMMUNITY CHAPEL SYDNEY</li>
            <li>BSB: 062-265</li>
            <li>Account Number: 1155 0065</li>
          </ul>
        </div>
      </Modal>
  )
}
