import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import '../styles/login.css'
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/v1/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <section className='vh-100'>
        <div class="px-5 ms-xl-4">
          <img className="h1 fw-bold mb-0 " src="/images/pngegg.png" width={'50px'} height={'50px'} alt="logo" />
          <span class="h1 fw-bold  mx-2">BB</span>
        </div>
        <div className="container my-5">
          {loading && <Spinner />}
          <div className="row d-flex align-items-center justify-content-center h-100">
            <h2 className="fw-bold">Welcome to <span className=" h2 text-primary fw-bold "> BudgetBuddy! </span></h2>
          
            <div className="col-md-8 col-lg-7 col-xl-6">
              
            
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">


              <Form layout="vertical" onFinish={submitHandler}>
              <h1 className="mt-1 mb-5 pb-1">Login </h1>
                <div data-mdb-input-init className="form-outline mb-4">
                  <Form.Item label="Email" name="email">
                    <Input type="email" className="form-control form-control-lg " />
                  </Form.Item>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <Form.Item label="Password" name="password">
                    <Input type="password" className="form-control form-control-lg" />
                  </Form.Item>
                </div>
                <div className="d-flex justify-content-around align-items-center mb-4">
                  <Link to="/register">Not a user ? Cleck Here to regsiter</Link>
                  <button className="btn btn-primary btn-lg btn-block">Login</button>

                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;