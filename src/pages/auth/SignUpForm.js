import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import styles from "../../styles/Form.module.css";
import btnStyles from "../../styles/Button.module.css";

import {
    Form,
    Button,
    Col,
    Row,
    Container,
    Alert,
} from "react-bootstrap";



const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });

    const { username, password1, password2 } = signUpData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", signUpData);
            history.push("/signin");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Container className="bg-white col-md-8">
            <Row className="p-4 mt-5 justify-content-md-center">
                <Col className="text-center">
                    <h1 className="mb-3">Sign Up to SnapDish!</h1>
                    <Row className="justify-content-center">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="username" className="text-left mb-2">
                                <Form.Label className="d-none">Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.username?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}

                            <Form.Group controlId="password1" className="mb-2">
                                <Form.Label className="d-none">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password1"
                                    value={password1}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.password1?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}

                            <Form.Group controlId="password2">
                                <Form.Label className="d-none">Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm password"
                                    name="password2"
                                    value={password2}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.password2?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}

                            <br />
                            <Button
                                className={btnStyles.Button}
                                aria-label="Click here to sign up!"
                                variant="primary"
                                type="submit"
                            >
                                Sign Up
                            </Button>
                            {errors.non_field_errors?.map((message, idx) => (
                                <Alert key={idx} variant="warning" className="mt-3">
                                    {message}
                                </Alert>
                            ))}
                        </Form>
                    </Row>
                    <Row className="mt-4 justify-content-center">
                        <p>
                            Already have an account?{" "}
                            <span>
                                <Link
                                    className={styles.Link}
                                    aria-label="Click here to sign in instead"
                                    to="/signin"
                                >
                                    Sign In instead!
                                </Link>
                            </span>
                        </p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpForm;