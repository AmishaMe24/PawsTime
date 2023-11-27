import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";
import { useLogin } from "../../hooks/useLogin.js";

const Login = ({ handleResponse }) => {
  const { login, error, loading } = useLogin();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 10000);

  const onSubmit = async (event) => {
    await login(event);
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <span className="fIcon">
          <FaEnvelope />
        </span>
        <input
          {...register("email", { required: true })}
          placeholder="Enter Your Email"
          type="email"
        />
      </div>
      {errors.email && (
        <span className="text-warning">This field is required</span>
      )}
      <div className="input-field">
        <span className="fIcon">
          <FaLock />
        </span>
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Enter Your Password"
        />
      </div>
      {errors.password && (
        <span className="text-warning">This field is required</span>
      )}
      {error && (
        <div
          style={{
            padding: "10px",
            background: "#ffefef",
            border: "1px solid var(--error)",
            color: "var(--error)",
            borderRadius: "4px",
            margin: "20px 0",
          }}
        >
          {error}
        </div>
      )}

      <button className="iBtn" type="submit" value="sign In">
        {loading ? <Spinner animation="border" variant="info" /> : "Sign In"}
      </button>
      {/* <p className="social-text">Or Sign in with social platforms</p>
      <SocialSignUp handleResponse={handleResponse} /> */}
    </form>
  );
};

export default Login;