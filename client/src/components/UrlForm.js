import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLink, getLinks, shorteningLink } from "../actions/urlActions";
import { logout } from "../actions/userActions";

const UrlForm = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const urlShortening = useSelector((state) => state.urlShortening);
  const { url, error } = urlShortening;
  const urlList = useSelector((state) => state.urlList);
  const { links, error: linksError } = urlList;
  const urlRedirect = useSelector((state) => state.urlRedirect);
  const { redirect } = urlRedirect;

  const [longUrl, setLongUrl] = useState("");
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (url && url.givenUrl) {
        setLongUrl(url.givenUrl);
      } else {
        setLongUrl("");
      }
      dispatch(getLinks());
      if (redirect) {
        window.location.href = redirect;
      }
    }
  }, [dispatch, userInfo, url, history, redirect]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(longUrl);
    dispatch(shorteningLink(longUrl));
  };
  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };
  return (
    <>
      <button
        className="btn btn-light mx-2 my-3"
        onClick={() => handleLogout()}
      >
        Log out
      </button>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-5 mt-5 col-sm-8">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="mb-3">
              <label for="url" className="form-label">
                URL
              </label>
              <input
                type="text"
                className="form-control"
                id="url"
                name="url"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                aria-describedby="urlHelp"
              />
              <div id="urlHelp" className="form-text">
                Please, Paste the URL you want to shoten in the empty field
                above.
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </form>
          <div className="my-3">
            {url && url.shortUrl && (
              <>
                <p className="text-white">
                  Please click on the button below to redirect to your link
                </p>
                <button
                  className="btn btn-outline-info"
                  onClick={() => dispatch(getLink(url.shortUrl))}
                >
                  {url.shortUrl}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-5 mt-5 col-sm-8">
          <div className="card">
            <div className="card-header text-center">
              <h2>All Links !</h2>
            </div>
            {linksError && (
              <div className="alert alert-danger" role="alert">
                {linksError}
              </div>
            )}
            <div className="card-body">
              <ul className="style-none">
                {links &&
                  links.map((link) => (
                    <li className="nav-item m-2">
                      <a href={link.givenUrl}>{link.givenUrl}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UrlForm;
