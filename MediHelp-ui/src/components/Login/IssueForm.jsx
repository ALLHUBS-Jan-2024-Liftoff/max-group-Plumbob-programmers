import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:5173/api/issues'; // Base URL of your Spring Boot application

const IssueForm = () => {
    const [issues, setIssues] = useState([]);
    const [newIssue, setNewIssue] = useState({ issueType: '', description: '' });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    // Fetch issues from the backend
    const fetchIssues = async () => {
        try {
            const response = await axios.get(apiUrl);
            setIssues(response.data);
        } catch (error) {
            console.error('Error fetching issues:', error);
            setError('Error fetching issues');
        }
    };

    // Create a new issue
    const createIssue = async (issueData) => {
        try {
            await axios.post(apiUrl, issueData);
            setSuccessMessage('Issue submitted successfully');
            // Optionally refetch issues after creation
            fetchIssues();
        } catch (error) {
            console.error('Error submitting issue:', error);
            setError('Error submitting issue');
        }
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newIssue.issueType || !newIssue.description) {
            setError('Please fill out both fields');
            return;
        }
        createIssue(newIssue);
        setNewIssue({ issueType: '', description: '' }); // Clear the form after submission
    };

    // Fetch issues when the component mounts
    useEffect(() => {
        fetchIssues();
    }, []);

    return (
        <div>
            <h2>Issue Form</h2>
            {error && <div className="error">{error}</div>}
            {successMessage && <div className="success">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="issueType">Issue Type:</label>
                    <input
                        type="text"
                        id="issueType"
                        value={newIssue.issueType}
                        onChange={(e) => setNewIssue({ ...newIssue, issueType: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={newIssue.description}
                        onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <h3>Existing Issues</h3>
            <ul>
                {issues.length > 0 ? (
                    issues.map((issue) => (
                        <li key={issue.id}>
                            <strong>{issue.issueType}:</strong> {issue.description}
                        </li>
                    ))
                ) : (
                    <li>No issues available</li>
                )}
            </ul>
        </div>
    );
};

export default IssueForm;
