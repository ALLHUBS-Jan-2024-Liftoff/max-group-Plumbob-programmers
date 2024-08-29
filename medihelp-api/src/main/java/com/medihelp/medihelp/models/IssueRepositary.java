// src/main/java/com/example/demo/repository/IssueRepository.java
package com.example.demo.repository;

import com.example.demo.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {
    // JpaRepository provides built-in methods like save(), findById(), deleteById(), etc.
}
