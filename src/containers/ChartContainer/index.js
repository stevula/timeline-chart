import { connect } from 'react-redux';
import Chart from '../../components/Chart';
import { toggleFormModal } from '../../actions';
import getRows from './getRows';
import getYearBounds from './getYearBounds';

const mapStateToProps = (state) => {
  return {
    isFormModalOpen: state.isFormModalOpen,
    rows: getRows(state.timelineEvents),
    ...getYearBounds(state.timelineEvents)
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
