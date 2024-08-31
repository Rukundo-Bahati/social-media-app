import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register  ">
      <div className="card">
        <div className="left">
          <h1>Chat Map. </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            dolorem.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login </button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" name="" id="" placeholder="Username" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />
            <input type="text" name="" id="" placeholder="Country" />
            <button>Register </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
