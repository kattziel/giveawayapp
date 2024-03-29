import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Decoration } from "./../../assets/Decoration.svg";
import "../../scss/components_scss/Login.scss";

// firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../components/context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/form");
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  return (
    <div className="login-container">
      <div className="login-logging-section">
        <div className="login-header">
          LOG IN
          <div>
            <Decoration />
          </div>
        </div>

        <form onSubmit={loginHandler} className="login-textarea">
          <div className="login-textarea-content">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-form-text"
            ></input>
          </div>
          <div className="login-textarea-content">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-form-text"
            ></input>
          </div>
          <div className="login-buttons">
            <button type="submit" className="auth-btn">
              Log in
            </button>
            <button className="auth-btn">
              <Link to="../signup">
                Don't have an account?
                <br /> Sign up
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
