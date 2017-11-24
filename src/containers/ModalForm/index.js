import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { addTimelineEvent, toggleFormModal } from '../../actions';
import validateInputs from './validateInputs';

// form for adding a timeline event. opens in a modal.
let ModalForm = ({ dispatch, isOpen }) => {
  const inputs = {
    /**
    name: element,
    birth: element,
    death: element,
    summary: element,
    **/
  };

  const currentYear = new Date().getFullYear();
  const mapRef = (inputName) => {
    return (el => { inputs[inputName] = el; });
  };
  const getInputValues = () => {
    return {
      name: inputs.name.value,
      birth: parseInt(inputs.birth.value, 10),
      death: parseInt(inputs.death.value, 10) || -1,
      summary: inputs.summary.value || ''
    };
  };

  return (
    <Modal isOpen={isOpen} className="ModalForm">
      <div
        className="form-container"
        onClick={e => e.stopPropagation() /* prevent Chart click event */}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!validateInputs(inputs)) return;
            dispatch(addTimelineEvent(getInputValues()));
            dispatch(toggleFormModal());
          }}>

          <input
            aria-label="name"
            minLength="1"
            name="timelineEvent_name"
            placeholder="Name"
            ref={mapRef('name')}
            required
            type="text" />
          <div>:</div>
          <input
            aria-label="year of birth"
            max={currentYear}
            min="0"
            name="timelineEvent_birthyear"
            placeholder="YYYY"
            ref={mapRef('birth')}
            required
            type="number" />
          <div>—</div>
          <input
            aria-label="year of death"
            max={currentYear}
            min="-1"
            name="timelineEvent_deathyear"
            placeholder="YYYY"
            ref={mapRef('death')}
            type="number" />
          <textarea
            aria-label="summary"
            minLength="8"
            name="timelineEvent_summary"
            placeholder="Summary"
            ref={mapRef('summary')}
             />

          <button type="submit">Add</button>
        </form>

        <button onClick={(e) => {
          e.preventDefault();
          dispatch(toggleFormModal());
        }}>
        ✕
        </button>
      </div>
    </Modal>
  );
};

ModalForm = connect()(ModalForm);

export default ModalForm;
