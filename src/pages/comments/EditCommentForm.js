import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import styles from "../../styles/Form.module.css";
import btnStyles from "../../styles/Button.module.css"

import { axiosRes } from "../../api/axiosDefaults";

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
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                    return comment.id === id
                        ? {
                            ...comment,
                            content: formContent.trim(),
                            updated_at: "now",
                        }
                        : comment;
                }),
            }));
            setShowEditForm(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="pr-1">
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
                    className={`${btnStyles.Button} mt-4`}
                    // disabled={!content.trim()}
                    type="submit"
                >
                    Comment
                </button>
                <button
                    className={`${btnStyles.Button} mt-4`}
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