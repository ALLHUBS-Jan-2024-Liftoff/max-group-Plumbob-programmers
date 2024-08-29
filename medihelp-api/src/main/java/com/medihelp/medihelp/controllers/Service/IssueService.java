// src/main/java/com/example/demo/service/IssueService.java
package com.example.demo.service;

import com.example.demo.model.Issue;
import com.example.demo.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IssueService {

    @Autowired
    private IssueRepository issueRepository;

    // Method to add a new issue
    public Issue addIssue(Issue issue) {
        return issueRepository.save(issue);
    }

    // Method to delete an issue by ID
    public void deleteIssue(Long id) {
        issueRepository.deleteById(id);
    }

    // Method to find an issue by ID
    public Optional<Issue> findIssueById(Long id) {
        return issueRepository.findById(id);
    }

    // Optional: List all issues
    public List<Issue> findAllIssues() {
        return issueRepository.findAll();
    }
}
