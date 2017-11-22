import { connect } from 'react-redux';
import Chart from '../../components/Chart';
import { toggleEduistFormActive } from '../../actions';

// return minYear and maxYear given the DOBs/DODs of eduists
const getYearBounds = (eduists) => {
  const defaultBounds = { minYear: new Date().getFullYear(), maxYear: 0 };

  return eduists.reduce((bounds, eduist) => {
    const minYear = eduist.birth < bounds.minYear ? eduist.birth : bounds.minYear;
    let maxYear = bounds.maxYear;
    if (eduist.death === -1) {
      maxYear = new Date().getFullYear();
    } else if (eduist.death > maxYear) {
      maxYear = eduist.death;
    }
    return { minYear, maxYear };
  }, defaultBounds);
}

// return array of row arrays containing eduists
const getRows = (eduists) => {
  return eduists.reduce((rows, eduist) => {
    let availableRow = rows.find((row) => {
      const latestRowDeath = row[row.length - 1].death;
      return latestRowDeath !== -1 && latestRowDeath < eduist.birth;
    });
    if (!availableRow) {
      availableRow = [];
      rows.push(availableRow);
    }
    availableRow.push(eduist);
    return rows;
  }, []);
}


const mapStateToProps = (state) => {
  return {
    isFormActive: state.isFormActive,
    rows: getRows(state.eduists),
    ...getYearBounds(state.eduists)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(toggleEduistFormActive())
  }
}

const ChartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);

export default ChartContainer;
