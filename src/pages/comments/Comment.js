import React, { useState } from "react";
import styles from "../../styles/Form.module.css"
import appStyles from "../../App.module.css"
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import EditDeleteDropdown from "../../components/EditDeleteDropdown"
import EditCommentForm from "./EditCommentForm";

const Comment = (props) => {
    const {
        id,
        profile_id,
        profile_image,
        owner,
        updated_at,
        content,
        setPost,
        setComments
    } = props;

    const [showEditForm, setShowEditForm] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

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
                    <Col sm={10}>
                        <span className={styles.Owner}>{owner}</span>
                        <span className={appStyles.Date}>{updated_at}</span>
                        {showEditForm ? (
                            <EditCommentForm
                                id={id}
                                profile_id={profile_id}
                                content={content}
                                profileImage={profile_image}
                                setComments={setComments}
                                setShowEditForm={setShowEditForm}
                            />
                        ) : (
                            <p>{content}</p>
                        )}
                    </Col>
                    </Row>
                    <Row>
                    <Col className="text-end">
                        {is_owner && !showEditForm && (
                            <EditDeleteDropdown
                                handleEdit={() => setShowEditForm(true)}
                                handleDelete={handleDelete}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Comment;
