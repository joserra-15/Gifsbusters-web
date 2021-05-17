import React from 'react';
import Tab from '../../components/Tab';

export const Login = () => {
  return (
    <div className='App-container-login'>
      <div className='form-container'>
        <Tab />
        <form className='form'>
          <div className='input-group'>
            <input
              className='input-group__input'
              type='text'
              placeholder='&nbsp;'
              name='username'
              id='username'
              autoComplete='off'
              required
            />
            <label className='input-group__label' htmlFor='username'>
              Username
            </label>
          </div>
          <div className='input-group'>
            <input
              className='input-group__input'
              type='password'
              name='password'
              placeholder='&nbsp;'
              id='password'
              required
            />
            <label className='input-group__label' htmlFor='password'>
              Password
            </label>
          </div>
          <div className='flex-space-between'>
            {/*   <p>
            <a href='#'>Forgot Password?</a>
          </p> */}
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};
