import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import EditCommentForm from "./EditCommentForm";

import styles from "../../styles/Form.module.css"
import appStyles from "../../App.module.css"
import btnStyles from "../../styles/Button.module.css"

const Comment = (props) => {
    const {
        id,
        profile_id,
        profile_image,
        owner,
        updated_at,
        content,
        setPost,
        setComments,
    } = props;

    const [showEditForm, setShowEditForm] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const [editedContent, setEditedContent] = useState(content);

    const handleEdit = () => {
        setEditedContent(content);
        setShowEditForm(true);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`);
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count - 1,
                    },
                ],
            }));

            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) { }
    };

    return (
        <div>
            <hr />
            <Container>
                <Row>
                    <Col sm={2}>
                        <Link to={`/profiles/${profile_id}`}>
                            <Avatar src={profile_image} />
                        </Link>
                    </Col>
                    <Col sm={8}>
                        <span className={styles.Owner}>{owner}</span>
                        <span className={appStyles.Date}>{updated_at}</span>
                        {showEditForm ? (
                            <EditCommentForm
                                owner={owner}
                                id={id}
                                content={editedContent}
                                setComments={setComments}
                                setShowEditForm={setShowEditForm}
                                axiosReq={axiosRes}
                            />
                        ) : (
                            <p>{editedContent}</p>
                        )}
                    </Col>
                    <Col sm={2}>
                        {is_owner && !showEditForm && (
                            <>
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Edit Comment</Tooltip>}
                                >
                                    <Button
                                        className={
                                            `fa-solid fa-pencil
                                        ${btnStyles.EditDeleteButton}`
                                        }
                                        onClick={handleEdit}
                                    />
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Delete Comment</Tooltip>}
                                >
                                    <Button
                                        onClick={handleDelete}
                                        className={
                                            `fa-regular fa-trash-can
                                        ${btnStyles.EditDeleteButton}`
                                        }
                                    />
                                </OverlayTrigger>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Comment;
