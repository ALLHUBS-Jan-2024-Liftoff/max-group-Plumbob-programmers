import React, { useState } from 'react';

const IssueForm = () => {
  
  const [formData, setFormData] = useState({
    issueType: '',
    description: ''
  });

  // State to handle form submission status
  const [submissionStatus, setSubmissionStatus] = useState('');

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if form data is valid
    if (!formData.issueType || !formData.description) {
      setSubmissionStatus('Please fill in all fields.');
      return;
    }

    try {
      // Send form data to the backend API
      const response = await fetch('https://data.cms.gov/issues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle server response
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Clear form data and update status on successful submission
      setFormData({
        issueType: '',
        description: ''
      });
      setSubmissionStatus('Issue submitted successfully!');
    } catch (error) {
      setSubmissionStatus(`Error submitting issue: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Submit an Issue</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="issueType">Issue Type</label>
          <select
            id="issueType"
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            required
          >
            <option value="">Select an issue type</option>
            <option value="Bug">Bug</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submissionStatus && <p>{submissionStatus}</p>}
    </div>
  );
};

export default IssueForm;
