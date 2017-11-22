import React from 'react';
import { connect } from 'react-redux';
import { addEduist, closeEduistForm } from '../../actions';

let EduistForm = ({ dispatch }) => {
  const inputs = {
    // name: undefined,
    // dob: undefined,
    // dod: undefined,
    // summary: undefined
  };

  const isBlank = el => !el.value.trim();
  const mapRef = (inputName) => {
    return (el => inputs[inputName] = el);
  };
  const mapInputsToInputValues = (origObj) => {
    return Object.entries(origObj).reduce((mappedObj, [key, element]) => {
      mappedObj[key] = element.value;
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

        <input type="text" ref={mapRef('name')} />
        <input type="date" ref={mapRef('dob')} />
        <input type="date" ref={mapRef('dod')} />
        <input type="textarea" ref={mapRef('summary')} />

        <button type="submit">Add</button>
      </form>
    </foreignObject>
  );
};

EduistForm = connect()(EduistForm);

export default EduistForm;
