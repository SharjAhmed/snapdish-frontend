import React from "react";
import styles from "../../styles/Posts.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        title,
        content,
        image,
        updated_at,
        postPage,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <Link to={`/profiles/${profile_id}`}>
                                <Avatar
                                    src={profile_image}
                                    height={55}
                                />
                                {owner}
                            </Link>
                        </Col>
                        <Col className="text-end">
                            {is_owner && postPage && (
                                <>
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip>Edit Post</Tooltip>}
                                    >
                                        <i
                                            className="fa-solid fa-pencil"
                                            onClick={handleEdit}
                                        ></i>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip>Delete Post</Tooltip>}
                                    >
                                        <i
                                            className={`fa-regular fa-trash-can ${styles.Bin}`}
                                            onClick={handleDelete}
                                        ></i>
                                    </OverlayTrigger>
                                </>
                            )}
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            <Link to={`/posts/${id}`}>
                <Card.Img src={image} alt={title} className={styles.Image} />
            </Link>
            <Card.Body>
                {title &&
                    <Card.Title
                        className="fs-3 fw-bold text-decoration-underline"
                    >
                        {title}
                    </Card.Title>}
                {content &&
                    <Card.Text>
                        {content}
                    </Card.Text>}
                {updated_at &&
                    <Card.Subtitle
                        className={`mb-2 text-muted ${styles.Date}`}
                    >
                        {updated_at}
                    </Card.Subtitle>
                }
                <hr />
                <div className={styles.PostBar}>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't like your own post!</Tooltip>}
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    ) : like_id ? (
                        <span onClick={handleUnlike}>
                            <i className={`fas fa-heart ${styles.Heart}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleLike}>
                            <i className={`far fa-heart ${styles.HeartOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to like posts!</Tooltip>}
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    )}
                    {likes_count}
                    <Link to={`/posts/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    {comments_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;