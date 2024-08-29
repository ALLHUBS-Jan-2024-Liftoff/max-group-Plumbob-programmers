import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IssueForm = () => {
    const [issueType, setIssueType] = useState('');
    const [description, setDescription] = useState('');
    const [issues, setIssues] = useState([]);
    const [error, setError] = useState(null);

    // Fetch issues from the backend
    const fetchIssues = async () => {
        try {
            const response = await axios.get('https://data.cms.gov/api/issues'); // Ensure this matches your Spring Boot endpoint
            setIssues(response.data);
        } catch (error) {
            setError(error);
            console.error('Error fetching issues:', error);
        }
    };

    // Fetch issues on component mount
    useEffect(() => {
        fetchIssues();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Submit form data to backend
            await axios.post('/api/issues', { issueType, description });
            alert('Issue submitted successfully!');
            // Optionally fetch updated list of issues
            fetchIssues();
        } catch (error) {
            console.error('Error submitting issue:', error);
        }
    };

    return (
        <div>
            <h2>Submit an Issue</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Issue Type</label>
                    <input
                        type="text"
                        value={issueType}
                        onChange={(e) => setIssueType(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Issue</button>
            </form>
            {error && <div>Error: {error.message}</div>}
            <div>
                <h3>Existing Issues</h3>
                {issues.length > 0 ? (
                    <ul>
                        {issues.map((issue) => (
                            <li key={issue.id}>
                                <strong>{issue.issueType}:</strong> {issue.description}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No issues found.</p>
                )}
            </div>
        </div>
    );
};

export default IssueForm;
