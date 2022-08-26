import React from 'react'
import { Modal } from "reactstrap";

export const VideoModal = ({isOpen, toggleOpen}) => {
  return (
    <Modal isOpen={isOpen} toggle={() => toggleOpen(false)} className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-header">
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
          <iframe width="100%" height="720" src="https://www.youtube.com/embed/-SogHtGbuog?autoplay=1&amp;&amp;rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        </div>
      </Modal>
  )
}
