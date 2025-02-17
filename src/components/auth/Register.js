import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../store/actions/alert';
import PropTypes from 'prop-types';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const Register = props => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert('Passwords do not match', 'danger');
    } else {
      try {
        const res = await axios.post(
          '/api/users',
          JSON.stringify({ name, email, password })
        ).data;
        props.setAlert('Register Complete', 'sucess');
      } catch (error) {
        props.setAlert(error, 'danger');
      }
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
            value={password2}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

const mapDispatchToProps = {
  setAlert
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};
export default connect(
  null,
  mapDispatchToProps
)(Register);
