import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const IssueForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [issues, setIssues] = useState([]);
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [newComment, setNewComment] = useState('');
    const [editingComment, setEditingComment] = useState(null);

    useEffect(() => {
        // Fetch all issues and their comments on component mount
        axios.get('/issues')
            .then(response => setIssues(response.data))
            .catch(error => console.error('Error fetching issues:', error));
    }, []);

    const handleAddIssue = () => {
        // Add a new issue to the database
        axios.post('/issues', { title, description })
            .then(response => {
                setIssues([...issues, response.data]);
                setTitle('');
                setDescription('');
            })
            .catch(error => console.error('Error adding issue:', error));
    };

    const handleAddComment = () => {
        // Add a comment to the selected issue
        if (selectedIssue) {
            axios.post(`/issues/${selectedIssue.issue_id}/comments`, { comment_text: newComment })
                .then(response => {
                    setSelectedIssue({
                        ...selectedIssue,
                        comments: [...selectedIssue.comments, response.data]
                    });
                    setNewComment('');
                })
                .catch(error => console.error('Error adding comment:', error));
        }
    };

    const handleEditComment = (comment) => {
        // Set the comment to be edited
        setEditingComment(comment);
        setNewComment(comment.comment_text);
    };

    const handleUpdateComment = () => {
        // Update an existing comment
        if (editingComment) {
            axios.put(`/comments/${editingComment.comment_id}`, { comment_text: newComment })
                .then(response => {
                    setSelectedIssue({
                        ...selectedIssue,
                        comments: selectedIssue.comments.map(comment =>
                            comment.comment_id === editingComment.comment_id ? response.data : comment
                        )
                    });
                    setNewComment('');
                    setEditingComment(null);
                })
                .catch(error => console.error('Error updating comment:', error));
        }
    };

    const handleDeleteComment = (commentId) => {
        // Delete a comment from the database
        axios.delete(`/comments/${commentId}`)
            .then(() => {
                setSelectedIssue({
                    ...selectedIssue,
                    comments: selectedIssue.comments.filter(comment => comment.comment_id !== commentId)
                });
            })
            .catch(error => console.error('Error deleting comment:', error));
    };

    return (
        <div>
            <h2>Create New Issue</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Issue Title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Issue Description"
            />
            <button onClick={handleAddIssue}>Add Issue</button>

            <h2>Issues List</h2>
            {issues.map(issue => (
                <div key={issue.issue_id}>
                    <h3>{issue.title}</h3>
                    <p>{issue.description}</p>
                    <button onClick={() => setSelectedIssue(issue)}>View Comments</button>
                </div>
            ))}

            {selectedIssue && (
                <div>
                    <h2>Comments for {selectedIssue.title}</h2>
                    {selectedIssue.comments.map(comment => (
                        <div key={comment.comment_id}>
                            <p>{comment.comment_text}</p>
                            <button onClick={() => handleEditComment(comment)}>Edit Comment</button>
                            <button onClick={() => handleDeleteComment(comment.comment_id)}>Delete Comment</button>
                        </div>
                    ))}
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a new comment"
                    />
                    {editingComment ? (
                        <button onClick={handleUpdateComment}>Update Comment</button>
                    ) : (
                        <button onClick={handleAddComment}>Add Comment</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default IssueForm;
