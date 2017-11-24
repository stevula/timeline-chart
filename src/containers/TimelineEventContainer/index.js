import { connect } from 'react-redux';
import TimelineEvent from '../../components/TimelineEvent';
import { removeTimelineEvent } from '../../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickRemove: () => dispatch(removeTimelineEvent(ownProps.name))
  };
};

const TimelineEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineEvent);

export default TimelineEventContainer;
