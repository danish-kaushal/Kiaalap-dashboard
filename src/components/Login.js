import React,{useState} from "react";
import { NavLink } from "react-router-dom";

const Login = () => {

  const [data, setData] = useState({
    username: "",
    password:""
});

const inputEvent = (event) => {
    const {name, value} = event.target

    setData((preval) =>{
       return{
            ...preval,
            [name]: value
       }
    });
};

const formSubmit =(e) => {
    e.preventDefault();
    alert(`My Full Name is ${data.username}. My Password is ${data.password}.`);
}

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-8">
      
          <div className="error-pagewrap"> 
            <div className="error-page-int">
              <div className="text-center m-b-md custom-login">
                <h3>PLEASE LOGIN TO APP</h3>
                <p>This is the best app ever!</p>
              </div>
              <div className="content-error">
                <div className="hpanel">
                  <div className="panel-body">
                    <form action="#" id="loginForm" onSubmit={formSubmit}>
                      <div className="form-group">
                        <label className="control-label" htmlFor="username">
                          Username
                        </label>
                        <input
                          type="text"
                          placeholder="example@gmail.com"
                          title="Please enter you username"
                          required
                          value={data.fullname}
                          onChange={inputEvent}
                          name="username"
                          id="username"
                          className="form-control"
                        />
                        <span className="help-block small">
                          Your unique username to app
                        </span>
                      </div>
                      <div className="form-group">
                        <label className="control-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          title="Please enter your password"
                          placeholder="******"
                          required
                          value={data.password}
                          onChange={inputEvent}
                          name="password"
                          id="password"
                          className="form-control"
                        />
                        <span className="help-block small">
                          Yur strong password
                        </span>
                      </div>
                      <div className="checkbox login-checkbox">
                        <label>
                          <input type="checkbox" className="i-checks" />{" "}
                          Remember me{" "}
                        </label>
                        <p className="help-block small">
                          (if this is a private computer)
                        </p>
                      </div>
                      <button className="btn btn-success btn-block loginbtn">
                        Login
                      </button>
                      <NavLink className="btn btn-default btn-block" to="/Register">
                        Register
                      </NavLink>
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

export default Login;
