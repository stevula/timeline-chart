import { connect } from 'react-redux';
import Chart from '../../components/Chart';
import { toggleFormModal } from '../../actions';
import getEduistRows from './getEduistRows';
import getYearBounds from './getYearBounds';

const mapStateToProps = (state) => {
  return {
    isFormModalOpen: state.isFormModalOpen,
    rows: getEduistRows(state.eduists),
    ...getYearBounds(state.eduists)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(toggleFormModal())
  }
}

const ChartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);

export default ChartContainer;
