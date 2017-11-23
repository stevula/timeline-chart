import { connect } from 'react-redux';
import Eduist from '../../components/Eduist';
import { removeEduist } from '../../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickRemove: () => dispatch(removeEduist(ownProps.name))
  };
};

const EduistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Eduist);

export default EduistContainer;
