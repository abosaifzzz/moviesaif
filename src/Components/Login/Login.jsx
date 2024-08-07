import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .matches(
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                'Invalid email address'
            )
            .required('Required'),
        password: Yup.string()
            .required('Required')
    });

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-center">Login</h1>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validationSchema={validationSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    console.log(values);
                                    setSubmitting(false);
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Field type="email" name="email" className="form-control" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <div className="input-group">
                                                <Field type={showPassword ? 'text' : 'password'} name="password" className="form-control" />
                                                <div className="input-group-append">
                                                    <button type="button" className="btn btn-outline-secondary" onClick={togglePasswordVisibility}>
                                                        {showPassword ? 'Hide' : 'Show'}
                                                    </button>
                                                </div>
                                            </div>
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                                                Login
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
