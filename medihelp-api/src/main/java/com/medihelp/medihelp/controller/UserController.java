package com.medihelp.medihelp.controller;


import com.medihelp.medihelp.model.User;
import com.medihelp.medihelp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    public Iterable<User> displayUsers() {
        return userRepository.findAll();
}

    @GetMapping("/users/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("User not found"));

    }

    @DeleteMapping("/users/{id}")
    String deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return "user with id " + id + " has been deleted.";
    }

}
