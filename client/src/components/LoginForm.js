import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import { Link } from 'react-router-dom'

const LoginForm = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, error } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [dispatch, userInfo, history])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <div className='row d-flex justify-content-center align-items-center'>
      <div className='col-md-5 col-sm-8 mt-5'>
        <div className='card'>
          <div className='card-header text-center'>
            <h2>Welcome !</h2>
          </div>
          {error && (
            <div className='alert alert-danger' role='alert'>
              {error}
            </div>
          )}
          <div className='card-body'>
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <div className='mb-3'>
                <label for='email1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email1'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby='emailHelp'
                />
                <div id='emailHelp' className='form-text'>
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className='mb-3'>
                <label for='password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='text-center'>
                <button type='submit' className='btn btn-secondary'>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className='card-footer text-muted text-center'>
            New here ?{' '}
            <Link className='mx-2' to='/register'>
              Create an Account
            </Link>
            <div className='text-center'>
              <small>© 2021</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
