import React from 'react';
import Tab from '../../components/Tab';

export const Register = () => {
  return (
    <div className='App-container-login'>
      <Tab />
      <form class='form'>
        <div class='input-group'>
          <input
            class='input-group__input'
            type='email'
            placeholder='&nbsp;'
            name='username'
            id='username'
            autocomplete='off'
            required
          />
          <label class='input-group__label' for='email'>
            Email
          </label>
        </div>
        <div class='input-group'>
          <input
            class='input-group__input'
            type='password'
            name='password'
            placeholder='&nbsp;'
            id='password'
            required
          />
          <label class='input-group__label' for='password'>
            Password
          </label>
        </div>
        <p>
          <small>
            By submitting this form, you confirm you have read and agreed to the{' '}
            <a href='#'>Terms and Conditions.</a>
          </small>
        </p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
