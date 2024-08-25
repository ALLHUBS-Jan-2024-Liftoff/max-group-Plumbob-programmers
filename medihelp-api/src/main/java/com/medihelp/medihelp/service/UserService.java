package com.medihelp.medihelp.service;


import com.medihelp.medihelp.config.JwtService;
import com.medihelp.medihelp.model.User;
import com.medihelp.medihelp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService  {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    public String registerUser(String username, String password, String email) {
        System.out.println("Raw Password: " + password);
        User user = new User(username, passwordEncoder.encode(password), email);
//        user.setUsername(username);
//        user.setPassword(passwordEncoder.encode(password));
//        user.setPassword(password);
        userRepository.save(user);
        return jwtService.generateToken(user.getUsername());
    }

    public String loginUser(String username, String password) {
        User user = userRepository.findByUsername(username);
//        System.out.println(user.getUsername());
//        System.out.println("Raw Password: " + password);
//        System.out.println("Encoded Password: " + user.getPassword());
//        System.out.println(passwordEncoder.matches(password, user.getPassword()));
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return jwtService.generateToken(user.getUsername());
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
    public String getAuthenticatedUsername() {
        // Get the current authentication object
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // Check if the authentication object is not null and is an instance of UsernamePasswordAuthenticationToken
        if (authentication != null && authentication.getPrincipal() instanceof String) {
            // Retrieve the username from the authentication object
            return (String) authentication.getPrincipal();
        }

        // Return an appropriate response if the user is not authenticated
        return "No user is authenticated";
    }

}