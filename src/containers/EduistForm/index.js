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
      width="300"
      y="25" >
      <form
        height="50"
        onSubmit={(e) => {
          e.preventDefault();
          if (Object.values(inputs).some(isBlank)) return;
          dispatch(addEduist(mapInputsToInputValues(inputs)));
          dispatch(closeEduistForm());
          clearInputValues();
        }}
        width="100"
        xmlns="http://www.w3.org/1999/xhtml" >

        <div className="left">
          <input
            aria-label="name"
            minLength="1"
            name="eduist_name"
            placeholder="name"
            ref={mapRef('name')}
            required
            type="text" />
          :
        </div>
        <div className="right">
          <input
            aria-label="year of birth"
            max={currentYear}
            min="0"
            name="eduist_birthyear"
            placeholder="birth"
            ref={mapRef('birth')}
            required
            type="number" />
          —
          <input
            aria-label="year of death"
            max={currentYear}
            min="-1"
            name="eduist_deathyear"
            placeholder="death"
            ref={mapRef('death')}
            type="number" />
        </div>

        <textarea
          aria-label="summary"
          minLength="8"
          name="eduist_summary"
          placeholder="summary"
          ref={mapRef('summary')}
          required />

        <button type="submit">Add</button>
      </form>
    </foreignObject>
  );
};

EduistForm = connect()(EduistForm);

export default EduistForm;
