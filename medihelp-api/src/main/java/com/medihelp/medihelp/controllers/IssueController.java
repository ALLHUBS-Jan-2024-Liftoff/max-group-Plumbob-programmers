// src/main/java/com/example/demo/controller/IssueController.java
package com.example.demo.controller;

import com.example.demo.model.Issue;
import com.example.demo.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    @Autowired
    private IssueService issueService;

    // Create a new issue
    @PostMapping
    public ResponseEntity<Issue> createIssue(@RequestBody Issue issue) {
        Issue savedIssue = issueService.addIssue(issue);
        return ResponseEntity.ok(savedIssue);
    }

    // Delete an issue by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIssue(@PathVariable Long id) {
        Optional<Issue> issue = issueService.findIssueById(id);
        if (issue.isPresent()) {
            issueService.deleteIssue(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }

    // Optional: Get all issues
    @GetMapping
    public ResponseEntity<List<Issue>> getAllIssues() {
        List<Issue> issues = issueService.findAllIssues();
        return ResponseEntity.ok(issues);
    }
}
