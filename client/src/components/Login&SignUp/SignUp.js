import React, { useState } from "react";
import { FaCheck, FaEnvelope, FaLock, FaTimes, FaUser } from "react-icons/fa";
// import { createAccountWithEmail } from './LoginManager';
import { Spinner } from "react-bootstrap";
import { useSignup } from "../../hooks/useSignup.js";

// password regex
// ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
// At least one upper case English letter, (?=.*?[A-Z])
// At least one lower case English letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// Minimum eight in length .{8,} (with the anchors)`

const SignUp = ({ handleResponse }) => {
    const [user, setUser] = useState({});
    const {signup, error, loading} = useSignup();
    const [passwordValidation, setPasswordValidation] = useState({
        carLength: false,
        specialChar: false,
        upperLowerCase: false,
        numeric: false,
    });
    const [emailError, setEmailError] = useState({
        emailError: false,
    });

    const handleEmailError = (name, value) => {
        if (name === "email") {
            setEmailError({
                emailError: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            });
        }
    };

    const handleValidation = (name, value) => {
        if (name === "password") {
            setPasswordValidation({
                carLength: value.length > 8,
                specialChar: /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value),
                upperLowerCase: /^(?=.*[a-z])(?=.*[A-Z])/.test(value),
                numeric: /^(?=.*\d)/.test(value),
            });
        }
    };

    const handleOnChange = (e) => {
        let { name, value } = e.target;
        handleValidation(name, value);
        handleEmailError(name, value);
        let isPassValid = true;

        if (value === "email") {
            isPassValid = /\S+@\S+\.\S+/.test(value);
        }
        if (value === "password") {
            isPassValid =
                value.length > 8 &&
                /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value) &&
                /^(?=.*[a-z])(?=.*[A-Z])/.test(value) &&
                /^(?=.*\d)/.test(value);
        }
        if (isPassValid) {
            const newPass = { ...user };
            newPass[name] = value;
            setUser(newPass);
        }
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const registerInfo = {
            username : user.displayName,
            email: user.email,
            password: user.password
        }
        await signup(registerInfo);
    };

    return (
        <form className="sign-up-form" onSubmit={handleOnSubmit}>
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
                <span className="fIcon">
                    <FaUser />
                </span>
                <input
                    placeholder="Name"
                    name="displayName"
                    type="text"
                    onChange={(e) => handleOnChange(e)}
                />
            </div>
            <div className="input-field">
                <span className="fIcon">
                    <FaEnvelope />
                </span>
                <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={(e) => handleOnChange(e)}
                />
            </div>
            <div className="input-field">
                <span className="fIcon">
                    <FaLock />
                </span>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => handleOnChange(e)}
                />
            </div>
            {error && <div style={{ padding: "10px", background: "#ffefef", border: "1px solid var(--error)", color: "var(--error)", borderRadius: "4px", margin: "20px 0" }}>{error}</div>}
            <button
                type="submit"
                className="btn btn-primary btn-block mt-2 iBtn"
                disabled={
                    passwordValidation.carLength &&
                        passwordValidation.numeric &&
                        passwordValidation.upperLowerCase &&
                        passwordValidation.specialChar &&
                        emailError.emailError
                        ? ""
                        : true
                }
            >
                {loading ? <Spinner animation="border" variant="info" /> : "Sign Up"}
            </button>

            <div className="password-validatity mx-auto">
                <div
                    style={emailError.emailError ? { color: "green" } : { color: "red" }}
                >
                    <p>
                        {passwordValidation.numeric ? <FaCheck /> : <FaTimes />}
                        Must Have Valid Email.
                    </p>
                </div>

                <div
                    style={
                        passwordValidation.carLength ? { color: "green" } : { color: "red" }
                    }
                >
                    <p>
                        {passwordValidation.numeric ? <FaCheck /> : <FaTimes />}
                        Password Must Have atleast 8 character.
                    </p>
                </div>

                <div
                    style={
                        passwordValidation.specialChar
                            ? { color: "green" }
                            : { color: "red" }
                    }
                >
                    <p>
                        {passwordValidation.numeric ? <FaCheck /> : <FaTimes />}
                        Password Must Have a special character.
                    </p>
                </div>

                <div
                    style={
                        passwordValidation.upperLowerCase
                            ? { color: "green" }
                            : { color: "red" }
                    }
                >
                    <p>
                        {passwordValidation.numeric ? <FaCheck /> : <FaTimes />}
                        Password Must Have uppercase and lower case.
                    </p>
                </div>

                <div
                    style={
                        passwordValidation.numeric ? { color: "green" } : { color: "red" }
                    }
                >
                    <p>
                        {passwordValidation.numeric ? <FaCheck /> : <FaTimes />}
                        Password Must Have Number.
                    </p>
                </div>
            </div>

            {/* <p className="social-text">Or Sign up with social account</p>
            <SocialSignUp /> */}
        </form>
    );
};

export default SignUp;
