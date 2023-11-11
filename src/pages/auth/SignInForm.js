import React, { useState } from "react";
import axios from "axios";

import {
    Form,
    Button,
    Col,
    Row,
    Container,
    Alert,
} from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/Form.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

function SignInForm() {
    const setCurrentUser = useSetCurrentUser();

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = signInData;

    const [errors, setErrors] = useState({});

    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post("/dj-rest-auth/login/", signInData);
            setCurrentUser(data.user);
            history.push("/");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Container className="bg-white col-md-8">
            <Row className="p-4 mt-5 justify-content-md-center">
                <Col className="text-center">
                    <h1 className="mb-3">Sign In to SnapDish!</h1>
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

                            <Form.Group controlId="password" className="mb-2">
                                <Form.Label className="d-none">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.password?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}
                            <Button
                                className={btnStyles.Button}
                                aria-label="Click here to sign in!"
                                variant="primary"
                                type="submit"
                            >
                                Sign In
                            </Button>
                        </Form>
                    </Row>
                    <Row className="mt-4 justify-content-center">
                        <p>
                            Don't have an account?{" "}
                            <span>
                                <Link
                                    className={styles.Link}
                                    aria-label="Click here to sign up instead"
                                    to="/signup"
                                >
                                    Sign Up instead!
                                </Link>
                            </span>
                        </p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SignInForm;