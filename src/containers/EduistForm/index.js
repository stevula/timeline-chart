import React from 'react';
import { connect } from 'react-redux';
import { addEduist, closeEduistForm } from '../../actions';

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
      height="50"
      width="100">
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

        <input
          minLength="1"
          placeholder="name"
          ref={mapRef('name')}
          type="text" />
        <input
          max={currentYear}
          min="0"
          placeholder="birth year"
          ref={mapRef('birth')}
          type="number" />
        <input
          max={currentYear}
          min="-1"
          placeholder="death year"
          ref={mapRef('death')}
          type="number" />
        <input
          minLength="8"
          placeholder="summary"
          ref={mapRef('summary')}
          type="textarea" />

        <button type="submit">Add</button>
      </form>
    </foreignObject>
  );
};

EduistForm = connect()(EduistForm);

export default EduistForm;
