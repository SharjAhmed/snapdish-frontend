import React, { useState } from "react";
import { axiosRes } from "../../api/axiosDefaults";

import { Form } from "react-bootstrap";

import styles from "../../styles/Form.module.css";
import btnStyles from "../../styles/Button.module.css"

function EditCommentForm(props) {
    const { id, content, setShowEditForm, setComments } = props;

    const [formContent, setFormContent] = useState(content);

    const handleChange = (event) => {
        setFormContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put(`/comments/${id}/`, {
                content: formContent.trim(),
            });
            setComments((prevComments) => {
                const updatedComments = prevComments.results.map((comment) =>
                    comment.id === id
                        ? {
                            ...comment,
                            content: formContent.trim(),
                            updated_at: "now",
                        }
                        : comment
                );
                return { ...prevComments, results: updatedComments };
            });
            setShowEditForm(false);
        } catch (err) {
            // console.log(err);
        }
    };


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group
                className="pr-1"
                controlId={`editComment_${id}`}
            >
                <Form.Control
                    className={styles.Form}
                    as="textarea"
                    value={formContent}
                    onChange={handleChange}
                    rows={2}
                />
            </Form.Group>
            <div>
                <button
                    className={btnStyles.Button}
                    disabled={!content.trim()}
                    type="submit"
                >
                    Comment
                </button>
                <button
                    className={btnStyles.Button}
                    onClick={() => setShowEditForm(false)}
                    type="button"
                >
                    Cancel
                </button>
            </div>
        </Form>
    );
}

export default EditCommentForm;