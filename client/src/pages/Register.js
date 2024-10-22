import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/v1/users/register", values);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
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
      <section className="vh-100">
        <div class="px-5 ">
          <img className="h1 fw-bold mb-0 my-0" src="/images/pngegg.png" width={'50px'} height={'50px'} alt="logo" />
          <span class="h1 fw-bold  mx-2">BB</span>
        </div>
        <div className="px-4 py-0 px-md-5 text-center text-lg-start" backgroundColor={'hsl(0, 0%, 96%)'}>
          <div className="container ">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  It's not how much
                  <span className="text-primary"> you earn</span> 
                  <br />
                  it's how much
                  <br/>
                  <span className="text-primary"> you keep</span>
                </h1>
                <p className="para_for_reg" >
                  <b>BudgetBuddy: Your Personal Financial Companion</b> <br/>
                "Take control of your finances with BudgetBuddy, the ultimate expense management app designed to simplify your budgeting experience. Whether you're managing personal expenses, saving for a goal, or just trying to stay on top of your spending, BudgetBuddy is here to help. 
                </p>
              </div>

              <div class=" col-lg-6 mb-0  mb-lg-0">
                <div class="card">
                  <div class="card py-0 px-md-0">
                    <div className="resgister-page ">
                      {loading && <Spinner />}
                      <Form layout="vertical" onFinish={submitHandler}>
                        <h1>Register Form</h1>
                        <Form.Item label="Name" name="name">
                          <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                          <Input type="email" />
                        </Form.Item>
                        <Form.Item label="Password" name="password">
                          <Input type="password" />
                        </Form.Item>
                        <div className=" justify-content-between">
                          <Link to="/login">Already Register ? Cleck Here to login</Link>
                        </div>
                        <button className="  my-4 btn btn-primary btn-block ">Resgiter</button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;