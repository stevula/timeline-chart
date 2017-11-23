import { connect } from 'react-redux';
import Eduist from '../../components/Eduist';
import { removeEduist, toggleEduistSummaryModal } from '../../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMouseEnter: () => dispatch(toggleEduistSummaryModal(ownProps.name)),
    onMouseLeave: () => dispatch(toggleEduistSummaryModal(ownProps.name)),
    onClickRemove: () => dispatch(removeEduist(ownProps.name))
  };
};

const EduistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Eduist);

export default EduistContainer;
