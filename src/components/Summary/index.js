import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './styles.css';

const Summary = ({ isOpen, text = 'No summary.' }) => {
  const modalStyle = {
    content: {
      height: '25%',
      width: '35%',
    }
  };

  return (
    <div className="EduistSummary">
      <Modal isOpen={isOpen} style={modalStyle}>
        <div>
          {text}
        </div>
      </Modal>
    </div>
  );
}

Summary.propTypes = {
  isOpen: PropTypes.bool,
  text: PropTypes.string
};

export default Summary;
