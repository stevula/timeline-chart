import React from 'react';
import { connect } from 'react-redux';
import { addEduist } from '../../actions';

let EduistForm = ({ dispatch }) => {
  let name, dob, dod, summary;

  return (
    <foreignObject
      height="50"
      width="100">
      <form
        height="50"
        onSubmit={(e) => {
          e.preventDefault();
          if ([name, dob, dod, summary].some(isBlank)) return;
          dispatch(addEduist({ name, dob, dod, summary }));
          [name, dob, dod, summary].forEach(el => { el.value = '' });
        }}
        width="100"
        xmlns="http://www.w3.org/1999/xhtml" >

        <input type="text" ref={el => { name = el; }} />
        <input type="date" ref={el => { dob = el; }} />
        <input type="date" ref={el => { dod = el; }} />
        <input type="textarea" ref={el => { summary = el; }} />

        <button type="submit">Add</button>
      </form>
    </foreignObject>
  );
};

function isBlank(el) { return !el.val.trim }

EduistForm = connect()(EduistForm);

export default EduistForm;
