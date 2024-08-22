package com.medihelp.medihelp.controller;
import com.medihelp.medihelp.model.User;
import com.medihelp.medihelp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



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

    @PutMapping("/users/edit/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id).map(user -> {
            if (newUser.getUsername() != null) {
                user.setUsername(newUser.getUsername());
            }
            if (newUser.getEmail() != null) {
                user.setEmail(newUser.getEmail());
            }
            if (newUser.getPassword() != null) {
                user.setPassword(newUser.getPassword());
            }
            return userRepository.save(user);
        }).orElseThrow(() -> new RuntimeException("User ID not Found"));
    }


}
