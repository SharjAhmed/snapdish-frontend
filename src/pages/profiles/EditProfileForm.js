import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import {
    useCurrentUser,
    useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const ProfileEditForm = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const { id } = useParams();
    const history = useHistory();
    const imageFile = useRef();

    const [profileData, setProfileData] = useState({
        name: "",
        content: "",
        image: "",
    });
    const { name, content, image } = profileData;

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const handleMount = async () => {
            if (currentUser?.profile_id?.toString() === id) {
                try {
                    const { data } = await axiosReq.get(`/profiles/${id}/`);
                    const { name, content, image } = data;
                    setProfileData({ name, content, image });
                } catch (err) {
                    // console.log(err);
                    history.push("/");
                }
            } else {
                history.push("/");
            }
        };

        handleMount();
    }, [currentUser, history, id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("content", content);

        if (imageFile?.current?.files[0]) {
            formData.append("image", imageFile?.current?.files[0]);
        }

        try {
            const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
            setCurrentUser((currentUser) => ({
                ...currentUser,
                profile_image: data.image,
            }));
            history.goBack();
        } catch (err) {
            // console.log(err);
            setErrors(err.response?.data);
        }
    };

    return (
        <Form
            
            onSubmit={handleSubmit}
        >
            <Row className="d-flex align-items-center justify-content-center text-center">
                <Col md={7} lg={6}>
                    <Container className={appStyles.Content}>
                        <Form.Group>
                            {image && (
                                <figure>
                                    <Image src={image} fluid />
                                </figure>
                            )}
                            {errors?.image?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}
                            <div>
                                <Form.Label
                                    className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                                    htmlFor="image-upload"
                                >
                                    Change the image
                                </Form.Label>
                            </div>
                            <Form.Control
                                type="file"
                                id="image-upload"
                                ref={imageFile}
                                accept="image/*"
                                onChange={(e) => {
                                    if (e.target.files.length) {
                                        setProfileData({
                                            ...profileData,
                                            image: URL.createObjectURL(e.target.files[0]),
                                        });
                                    }
                                }}
                            />
                        </Form.Group>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Container>
                    <Col className="d-flex align-items-center justify-content-center text-center">
                        <br />
                        <Button
                            className={btnStyles.Button}
                            type="submit"
                        >
                            Save
                        </Button>
                        <Button
                            className={btnStyles.Button}
                            onClick={() => history.goBack()}
                        >
                            Cancel
                        </Button>
                    </Col>
                </Container>
            </Row>
        </Form>
    );
};

export default ProfileEditForm;