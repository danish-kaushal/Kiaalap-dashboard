import React, {useState} from "react";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Full Name is ${data.username}. My Password is ${data.password}. My Email Address is ${data.password}.`
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="error-pagewrap2">
            <div className="error-page-int">
              <div className="text-center custom-login">
                <h3>Registration</h3>
                <p>This is the best app ever!</p>
              </div>
              <div className="content-error">
                <div className="hpanel">
                  <div className="panel-body">
                    <form action="#" id="loginForm" onSubmit={formSubmit}>
                      <div className="row">
                        <div className="form-group col-lg-12">
                          <label>Username</label>
                          <input
                            className="form-control"
                            value={data.username}
                            name="username"
                            onChange={inputEvent}
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Password</label>
                          <input
                            type="password"
                            className="form-control"
                            value={data.password}
                            name="password"
                            onChange={inputEvent}
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Repeat Password</label>
                          <input
                            type="password"
                            className="form-control"
                            value={data.password}
                            name="password"
                            onChange={inputEvent}
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Email Address</label>
                          <input
                            className="form-control"
                            value={data.email}
                            type="email"
                            name="email"
                            onChange={inputEvent}
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Repeat Email Address</label>
                          <input
                            className="form-control"
                            type="email"
                            value={data.email}
                            onChange={inputEvent}
                            name="email"
                            required
                          />
                        </div>
                        <div className="checkbox col-lg-12">
                          <input type="checkbox" className="i-checks" />{" "}
                          Sigh up for our newsletter
                        </div>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-success loginbtn">
                          Register
                        </button>
                        <button className="btn btn-default">Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
