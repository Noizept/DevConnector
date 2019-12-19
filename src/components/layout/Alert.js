import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeAlert } from '../../store/actions/alert';

const Alert = props =>
  props.alert !== null &&
  props.alert.length > 0 &&
  props.alert.map(alert => (
    <div
      key={alert.id}
      className={`alert alert-${alert.alertType}`}
      onClick={() => props.removeAlert(alert.id)}
    >
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alert: PropTypes.array.isRequired,
  removeAlert: PropTypes.func.isRequired
};
const mapStatetoProps = state => ({
  alert: state.alert
});

const mapDispatchToProps = {
  removeAlert
};
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Alert);
