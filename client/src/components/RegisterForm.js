import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
const RegisterForm = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [dispatch, userInfo, history]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password.length >= 8) {
      if (password === confirmPassword) {
        dispatch(register(name, email, password));
      } else {
        setMessage("Password and Confirm Password does not match !");
      }
    } else {
      setMessage("Your password is too short !");
    }
  };

  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-5 col-sm-8 mt-5">
        <div className="card">
          <div className="card-header text-center">
            <h2>Welcome !</h2>
          </div>
          {message !== "" && (
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          )}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="card-body">
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="email1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email1"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-describedby="passwordHelp"
                />
                <div id="passwordHelp" className="form-text">
                  Your password must be at least 8 characters.
                </div>
              </div>
              <div className="mb-3">
                <label for="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer text-muted text-center">
            Alreay have an account ?{" "}
            <Link className="mx-2" to="/login">
              Log in
            </Link>
            <div>
              <small>© 2021</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
