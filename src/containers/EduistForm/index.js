import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { addEduist, closeEduistForm } from '../../actions';

// TODO validate death year is greater than birth year
let EduistForm = ({ dispatch }) => {
  const inputs = {
    // name: undefined,
    // birth: undefined,
    // death: undefined,
    // summary: undefined
  };

  const currentYear = new Date().getFullYear();
  const isBlank = el => !el.value.trim();
  const mapRef = (inputName) => {
    return (el => { inputs[inputName] = el; });
  };
  const mapInputsToInputValues = (origObj) => {
    return Object.entries(origObj).reduce((mappedObj, [key, element]) => {
      let value = element.value;
      if (element.type === 'number') {
        value = parseInt(element.value, 10);
      }
      mappedObj[key] = value;
      return mappedObj;
    }, {});
  }
  const clearInputValues = () => {
    Object.values(inputs).forEach(element => { element.value = ''; });
  };

  return (
    <foreignObject
      className="EduistForm"
      height="50"
      width="375"
      y="25" >
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (Object.values(inputs).some(isBlank)) return;
            dispatch(addEduist(mapInputsToInputValues(inputs)));
            dispatch(closeEduistForm());
            clearInputValues();
          }}
          xmlns="http://www.w3.org/1999/xhtml" >

          <input
            aria-label="name"
            minLength="1"
            name="eduist_name"
            placeholder="Name"
            ref={mapRef('name')}

            type="text" />
          <div>:</div>
          <input
            aria-label="year of birth"
            max={currentYear}
            min="0"
            name="eduist_birthyear"
            placeholder="1900"
            ref={mapRef('birth')}

            type="number" />
          <div>—</div>
          <input
            aria-label="year of death"
            max={currentYear}
            min="-1"
            name="eduist_deathyear"
            placeholder="2017"
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
          dispatch(closeEduistForm());
        }}>
        ✕
        </button>
      </div>
    </foreignObject>
  );
};

EduistForm = connect()(EduistForm);

export default EduistForm;
