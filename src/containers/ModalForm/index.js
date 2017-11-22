import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { addEduist, toggleFormModal } from '../../actions';
import validateInputs from './validate-inputs';

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
  const mapInputsToInputValues = () => {
    return {
      name: inputs.name.value,
      birth: parseInt(inputs.birth.value, 10),
      death: parseInt(inputs.death.value, 10) || -1,
      summary: inputs.summary.value || ''
    };
  };
  const clearInputValues = () => {
    Object.values(inputs).forEach(element => { element.value = ''; });
  };

  return (
    <Modal isOpen={isOpen} className="ModalForm">
      <div
        className="form-container"
        onClick={e => e.stopPropagation() /* prevent svg click event */}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!validateInputs(inputs)) return;
            dispatch(addEduist(mapInputsToInputValues(inputs)));
            dispatch(toggleFormModal());
            clearInputValues();
          }}>

          <input
            aria-label="name"
            minLength="1"
            name="eduist_name"
            placeholder="Name"
            ref={mapRef('name')}
            required
            type="text" />
          <div>:</div>
          <input
            aria-label="year of birth"
            max={currentYear}
            min="0"
            name="eduist_birthyear"
            placeholder="YYYY"
            ref={mapRef('birth')}
            required
            type="number" />
          <div>—</div>
          <input
            aria-label="year of death"
            max={currentYear}
            min="-1"
            name="eduist_deathyear"
            placeholder="YYYY"
            ref={mapRef('death')}
            type="number" />
          <textarea
            aria-label="summary"
            minLength="8"
            name="eduist_summary"
            placeholder="Summary"
            ref={mapRef('summary')}
             />

          <button type="submit">Add</button>
        </form>

        <button onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          clearInputValues();
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
