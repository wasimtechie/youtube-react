import React, { useState } from "react";
import LogIn from "../logIn/LogIn";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("name", JSON.stringify(name));
      console.log("Saved in Local Storage");
      setLogin(!login);
    }
  }
  function handleClick() {
    console.log("submitted");
    setLogin(!login);
  }
  return (
    <div>
      <div className=" h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="">
            <div
              className=""
              // style={{ borderRadius: "15px;" }}
            >
              <div className=" p-5">
                <h2 className="text-uppercase text-center mb-5">YouTube</h2>
                {login ? (
                  <div>
                    <h2>Create an Account</h2>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          name="name"
                          className="form-control form-control-lg"
                          onChange={(e) => setName(e.target.value)}
                        />
                        {/* {console.log(name)} */}
                        <label className="form-label" for="form3Example1cg">
                          Your Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          name="email"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
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
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" for="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example4cdg">
                          Repeat your password
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          onClick={handleFormSubmit}
                          type="button"
                          className="btn btn-danger btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p
                        onClick={handleClick}
                        className="text-center text-muted mt-5 mb-0"
                      >
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                      {flag && (
                        <div class="alert alert-primary" role="alert">
                          Please fill all boxes
                        </div>
                      )}
                    </form>
                  </div>
                ) : (
                  <LogIn />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
