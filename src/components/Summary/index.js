import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const Summary = ({ isOpen, text = 'No summary.' }) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="Summary">
        {text}
      </div>
    </Modal>
  );
}

Summary.propTypes = {
  isOpen: PropTypes.bool,
  text: PropTypes.string
};

export default Summary;
