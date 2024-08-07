import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Register() {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        userName: "",
        password: "",
        rePassword: ""
    });

    const [errors, setErrors] = useState({
        nameErr: "",
        emailErr: "",
        userNameErr: "",
        passwordErr: "",
        rePasswordErr: ""
    });

    const handleForm = (e) => {
        const { name, value } = e.target;
        const validateEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        };
        const containsSpaces = /\s/.test(value);



        setDetails({
            ...details,
            [name]: value
        });

        if (name === "name") {
            setErrors({
                ...errors,
                nameErr: value.length === 0 ? "This Field is Required" : value.length < 3 ? "Please Insert a Valid Name" : ""
            });
        } else if (name === "email") {
            setErrors({
                ...errors,
                emailErr: value.length === 0 ? "You should add a valid Email" : !validateEmail(value) ? "Please Insert a Valid Email" : ""
            }); console.log(value);
        } else if (name === "userName") {
            setErrors({
                ...errors,
                userNameErr: value.length === 0 ? "This Field is Required" : containsSpaces ? "Username should not contain spaces" : value.length < 3 ? "Please Insert a Valid Username" : ""
            }); console.log(value);
        } else if (name === "password") {
            setErrors({
                ...errors,
                passwordErr: value.length === 0 ? "This Field is Required" : value.length < 6 ? "Password must be at least 6 characters long" : ""
            }); console.log(value);
        } else if (name === "rePassword") {
            setErrors({
                ...errors,
                rePasswordErr: value.length === 0 ? "This Field is Required" : value !== details.password ? "Passwords do not match" : ""
            }); console.log(value);
        }
    };

    return (
        <>
            <div>
                <h2>Register Form</h2>
                <form >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            className={`form-control ${errors.nameErr && "border-danger"}`}
                            name="name"
                            value={details.name}
                            onChange={handleForm}
                        />
                        {errors.nameErr && <div className="text-danger">{errors.nameErr}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className={`form-control ${errors.emailErr && "border-danger"}`}
                            name="email"
                            value={details.email}
                            onChange={handleForm}
                        />
                        {errors.emailErr && <div className="text-danger">{errors.emailErr}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            value={details.userName}
                            onChange={handleForm}
                        />
                        {errors.userNameErr && <div className="text-danger">{errors.userNameErr}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={details.password}
                            onChange={handleForm}
                        />
                        {errors.passwordErr && <div className="text-danger">{errors.passwordErr}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rePassword" className="form-label">Re-Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="rePassword"
                            value={details.rePassword}
                            onChange={handleForm}
                        />
                        {errors.rePasswordErr && <div className="text-danger">{errors.rePasswordErr}</div>}
                    </div>
                    <button disabled={errors.nameErr || errors.emailErr || errors.userNameErr || errors.passwordErr || errors.rePasswordErr} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}
