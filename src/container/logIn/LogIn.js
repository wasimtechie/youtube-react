import React, { useState } from "react";
import Home from "../../Home";
import App from "../../App";

const LogIn = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("Empty");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
    console.log("clicked");
  }

  return (
    <div>
      {home ? (
        <div className="h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="">
              <div
                className="card"
                //   style={{ borderRadius: "15px;" }}
              >
                <div className="card-body">
                  <h2 className="text-uppercase text-center mb-5">Login</h2>

                  <form onSubmit={handleLogin}>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        name="email"
                        className="form-control form-control-lg"
                        onChange={(e) => setEmaillog(e.target.value)}
                      />
                      <label className="form-label" for="form3Example3cg">
                        Your Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        name="password"
                        className="form-control form-control-lg"
                        onChange={(e) => setPasswordlog(e.target.value)}
                      />
                      <label className="form-label" for="form3Example4cg">
                        Password
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        onClick={handleLogin}
                        type="button"
                        className="btn btn-danger btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Login
                      </button>
                      {flag && (
                        <div class="alert alert-primary" role="alert">
                          Please fill all boxes
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default LogIn;
